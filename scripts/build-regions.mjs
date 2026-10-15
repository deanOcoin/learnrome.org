// clips each seed polygon (scripts/seed/*.json) to Natural Earth land, carves it around
// regions already placed in PRIORITY order, and emits regions.json + regionMeta.ts.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import * as topojson from 'topojson-client';
import pc from 'polygon-clipping';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SEED_DIR = join(__dirname, 'seed');
const OUT_GEO = join(ROOT, 'src', 'data', 'regions.json');
const OUT_META = join(ROOT, 'src', 'data', 'regionMeta.ts');

// Atlantic to eastern Iran, Sahara/Yemen to northern Britain
const BBOX = { lonMin: -12, latMin: 10, lonMax: 64, latMax: 62 };
// degrees (~3 km), applied to the land before clipping so every region shares one coast
const SIMPLIFY_TOLERANCE = 0.03;
// square degrees, anything smaller is a sliver
const MIN_RING_AREA = 0.02;
const ROUND = 100; // 2 decimal places ≈ 1 km

// fine to coarse: earlier regions keep their authored boundary, later ones are carved around them
const PRIORITY = [
  // magna-graecia first so it keeps its coastal strip
  'magna-graecia', 'liguria', 'umbria', 'picenum', 'latium', 'campania',
  'samnium', 'apulia', 'lucania-bruttium', 'etruria', 'venetia', 'cisalpina',
  'sicilia', 'sardinia-corsica',
  // small islands
  'baleares', 'creta', 'cyprus', 'rhodes-aegean',
  // balkans, small first
  'illyricum-north', 'epirus',
  // east, small before large
  'judaea', 'osroene', 'assyria', 'cilicia', 'lycia-pamphylia', 'asia',
  'bithynia-pontus', 'galatia', 'cappadocia', 'syria', 'armenia',
  'arabia-petraea', 'mesopotamia', 'caucasus', 'media', 'persis',
  // north-west
  'agri-decumates', 'germania-inferior', 'germania-superior',
  'gallia-narbonensis', 'gallia-belgica', 'gallia-lugdunensis',
  'gallia-aquitania', 'britannia-north', 'britannia-south', 'caledonia',
  'hibernia',
  // danube and the large balkan regions
  'raetia', 'noricum', 'pannonia', 'dalmatia', 'moesia', 'dacia', 'macedonia',
  'thracia', 'achaea',
  // africa
  'aegyptus', 'cyrenaica', 'africa-proconsularis', 'numidia',
  'mauretania-caesariensis', 'mauretania-tingitana',
  // interior last, it overlaps the other Iberian seeds freely
  'hispania-baetica', 'lusitania', 'hispania-tarraconensis', 'hispania-interior',
  // coarse peripheries, carved around everything else
  'aethiopia-nubia', 'arabia-felix', 'hunnic-heartland', 'parthia-core',
  'germania-magna', 'pontic-steppe',
];

// Natural Earth 1:50m land (public domain) from the world-atlas package
function loadLand() {
  const path = join(ROOT, 'node_modules', 'world-atlas', 'land-50m.json');
  const topo = JSON.parse(readFileSync(path, 'utf8'));
  const feature = topojson.feature(topo, topo.objects.land);
  const geom = feature.type === 'FeatureCollection' ? feature.features[0].geometry : feature.geometry;
  return geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
}

function bboxPolygon() {
  const { lonMin, latMin, lonMax, latMax } = BBOX;
  return [[[
    [lonMin, latMin], [lonMax, latMin], [lonMax, latMax], [lonMin, latMax], [lonMin, latMin],
  ]]];
}

// Douglas-Peucker on a closed ring, first == last kept
function simplifyRing(ring, tol) {
  if (ring.length <= 4) return ring;
  const keep = new Array(ring.length).fill(false);
  keep[0] = keep[ring.length - 1] = true;
  const stack = [[0, ring.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    let maxD = 0;
    let maxI = -1;
    const [ax, ay] = ring[a];
    const [bx, by] = ring[b];
    const dx = bx - ax;
    const dy = by - ay;
    const len2 = dx * dx + dy * dy;
    for (let i = a + 1; i < b; i++) {
      const [px, py] = ring[i];
      let d;
      if (len2 === 0) {
        d = Math.hypot(px - ax, py - ay);
      } else {
        const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len2));
        d = Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
      }
      if (d > maxD) {
        maxD = d;
        maxI = i;
      }
    }
    if (maxD > tol) {
      keep[maxI] = true;
      stack.push([a, maxI], [maxI, b]);
    }
  }
  const out = ring.filter((_, i) => keep[i]);
  return out.length >= 4 ? out : ring;
}

function simplifyMultiPolygon(mp, tol) {
  const out = [];
  for (const poly of mp) {
    const rings = poly
      .map((r) => simplifyRing(r, tol))
      .filter((r) => r.length >= 4 && Math.abs(ringArea(r)) >= MIN_RING_AREA / 4);
    if (rings.length) out.push(rings);
  }
  return out;
}

