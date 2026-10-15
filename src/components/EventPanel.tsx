import { REGION_META } from '../data/regionMeta';
import type { ControlChange } from '../lib/resolveControl';
import { useProse } from '../lib/prose';
import { STATUS_LABEL, formatEventDate, formatYear, type RomeEvent } from '../types';
import { ERAS } from '../types';

export type ReadingDepth = 'brief' | 'full';

interface Props {
  event: RomeEvent;
  diff: ControlChange[];
  events: RomeEvent[];
  onJumpToEvent: (id: string) => void;
  depth: ReadingDepth;
  onDepthChange: (d: ReadingDepth) => void;
  /** mobile puts the depth control in the sheet header */
  hideDepthToggle?: boolean;
  /** the mobile sheet supplies its own scroll container and padding */
  bare?: boolean;
}

const RELIABILITY_LABEL: Record<RomeEvent['reliability'], string> = {
  legendary: 'Legendary',
  reconstructed: 'Reconstructed',
  contested: 'Contested sources',
  'well-attested': 'Well attested',
};

export default function EventPanel({
  event,
  diff,
  events,
  onJumpToEvent,
  depth,
  onDepthChange,
  hideDepthToggle = false,
  bare = false,
}: Props) {
  const era = ERAS.find((e) => e.id === event.era);
  // everything above the body renders from the light index at once, the prose fills in
  const prose = useProse(event);
  const allParagraphs = (prose?.body ?? '').split(/\n\s*\n/).filter(Boolean);
  const brief = depth === 'brief';
  const paragraphs = brief ? allParagraphs.slice(0, 1) : allParagraphs;
  const connects = (event.connects ?? [])
    .map((id) => events.find((e) => e.id === id))
    .filter((e): e is RomeEvent => !!e);

  return (
    <div
      className={bare ? '' : 'scroll-slim h-full overflow-y-auto bg-panel px-5 py-5'}
      aria-label="Event details"
    >
      {/* year, title, chips */}
      <div className="flex items-center justify-between">
        <div className="tnum text-[13px] font-medium tracking-wide text-accent">
          {formatEventDate(event)}
        </div>
        {!hideDepthToggle && (
          <div
            className="flex overflow-hidden rounded-md border border-line text-[10.5px]"
            role="group"
            aria-label="Reading depth"
          >
            {(['brief', 'full'] as const).map((d) => (
              <button
                key={d}
                onClick={() => onDepthChange(d)}
                aria-pressed={depth === d}
                className={`px-2 py-1 uppercase tracking-wider ${
                  depth === d ? 'bg-panel-2 text-accent' : 'text-ink-dim hover:text-ink'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        )}
      </div>
      <h1 className="mt-1 text-[26px] leading-tight text-ink" style={{ fontFamily: 'var(--font-display)', fontWeight: 560 }}>
        {event.title}
      </h1>
      <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px]">
        {era && (
          <span className="rounded-full border border-line bg-panel-2 px-2 py-0.5 uppercase tracking-wider text-ink-dim">
            {era.name}
          </span>
        )}
        <span
          className="rounded-full border border-line px-2 py-0.5 uppercase tracking-wider"
          style={{
            color: event.reliability === 'well-attested' ? 'var(--color-ink-dim)' : 'var(--color-accent)',
            borderColor: event.reliability === 'well-attested' ? 'var(--color-line)' : 'rgba(217,164,65,0.4)',
          }}
          title="How solid is the evidence for this event?"
        >
          {RELIABILITY_LABEL[event.reliability]}
        </span>
        {event.tags.map((t) => (
          <span key={t} className="rounded-full bg-panel-2 px-2 py-0.5 text-ink-dim">
            {t}
          </span>
        ))}
      </div>

      <p className="prose-body mt-4 text-[17px] leading-snug text-ink" style={{ fontWeight: 500 }}>
        {event.headline}
      </p>

      {/* what changed, generated from the control delta */}
      <div className="mt-4 rounded-md border border-line bg-panel-2 px-3.5 py-3">
        <div className="text-[10px] uppercase tracking-wider text-ink-dim">What changed on the map</div>
        {diff.length > 0 ? (
          <ul className="mt-1.5 space-y-1 text-[12.5px]">
            {diff.map((c) => (
              <li key={c.region} className="text-ink">
                <span className="font-medium">{REGION_META[c.region]?.name ?? c.region}</span>
                <span className="text-ink-dim">
                  {' '}
                  · {STATUS_LABEL[c.from]} → {STATUS_LABEL[c.to]}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-1.5 text-[12.5px] italic text-ink-dim">
            Nothing — no territory changed hands. This event is about how Rome lived, not where its borders ran.
          </p>
        )}
      </div>

      {/* body, brief shows the first paragraph only */}
      <div className="prose-body mt-5 text-ink">
        {!prose && (
          <div aria-label="Loading the text" role="status" className="space-y-2.5">
            {[92, 100, 96, 74].map((w, i) => (
              <div key={i} className="h-[0.85em] rounded bg-line/60" style={{ width: `${w}%` }} />
            ))}
          </div>
        )}
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {brief && allParagraphs.length > 1 && (
          <button
            onClick={() => onDepthChange('full')}
            className="mt-2 text-[12.5px] text-accent hover:underline"
          >
            Keep reading — {allParagraphs.length - 1} more paragraph{allParagraphs.length > 2 ? 's' : ''} →
          </button>
        )}
      </div>

      {/* why this matters */}
      {prose && (
        <div className="mt-5 rounded-md border-l-[3px] border-accent bg-panel-2 px-4 py-3.5">
          <div className="text-[10px] uppercase tracking-wider text-accent">Why this matters</div>
          <div className="prose-body mt-1.5 text-[14px] text-ink">
            {prose.whyItMatters.split(/\n\s*\n/).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      )}

      {/* misconception */}
      {prose?.misconception && (
        <div className="mt-4 rounded-md border border-line bg-panel-2 px-4 py-3.5">
          <div className="text-[10px] uppercase tracking-wider text-ink-dim">What people get wrong</div>
          <p className="prose-body mt-1.5 text-[13.5px] italic text-ink-dim">“{prose.misconception.claim}”</p>
          <p className="prose-body mt-2 text-[14px] text-ink">{prose.misconception.correction}</p>
        </div>
      )}

      {/* how we got here */}
      {!brief && connects.length > 0 && (
        <div className="mt-5">
          <div className="text-[10px] uppercase tracking-wider text-ink-dim">How we got here</div>
          {/* real row height rather than .tap hit areas, which would overlap the next link and steal its taps */}
        <div className="mt-1.5 flex flex-col">
            {connects.map((c) => (
              <button
                key={c.id}
                onClick={() => onJumpToEvent(c.id)}
                className="tnum group flex min-h-[44px] items-center text-left text-[13px] text-ink-dim hover:text-ink"
              >
                <span className="text-accent/70 group-hover:text-accent">←</span> {formatYear(c.year)} · {c.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* sources */}
      {!brief && prose && (
      <div className="mb-2 mt-6 border-t border-line pt-3">
        <div className="text-[10px] uppercase tracking-wider text-ink-dim">Sources</div>
        <ul className="mt-1.5 space-y-1.5 text-[12px] text-ink-dim">
          {prose.sources.map((s, i) => (
            <li key={i}>
              <span className="text-ink">{s.author}</span>, <em>{s.work}</em>
              {s.note && <span> — {s.note}</span>}
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
}
