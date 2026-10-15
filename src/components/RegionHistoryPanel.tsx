// every event that ever changed this region's status, as jump links

import { REGION_META } from '../data/regionMeta';
import type { ControlTimeline } from '../lib/resolveControl';
import { STATUS_LABEL, formatYear, type RegionId, type RomeEvent } from '../types';

interface Props {
  region: RegionId;
  events: RomeEvent[];
  timeline: ControlTimeline;
  currentIndex: number;
  onJump: (index: number) => void;
  onClose: () => void;
  /** the mobile sheet supplies its own scroll container and padding */
  bare?: boolean;
}

export default function RegionHistoryPanel({
  region,
  events,
  timeline,
  currentIndex,
  onJump,
  onClose,
  bare = false,
}: Props) {
  const meta = REGION_META[region];
  const history = timeline.historyOf(region);
  const nowStatus = timeline.stateAt(currentIndex)[region];

  return (
    <div
      className={bare ? '' : 'scroll-slim h-full overflow-y-auto bg-panel px-5 py-5'}
      aria-label="Region history"
    >
      <button onClick={onClose} className="mb-3 text-[12px] text-ink-dim hover:text-ink">
        ← back to the event
      </button>
      <h1 className="text-[24px] leading-tight text-ink" style={{ fontFamily: 'var(--font-display)', fontWeight: 560 }}>
        {meta?.name ?? region}
      </h1>
      <div className="mt-1 text-[13px] text-ink-dim">{meta?.modernHint}</div>
      <div className="mt-2 text-[13px] text-ink">
        Now: <span className="font-medium">{STATUS_LABEL[nowStatus]}</span>
      </div>

      <div className="mt-5 text-[10px] uppercase tracking-wider text-ink-dim">
        Every change in the whole timeline
      </div>
      {history.length === 0 ? (
        <p className="prose-body mt-2 text-[13.5px] italic text-ink-dim">
          This region never changes status — it stays outside the story's territorial spine.
        </p>
      ) : (
        <ol className="mt-2 space-y-2.5">
          {history.map((h) => {
            const e = events[h.index];
            const isPast = h.index <= currentIndex;
            return (
              <li key={h.index}>
                <button
                  onClick={() => onJump(h.index)}
                  className={`group w-full rounded-md border px-3 py-2 text-left transition-colors ${
                    h.index === currentIndex
                      ? 'border-accent/60 bg-panel-2'
                      : 'border-line bg-panel-2/50 hover:border-accent/40'
                  }`}
                >
                  <div className="tnum text-[11px] text-accent">{formatYear(e.year)}</div>
                  <div className="text-[13.5px] font-medium text-ink group-hover:text-accent">{e.title}</div>
                  <div className={`mt-0.5 text-[12px] ${isPast ? 'text-ink-dim' : 'text-ink-dim/60'}`}>
                    {STATUS_LABEL[h.from]} → <span className="text-ink">{STATUS_LABEL[h.to]}</span>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
