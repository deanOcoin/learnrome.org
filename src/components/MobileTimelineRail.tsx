// touch scrubber: the whole rail is the target, the readout sits above the
// finger, and a tap opens the full timeline sheet for precision.

import { useCallback, useMemo, useRef, useState } from 'react';
import { ERAS, formatYear, type RomeEvent } from '../types';
import { makeTimelineScale, rebalanceSegments, TIMELINE_SEGMENTS } from '../lib/timelineScale';
import { snapToEvent } from '../lib/dateParser';
import { useElementSize } from '../lib/useElementSize';

// readout above, track in the middle, era control below, so they never collide
const H = 74;
const PAD = 10;
const TRACK_Y = 22;
const TRACK_H = 16;
const SCRUB_TOP = TRACK_Y - 16; // 6
const SCRUB_H = 44; // ends at 50
const ERA_TOP = SCRUB_TOP + SCRUB_H + 2; // 52, strictly below the scrub band

interface Props {
  events: RomeEvent[];
  index: number;
  onSelect: (index: number) => void;
  visible?: Set<number>;
  onOpenFull: () => void;
}

export default function MobileTimelineRail({ events, index, onSelect, visible, onOpenFull }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { w } = useElementSize(wrapRef);
  const [scrubbing, setScrubbing] = useState(false);
  const draggingRef = useRef(false);

  const scale = useMemo(
    () => makeTimelineScale(rebalanceSegments(TIMELINE_SEGMENTS, events.map((e) => e.year))),
    [events]
  );

  const x = useCallback((year: number) => PAD + scale.toT(year) * (w - PAD * 2), [scale, w]);

  const nearestTo = useCallback(
    (clientX: number, rect: DOMRect): number | null => {
      const t = (clientX - rect.left - PAD) / (w - PAD * 2);
      const year = Math.round(scale.toYear(Math.max(0, Math.min(1, t))));
      const pool = visible ? events.filter((_, i) => visible.has(i)) : events;
      if (pool.length === 0) return null;
      return events.indexOf(pool[snapToEvent(pool, year).index]);
    },
    [events, scale, visible, w]
  );

  const current = events[index];

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const i = nearestTo(e.clientX, e.currentTarget.getBoundingClientRect());
    if (i == null) return;
    draggingRef.current = true;
    setScrubbing(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* enhancement only */
    }
    if (i !== index) onSelect(i);
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const i = nearestTo(e.clientX, e.currentTarget.getBoundingClientRect());
    if (i != null && i !== index) onSelect(i);
  };
  const end = () => {
    draggingRef.current = false;
    setScrubbing(false);
  };

  if (w === 0) return <div ref={wrapRef} className="h-[74px] w-full" />;

  const cx = x(current.year);
  const bubbleX = Math.min(Math.max(cx, 76), w - 76);

  return (
    <div ref={wrapRef} className="relative w-full select-none">
      {/* readout floats above the rail, a thumb covers anything printed under it */}
      <div
        className="pointer-events-none absolute top-0 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-line bg-panel-2/95 px-2 py-[1px] shadow-lg backdrop-blur-sm"
        style={{
          left: bubbleX,
          transition: scrubbing ? 'none' : 'left 200ms cubic-bezier(0.2,0.7,0.3,1)',
          opacity: scrubbing ? 1 : 0.92,
        }}
      >
        <span className="tnum text-[11px] font-medium text-accent">{formatYear(current.year)}</span>
      </div>

      <svg width={w} height={H} className="block touch-none" role="group" aria-label="Timeline scrubber">
        {/* era bands as the track background */}
        {ERAS.map((era, i) => {
          const x0 = Math.max(PAD, x(Math.max(era.start, scale.domain[0])));
          const x1 = Math.min(w - PAD, x(Math.min(era.end, scale.domain[1])));
          if (x1 - x0 <= 0) return null;
          const active = era.id === current.era;
          return (
            <rect
              key={era.id}
              x={x0}
              y={TRACK_Y}
              width={x1 - x0}
              height={TRACK_H}
              rx={2}
              fill={active ? 'rgba(217,164,65,0.28)' : i % 2 === 0 ? 'rgba(217,164,65,0.09)' : 'rgba(217,164,65,0.04)'}
              stroke={active ? 'var(--color-accent)' : 'var(--color-line)'}
              strokeWidth={active ? 1 : 0.5}
            />
          );
        })}

        {/* weight-3 events only, anything more is noise at this size */}
        {events.map((e, i) =>
          e.weight === 3 ? (
            <rect
              key={e.id}
              x={x(e.year) - 0.75}
              y={TRACK_Y + 3}
              width={1.5}
              height={TRACK_H - 6}
              fill="var(--color-ink)"
              opacity={visible && !visible.has(i) ? 0.1 : 0.5}
            />
          ) : null
        )}

        {/* playhead, a wide obvious thumb rather than a hairline */}
        <g style={{ transform: `translateX(${cx}px)`, transition: scrubbing ? 'none' : 'transform 200ms cubic-bezier(0.2,0.7,0.3,1)' }}>
          <rect x={-1} y={TRACK_Y - 4} width={2} height={TRACK_H + 8} fill="var(--color-accent)" />
          <circle cx={0} cy={TRACK_Y + TRACK_H / 2} r={scrubbing ? 9 : 7} fill="var(--color-accent)" />
          <circle cx={0} cy={TRACK_Y + TRACK_H / 2} r={scrubbing ? 4 : 3} fill="var(--color-panel)" />
        </g>
      </svg>

      {/* hit surface is much taller than the track but must stop above the era
          control, or the button swallows taps meant for the scrubber */}
      <div
        className="absolute inset-x-0 touch-none"
        style={{ top: SCRUB_TOP, height: SCRUB_H }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={end}
        onPointerCancel={end}
        onLostPointerCapture={end}
        role="slider"
        tabIndex={0}
        aria-label="Scrub through history"
        aria-valuemin={0}
        aria-valuemax={events.length - 1}
        aria-valuenow={index}
        aria-valuetext={`${formatYear(current.year)} — ${current.title}`}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') onSelect(Math.max(0, index - 1));
          if (e.key === 'ArrowRight') onSelect(Math.min(events.length - 1, index + 1));
        }}
      />

      {/* era name doubles as the affordance for the precise view */}
      <button
        onClick={onOpenFull}
        aria-label={`${ERAS.find((e) => e.id === current.era)?.name} — open the full timeline`}
        className="absolute left-1/2 flex h-[22px] -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded px-3 text-[9.5px] uppercase leading-none tracking-[0.14em] text-ink-dim active:text-ink"
        style={{ top: ERA_TOP }}
      >
        <span>{ERAS.find((e) => e.id === current.era)?.name}</span>
        <span className="text-[8px] opacity-60">▾</span>
      </button>
    </div>
  );
}
