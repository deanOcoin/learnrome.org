import { useEffect, useMemo, useRef, useState, memo } from 'react';
import { geoConicConformal, geoPath, type GeoPermissibleObjects } from 'd3-geo';
import { select } from 'd3-selection';
import { zoom, zoomIdentity, type ZoomBehavior, type ZoomTransform } from 'd3-zoom';
import type { FeatureCollection, MultiPolygon } from 'geojson';
import regionsRaw from '../data/regions.json';
import { REGION_META } from '../data/regionMeta';
import { STATUS_LABEL, formatYear, type ControlStatus, type MarkerType, type RegionId, type RomeEvent } from '../types';
import { statusFill, statusStroke } from '../lib/statusStyle';
import { useElementSize } from '../lib/useElementSize';

const regions = regionsRaw as unknown as FeatureCollection<MultiPolygon> & {
  features: { id: RegionId }[];
};

// Gibraltar to the Euphrates, the Rhine to the First Cataract. d3-geo winding:
// exterior ring must be clockwise in [lon, lat] or it covers the rest of the globe
const DEFAULT_FRAME: GeoPermissibleObjects = {
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

const MARKER_GLYPHS: Record<MarkerType, string> = {
  // distinct shapes, never colour-coded, colour belongs to control status
  battle: 'M -4 -4 L 4 4 M -4 4 L 4 -4', // saltire
  siege: 'M -4 -4 H 4 V 4 H -4 Z', // square
  political: 'M 0 -5 L 5 0 L 0 5 L -5 0 Z', // diamond
  founding: 'M 0 -4.5 A 4.5 4.5 0 1 0 0.01 -4.5 Z M 0 -1.2 A 1.2 1.2 0 1 0 0.01 -1.2 Z', // circle + dot
  disaster: 'M 0 -5 V 5 M -4.3 -2.5 L 4.3 2.5 M -4.3 2.5 L 4.3 -2.5', // asterisk
};

interface TooltipState {
  x: number;
  y: number;
  region: RegionId;
}

interface Props {
  control: Record<RegionId, ControlStatus>;
  lastChanged: Partial<Record<RegionId, number>>;
  events: RomeEvent[];
  currentEvent: RomeEvent;
  onRegionClick?: (region: RegionId) => void;
  focusRegions?: RegionId[];
  selectedRegion?: RegionId | null;
  /** changed at the current event, these get the rim light */
  changed?: RegionId[];
  // chrome covering the map box. the projection fits inside what is actually visible,
  // so on mobile the Mediterranean centres in the band above the sheet
  fitInset?: { top?: number; bottom?: number; left?: number; right?: number };
  showReset?: boolean;
  /** lets the mobile menu reset the view */
  resetRef?: React.MutableRefObject<(() => void) | null>;
}

export default function MapView({ control, lastChanged, events, currentEvent, onRegionClick, focusRegions, selectedRegion, changed, fitInset, showReset = true, resetRef }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const size = useElementSize(wrapRef);
  const [transform, setTransform] = useState<ZoomTransform>(zoomIdentity);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  const insetTop = fitInset?.top ?? 0;
  const insetBottom = fitInset?.bottom ?? 0;
  const insetLeft = fitInset?.left ?? 0;
  const insetRight = fitInset?.right ?? 0;

  const { projection, path } = useMemo(() => {
    const projection = geoConicConformal().parallels([28, 46]).rotate([-16, 0]);
    const visW = size.w - insetLeft - insetRight;
    const visH = size.h - insetTop - insetBottom;
    if (visW > 16 && visH > 16) {
      projection.fitExtent(
        [
          [insetLeft + 8, insetTop + 8],
          [size.w - insetRight - 8, size.h - insetBottom - 8],
        ],
        DEFAULT_FRAME
      );
    }
    const path = geoPath(projection);
    return { projection, path };
  }, [size.w, size.h, insetTop, insetBottom, insetLeft, insetRight]);

  const regionPaths = useMemo(() => {
    if (size.w === 0) return [];
    return regions.features.map((f) => ({
      id: f.id as RegionId,
      d: path(f as GeoPermissibleObjects) ?? '',
      feature: f,
    }));
  }, [path, size.w]);

  // zoom is clamped so the Mediterranean can't be lost off-screen
  useEffect(() => {
    if (!svgRef.current || size.w === 0) return;
    const svg = select(svgRef.current);
    const z = zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 10])
      .translateExtent([
        [0, 0],
        [size.w, size.h],
      ])
      .on('zoom', (ev) => setTransform(ev.transform));
    svg.call(z);
    svg.on('dblclick.zoom', null); // double-click is region-zoom instead
    zoomRef.current = z;
    return () => {
      svg.on('.zoom', null);
    };
  }, [size.w, size.h]);

  function resetView() {
    if (svgRef.current && zoomRef.current) {
      select(svgRef.current).call(zoomRef.current.transform, zoomIdentity);
    }
  }

  // shells with their own controls (mobile menu) call reset through this
  useEffect(() => {
    if (!resetRef) return;
    resetRef.current = resetView;
    return () => {
      resetRef.current = null;
    };
  });

  function zoomToRegion(id: RegionId) {
    const f = regions.features.find((x) => x.id === id);
    if (!f || !svgRef.current || !zoomRef.current) return;
    const [[x0, y0], [x1, y1]] = path.bounds(f as GeoPermissibleObjects);
    const dx = x1 - x0;
    const dy = y1 - y0;
    const k = Math.min(8, 0.7 / Math.max(dx / size.w, dy / size.h));
    const tx = size.w / 2 - (k * (x0 + x1)) / 2;
    const ty = size.h / 2 - (k * (y0 + y1)) / 2;
    select(svgRef.current).call(
      zoomRef.current.transform,
      zoomIdentity.translate(tx, ty).scale(k)
    );
  }

  const k = transform.k;
  const focusSet = useMemo(() => new Set(focusRegions ?? []), [focusRegions]);
  const selectedPath = selectedRegion ? regionPaths.find((r) => r.id === selectedRegion) : undefined;

  // movement labels stack upward when they'd collide with a marker label or each
  // other (a short movement's midpoint lands on its own marker). thresholds are screen px
  const movementLabels = useMemo(() => {
    const taken: [number, number][] = [];
    for (const m of currentEvent.markers ?? []) {
      const p = projection(m.at);
      if (p) taken.push([p[0], p[1] - 9 / k]);
    }
    return (currentEvent.movements ?? []).map((m) => {
      const pts = m.path
        .map((p) => projection(p))
        .filter((p): p is [number, number] => !!p);
      if (pts.length < 2) return null;
      const mid = pts[Math.floor(pts.length / 2)];
      let dy = -8;
      for (let guard = 0; guard < 6; guard++) {
        const y = mid[1] + dy / k;
        const clash = taken.some(
          (t) => Math.abs(t[0] - mid[0]) < 62 / k && Math.abs(t[1] - y) < 13 / k
        );
        if (!clash) break;
        dy -= 14;
      }
      taken.push([mid[0], mid[1] + dy / k]);
      return { m, pts, mid, dy };
    });
  }, [currentEvent, projection, k]);

  const tooltipMeta = tooltip ? REGION_META[tooltip.region] : undefined;
  const tooltipStatus = tooltip ? control[tooltip.region] : undefined;
  const tooltipChangedIdx = tooltip ? lastChanged[tooltip.region] : undefined;
  const tooltipChangedEvent = tooltipChangedIdx != null ? events[tooltipChangedIdx] : undefined;

  return (
    <div ref={wrapRef} className="relative h-full w-full overflow-hidden bg-sea">
      <svg
        ref={svgRef}
        width={size.w}
        height={size.h}
        className="block cursor-grab active:cursor-grabbing"
        role="img"
        aria-label="Map of the Roman world"
      >
        <defs>
          <marker id="arrowhead" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="var(--color-ink)" opacity="0.85" />
          </marker>
          {/* breakaway: Roman fabric not obeying Rome, so provincial hue in hatch */}
          <pattern id="pat-breakaway" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="7" height="7" fill="var(--color-status-provincial)" />
            <line x1="0" y1="0" x2="0" y2="7" stroke="var(--color-sea)" strokeWidth="3" />
          </pattern>
          {/* transient: held but won't last, dotted */}
          <pattern id="pat-transient" width="7" height="7" patternUnits="userSpaceOnUse">
            <rect width="7" height="7" fill="var(--color-status-provincial)" />
            <circle cx="3.5" cy="3.5" r="1.4" fill="var(--color-sea)" opacity="0.75" />
          </pattern>
        </defs>
        <g transform={transform.toString()}>
          {regionPaths.map(({ id, d }) => {
            const status = control[id] ?? 'unshown';
            const stroke = statusStroke(status);
            return (
              <path
                key={id}
                d={d}
                fill={statusFill(status)}
                stroke={stroke.stroke}
                strokeWidth={stroke.strokeWidth}
                strokeDasharray={stroke.strokeDasharray}
                vectorEffect="non-scaling-stroke"
                data-region={id}
                onMouseMove={(e) => {
                  const rect = wrapRef.current!.getBoundingClientRect();
                  setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top, region: id });
                }}
                onMouseLeave={() => setTooltip(null)}
                onClick={() => onRegionClick?.(id)}
                onDoubleClick={() => zoomToRegion(id)}
                className="transition-[fill] duration-500"
                style={focusSet.has(id) ? { filter: 'brightness(1.25)' } : undefined}
              />
            );
          })}

          {/* rim light on the regions that changed, re-keyed per event so stepping re-fires */}
          {(changed ?? [])
            .map((id) => regionPaths.find((r) => r.id === id))
            .filter((r): r is (typeof regionPaths)[number] => !!r)
            .map(({ id, d }) => (
              <path
                key={`glow-${currentEvent.id}-${id}`}
                className="rimlight"
                d={d}
                fill="var(--color-ink)"
                stroke="var(--color-ink)"
                strokeWidth={2.2}
                vectorEffect="non-scaling-stroke"
                pointerEvents="none"
              />
            ))}

          {/* spatial focus outline for non-territorial events */}
          {regionPaths
            .filter(({ id }) => focusSet.has(id))
            .map(({ id, d }) => (
              <path
                key={`focus-${id}`}
                d={d}
                fill="none"
                stroke="var(--color-ink)"
                strokeWidth={1.2}
                strokeDasharray="2 3"
                vectorEffect="non-scaling-stroke"
                pointerEvents="none"
                opacity={0.7}
              />
            ))}

          {/* a CSS outline on an SVG path paints its bounding box, so trace the geometry instead */}
          {selectedPath && (
            <g pointerEvents="none">
              <path d={selectedPath.d} fill="var(--color-accent)" opacity={0.12} />
              <path
                d={selectedPath.d}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={5}
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                opacity={0.18}
              />
              <path
                d={selectedPath.d}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={2}
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          )}

          {/* region labels, zoom-gated and only for regions in the story */}
          <g pointerEvents="none">
            {regionPaths.map(({ id }) => {
              const meta = REGION_META[id];
              const status = control[id] ?? 'unshown';
              if (!meta || status === 'unshown') return null;
              if (k < meta.labelMinZoom) return null;
              const p = projection(meta.labelAnchor);
              if (!p) return null;
              return (
                <text
                  key={`label-${id}`}
                  transform={`translate(${p[0]}, ${p[1]}) scale(${1 / k})`}
                  textAnchor="middle"
                  className="select-none"
                  style={{
                    font: '600 10px var(--font-ui)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    fill: 'rgba(232, 227, 216, 0.62)',
                    paintOrder: 'stroke',
                    stroke: 'rgba(13, 19, 33, 0.55)',
                    strokeWidth: 2,
                  }}
                >
                  {meta.name}
                </text>
              );
            })}
          </g>

          {/* movements */}
          <g pointerEvents="none">
            {movementLabels.map((entry, i) => {
              if (!entry) return null;
              const { m, pts, mid, dy } = entry;
              const d = 'M' + pts.map((p) => `${p[0]},${p[1]}`).join('L');
              return (
                <g key={`${currentEvent.id}-mv-${i}`}>
                  <path
                    d={d}
                    pathLength={100}
                    className="movement-line"
                    fill="none"
                    stroke="var(--color-ink)"
                    strokeWidth={m.kind === 'migration' ? 2 : 1.5}
                    strokeOpacity={m.kind === 'migration' ? 0.65 : 0.85}
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    markerEnd="url(#arrowhead)"
                  />
                  <text
                    className="movement-label"
                    transform={`translate(${mid[0]}, ${mid[1]}) scale(${1 / k})`}
                    y={dy}
                    textAnchor="middle"
                    style={{
                      font: 'italic 500 10px var(--font-ui)',
                      fill: 'var(--color-ink)',
                      paintOrder: 'stroke',
                      stroke: 'rgba(13, 19, 33, 0.8)',
                      strokeWidth: 3,
                    }}
                  >
                    {m.label}
                  </text>
                </g>
              );
            })}
          </g>

          {/* markers */}
          <g pointerEvents="none">
            {(currentEvent.markers ?? []).map((m, i) => {
              const p = projection(m.at);
              if (!p) return null;
              return (
                <g key={i} transform={`translate(${p[0]}, ${p[1]}) scale(${1 / k})`}>
                  <path
                    d={MARKER_GLYPHS[m.type]}
                    fill={m.type === 'siege' || m.type === 'political' ? 'none' : 'none'}
                    stroke="var(--color-ink)"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                  />
                  <text
                    y={-9}
                    textAnchor="middle"
                    style={{
                      font: '600 10.5px var(--font-ui)',
                      fill: 'var(--color-ink)',
                      paintOrder: 'stroke',
                      stroke: 'rgba(13, 19, 33, 0.8)',
                      strokeWidth: 3,
                    }}
                  >
                    {m.label}
                  </text>
                </g>
              );
            })}
          </g>
        </g>
      </svg>

      {/* mobile puts reset in the menu, the top-right corner belongs to its floating header */}
      {showReset && (
        <button
          onClick={resetView}
          className="absolute right-3 top-3 rounded border border-line bg-panel/90 px-2.5 py-1 text-xs text-ink-dim hover:text-ink"
          title="Reset view"
        >
          Reset view
        </button>
      )}

      {tooltip && tooltipMeta && tooltipStatus && (
        <div
          className="pointer-events-none absolute z-20 max-w-64 rounded border border-line bg-panel/95 px-3 py-2 text-xs shadow-lg"
          style={{
            left: Math.min(tooltip.x + 14, size.w - 240),
            top: Math.min(tooltip.y + 14, size.h - 90),
          }}
        >
          <div className="font-semibold text-ink">{tooltipMeta.name}</div>
          <div className="text-ink-dim">{tooltipMeta.modernHint}</div>
          <div className="mt-1 text-ink">
            {STATUS_LABEL[tooltipStatus]}
            {tooltipChangedEvent && tooltipStatus !== 'unshown' && (
              <span className="text-ink-dim">
                {' '}
                since {formatYear(tooltipChangedEvent.year)} — {tooltipChangedEvent.title}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export const MemoMapView = memo(MapView);