function ringArea(ring) {
  let a = 0;
  for (let i = 0; i < ring.length - 1; i++) {
    a += ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
  }
  return a / 2;
}

function cleanMultiPolygon(mp) {
  const out = [];
  for (const poly of mp) {
    if (!poly.length) continue;
    if (Math.abs(ringArea(poly[0])) < MIN_RING_AREA) continue;
    const rings = [poly[0], ...poly.slice(1).filter((r) => Math.abs(ringArea(r)) > MIN_RING_AREA / 2)];
    out.push(
      rings.map((r, ri) => {
        // d3-geo wants exterior rings clockwise (negative planar area) and holes counterclockwise,
        // the opposite of RFC 7946 which polygon-clipping emits. wrong winding renders as the whole world minus the region
        const a = ringArea(r);
        const wantNegative = ri === 0;
        const oriented = (wantNegative ? a > 0 : a < 0) ? [...r].reverse() : r;
        return oriented.map(([x, y]) => [Math.round(x * ROUND) / ROUND, Math.round(y * ROUND) / ROUND]);
      })
    );
  }
  return out;
}

function seedToMultiPolygon(rings) {
  // every seed ring is its own outer ring, no holes, closed here if the author didn't
  return rings.map((r) => {
    const ring = [...r];
    const [fx, fy] = ring[0];
    const [lx, ly] = ring[ring.length - 1];
    if (fx !== lx || fy !== ly) ring.push([fx, fy]);
    return [ring];
  });
}

console.time('total');
console.time('land');
const landRaw = loadLand();
const landClipped = pc.intersection(landRaw, bboxPolygon());
const land = simplifyMultiPolygon(landClipped, SIMPLIFY_TOLERANCE);
console.timeEnd('land');
console.log(`land polygons: ${land.length}, points: ${countPoints(land)}`);

const seeds = new Map();
for (const f of readdirSync(SEED_DIR).filter((f) => f.endsWith('.json'))) {
  const data = JSON.parse(readFileSync(join(SEED_DIR, f), 'utf8'));
  for (const r of data.regions) {
    if (seeds.has(r.id)) throw new Error(`duplicate seed region: ${r.id} (in ${f})`);
    seeds.set(r.id, r);
  }
}

const missing = PRIORITY.filter((id) => !seeds.has(id));
const extra = [...seeds.keys()].filter((id) => !PRIORITY.includes(id));
if (missing.length) console.warn(`MISSING seeds: ${missing.join(', ')}`);
if (extra.length) console.warn(`UNKNOWN seed ids (not in priority list): ${extra.join(', ')}`);

const features = [];
const meta = [];
let placedUnion = null;

for (const id of PRIORITY) {
  const seed = seeds.get(id);
  if (!seed) continue;
  const seedMP = seedToMultiPolygon(seed.rings);
  let geom;
  try {
    geom = pc.intersection(seedMP, land);
    if (placedUnion && geom.length) geom = pc.difference(geom, placedUnion);
  } catch (err) {
    console.error(`FAILED clipping ${id}: ${err.message}`);
    continue;
  }
  geom = cleanMultiPolygon(geom);
  if (!geom.length) {
    console.warn(`EMPTY after clip: ${id} — seed may be all sea or fully covered by higher-priority regions`);
    continue;
  }
  try {
    placedUnion = placedUnion ? pc.union(placedUnion, geom) : geom;
  } catch (err) {
    console.warn(`union failed after ${id} (continuing without adding): ${err.message}`);
  }
  features.push({
    type: 'Feature',
    id,
    properties: {},
    geometry: { type: 'MultiPolygon', coordinates: geom },
  });
  meta.push({
    id,
    name: seed.name,
    modernHint: seed.modernHint,
    labelAnchor: seed.labelAnchor,
    labelMinZoom: seed.labelMinZoom ?? 1,
  });
}

function countPoints(mp) {
  return mp.reduce((s, p) => s + p.reduce((t, r) => t + r.length, 0), 0);
}

const fc = { type: 'FeatureCollection', features };
writeFileSync(OUT_GEO, JSON.stringify(fc));

const metaTs = `// GENERATED by scripts/build-regions.mjs — do not edit by hand.
import type { RegionId, RegionMeta } from '../types';

export const REGION_META: Partial<Record<RegionId, RegionMeta>> = {
${meta
  .map(
    (m) =>
      `  '${m.id}': { id: '${m.id}', name: ${JSON.stringify(m.name)}, modernHint: ${JSON.stringify(m.modernHint)}, labelAnchor: [${m.labelAnchor[0]}, ${m.labelAnchor[1]}], labelMinZoom: ${m.labelMinZoom} },`
  )
  .join('\n')}
};
`;
writeFileSync(OUT_META, metaTs);

const kb = (statSync(OUT_GEO).size / 1024).toFixed(1);
console.log(`\nwrote ${features.length} regions → regions.json (${kb} KB), regionMeta.ts`);
for (const f of features) {
  const pts = countPoints(f.geometry.coordinates);
  if (pts > 800) console.log(`  large: ${f.id} — ${pts} pts`);
}
console.timeEnd('total');
