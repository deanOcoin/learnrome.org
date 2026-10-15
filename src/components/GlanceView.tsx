// the same map at 264 BCE, 117 CE and 400 CE side by side, each with a stacked
// bar of Roman control so the three moments compare numerically too.

import { useMemo } from 'react';
import { geoConicConformal, geoPath, type GeoPermissibleObjects } from 'd3-geo';
import type { FeatureCollection, MultiPolygon } from 'geojson';
import regionsRaw from '../data/regions.json';
import { EVENTS, eventIndexById } from '../data/events';
import { buildControlTimeline } from '../lib/resolveControl';
import { statusFill } from '../lib/statusStyle';
import { makeTimelineScale } from '../lib/timelineScale';
import { formatYear, type ControlStatus, type RegionId } from '../types';
import { Veil, SheetHeader, roman } from './ui';

const regions = regionsRaw as unknown as FeatureCollection<MultiPolygon> & {
  features: { id: RegionId }[];
};

const W = 280;
const H = 196;

const FRAME: GeoPermissibleObjects = {
  type: 'Polygon',
  coordinates: [
    [
      [-10, 23.5],
      [-10, 52.5],
      [42, 52.5],
      [42, 23.5],
      [-10, 23.5],
    ],
  ],
};

// anchored to events, not bare years: "last event at or before 117 CE" would be
// Hadrian's withdrawal, showing the east already given back under "maximum extent"
const MOMENTS: { anchor: string; caption: string; note: string }[] = [
  {
    anchor: 'first-punic-264bce',
    caption: '264 BCE',
    note: 'Italy united under Rome; the First Punic War about to begin. Rome holds no province at all — everything outside the peninsula is somebody else’s.',
  },
  {
    anchor: 'trajan-parthia-114ce',
    caption: '117 CE',
    note: 'Maximum extent under Trajan. Mesopotamia and Armenia are held — dotted, because Hadrian gives them back within a year of this map.',
  },
  {
    anchor: 'stilicho-395ce',
    caption: '400 CE',
    note: 'Divided, Christian, and six years from the Rhine crossing. The shape still looks imperial; the western tax base underneath it does not.',
  },
];

// order matters, most firmly Roman first
const RAMP: { status: ControlStatus; label: string }[] = [
  { status: 'core', label: 'core' },
  { status: 'provincial', label: 'province' },
  { status: 'client', label: 'client' },
  { status: 'contested', label: 'contested' },
  { status: 'transient', label: 'held, briefly' },
  { status: 'breakaway', label: 'breakaway' },
];

function MiniMap({ control }: { control: Record<RegionId, ControlStatus> }) {
  const paths = useMemo(() => {
    const projection = geoConicConformal().parallels([28, 46]).rotate([-16, 0]);
    projection.fitExtent(
      [
        [2, 2],
        [W - 2, H - 2],
      ],
      FRAME
    );
    const path = geoPath(projection);
    return regions.features.map((f) => ({
      id: f.id as RegionId,
      d: path(f as GeoPermissibleObjects) ?? '',
    }));
  }, []);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full bg-sea" role="img" aria-label="Map of Roman control">
      <defs>
        <pattern id="mini-breakaway" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="5" height="5" fill="var(--color-status-provincial)" />
          <line x1="0" y1="0" x2="0" y2="5" stroke="var(--color-sea)" strokeWidth="2" />
        </pattern>
        <pattern id="mini-transient" width="5" height="5" patternUnits="userSpaceOnUse">
          <rect width="5" height="5" fill="var(--color-status-provincial)" />
          <circle cx="2.5" cy="2.5" r="1" fill="var(--color-sea)" opacity="0.75" />
        </pattern>
      </defs>
      {paths.map(({ id, d }) => {
        const s = control[id] ?? 'unshown';
        let fill = statusFill(s);
        if (s === 'breakaway') fill = 'url(#mini-breakaway)';
        if (s === 'transient') fill = 'url(#mini-transient)';
        return <path key={id} d={d} fill={fill} stroke="var(--color-sea)" strokeWidth={0.4} />;
      })}
    </svg>
  );
}

