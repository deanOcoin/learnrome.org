// tours are not a separate mode, just this bar over the normal interface.
// position comes in derived from the current event, never counted here.

import type { Tour } from '../types';

interface Props {
  tour: Tour;
  /** -1 when the reader has wandered off the path */
  step: number;
  stepCount: number;
  onStep: (dir: 1 | -1) => void;
  onExit: () => void;
}

export default function TourBar({ tour, step, stepCount, onStep, onExit }: Props) {
  const offPath = step < 0;
  const pct = offPath ? 0 : ((step + 1) / stepCount) * 100;

  return (
    <div className="z-20 flex items-center gap-3 border-b border-line bg-panel-2 px-4 py-1.5">
      <span className="shrink-0 text-[12px] font-medium text-accent">{tour.title}</span>
      <div className="h-1 min-w-16 flex-1 overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="tnum shrink-0 text-[11.5px] text-ink-dim">
        {offPath ? 'off the path' : `${step + 1} / ${stepCount}`}
      </span>
      <button
        onClick={() => onStep(-1)}
        disabled={step === 0}
        className="shrink-0 rounded border border-line px-2 py-0.5 text-[12px] text-ink-dim hover:text-ink disabled:opacity-30"
      >
        ← Back
      </button>
      <button
        onClick={() => onStep(1)}
        disabled={!offPath && step >= stepCount - 1}
        className="shrink-0 rounded border border-line bg-panel px-2 py-0.5 text-[12px] text-ink hover:border-accent/50 disabled:opacity-30"
      >
        {offPath ? 'Rejoin →' : 'Next →'}
      </button>
      <button onClick={onExit} className="shrink-0 text-ink-dim hover:text-ink" aria-label="Exit tour" title="Exit tour">
        ×
      </button>
    </div>
  );
}