// stacked bar of Roman control at one moment, in the map's own palette
function CompositionBar({ counts, held }: { counts: Record<string, number>; held: number }) {
  return (
    <div>
      <div className="flex h-[6px] w-full overflow-hidden rounded-sm bg-panel-3">
        {RAMP.map(({ status }) =>
          counts[status] ? (
            <span
              key={status}
              style={{
                width: `${(counts[status] / held) * 100}%`,
                background: status === 'breakaway' ? 'var(--color-status-provincial)' : statusFill(status),
                opacity: status === 'breakaway' ? 0.55 : 1,
              }}
            />
          ) : null
        )}
      </div>
      <div className="tnum mt-1.5 flex flex-wrap gap-x-2.5 gap-y-0.5 text-[10.5px] text-ink-dim">
        {RAMP.filter((r) => counts[r.status]).map((r) => (
          <span key={r.status} className="whitespace-nowrap">
            <span className="text-ink">{counts[r.status]}</span> {r.label}
          </span>
        ))}
      </div>
    </div>
  );
}

interface Props {
  onJumpToYear: (year: number) => void;
  onClose: () => void;
}

export default function GlanceView({ onJumpToYear, onClose }: Props) {
  const tl = useMemo(() => buildControlTimeline(EVENTS), []);
  const scale = useMemo(() => makeTimelineScale(), []);

  const states = useMemo(
    () =>
      MOMENTS.map((m) => {
        const idx = Math.max(0, eventIndexById(m.anchor));
        const year = EVENTS[idx].year;
        const control = tl.stateAt(idx);
        const counts: Record<string, number> = {};
        let held = 0;
        for (const s of Object.values(control)) {
          if (RAMP.some((r) => r.status === s)) {
            counts[s] = (counts[s] ?? 0) + 1;
            held++;
          }
        }
        return { ...m, year, control, counts, held };
      }),
    [tl]
  );

  return (
    <Veil onClose={onClose} label="Rome at a glance">
      <div
        className="plate plate-in scroll-slim my-0 h-full max-h-none w-full max-w-5xl overflow-y-auto rounded-none border-0 bg-panel p-5 shadow-2xl sm:my-auto sm:h-auto sm:max-h-[94dvh] sm:rounded-lg sm:border sm:border-line sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <SheetHeader
          eyebrow="Comparative Survey"
          title="Rome at a Glance"
          subtitle="The same map, three moments, one palette — brighter bronze means firmer Roman control. Six and a half centuries separate the first plate from the last."
          onClose={onClose}
        />

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {states.map((m, i) => (
            <figure key={m.year} className="m-0">
              <div className="flex items-baseline justify-between gap-2">
                <span className="tnum text-[10.5px] tracking-[0.18em] text-accent/70">{roman(i)}</span>
                <span className="tnum text-[10.5px] text-ink-dim">
                  {m.held} of {regions.features.length} regions
                </span>
              </div>
              <div
                className="tnum mt-0.5 text-[21px] leading-none text-ink"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
              >
                {m.caption}
              </div>
              <div className="plate mt-2.5 overflow-hidden rounded border border-line">
                <MiniMap control={m.control} />
              </div>
              <div className="mt-2.5">
                <CompositionBar counts={m.counts} held={m.held} />
              </div>
              <figcaption className="prose-body mt-2 text-[12.5px] leading-snug text-ink-dim">{m.note}</figcaption>
              <button
                onClick={() => onJumpToYear(m.year)}
                className="mt-2 text-[12px] text-accent transition-opacity hover:opacity-75"
              >
                Open this moment →
              </button>
            </figure>
          ))}
        </div>

        {/* where the three plates sit in the whole range */}
        <div className="mt-7">
          <div className="relative h-[7px] w-full overflow-hidden rounded-sm bg-panel-3">
            {states.map((m) => (
              <span
                key={m.year}
                className="absolute top-0 h-full w-[2px] bg-accent"
                style={{ left: `${scale.toT(m.year) * 100}%` }}
              />
            ))}
          </div>
          <div className="tnum mt-1 flex justify-between text-[10px] text-ink-dim/80">
            <span>{formatYear(-1000)}</span>
            <span>{formatYear(476)}</span>
          </div>
        </div>

        <p className="prose-body mt-4 border-t border-line pt-3 text-[11.5px] text-ink-dim">
          Ancient borders were not lines. Frontiers were zones and control was a gradient; any polygon map of antiquity
          is a simplification — see “About the map”.
        </p>
      </div>
    </Veil>
  );
}
