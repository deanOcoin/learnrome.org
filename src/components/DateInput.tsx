import { useRef, useState } from 'react';
import { parseDateInput, snapToEvent } from '../lib/dateParser';
import { fuzzyFind } from '../lib/fuzzy';
import { formatYear, type RomeEvent } from '../types';

interface Props {
  events: RomeEvent[];
  onJump: (index: number) => void;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

type Feedback =
  | { kind: 'snap'; index: number; delta: number; bracketed: boolean; asked: number; alternatives: number[] }
  | { kind: 'ambiguous'; bce: number; ce: number }
  | { kind: 'matches'; hits: number[] }
  | { kind: 'nothing'; query: string };

export default function DateInput({ events, onJump, inputRef }: Props) {
  const [value, setValue] = useState('');
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const localRef = useRef<HTMLInputElement>(null);
  const ref = inputRef ?? localRef;

  function jumpToYear(year: number) {
    const snap = snapToEvent(events, year);
    onJump(snap.index);
    setFeedback({ kind: 'snap', ...snap, asked: year });
  }

  function submit() {
    const parsed = parseDateInput(value);
    switch (parsed.kind) {
      case 'empty':
        setFeedback(null);
        return;
      case 'year':
        jumpToYear(parsed.year);
        return;
      case 'ambiguous':
        setFeedback({ kind: 'ambiguous', bce: parsed.bce, ce: parsed.ce });
        return;
      case 'text': {
        const hits = fuzzyFind(events, (e) => `${e.title} ${e.headline}`, parsed.query, 4);
        if (hits.length === 0) {
          setFeedback({ kind: 'nothing', query: parsed.query });
        } else if (hits.length === 1 || hits[0].score > hits[1].score * 1.8) {
          const idx = events.indexOf(hits[0].item);
          onJump(idx);
          setFeedback(null);
          setValue('');
        } else {
          setFeedback({ kind: 'matches', hits: hits.map((h) => events.indexOf(h.item)) });
        }
        return;
      }
    }
  }

  function deltaPhrase(delta: number, bracketed: boolean): string {
    if (bracketed) return 'this span covers the year you asked for';
    if (delta === 0) return 'exactly the year you asked for';
    const n = Math.abs(delta);
    const dir = delta < 0 ? 'earlier' : 'later';
    return `${n} year${n === 1 ? '' : 's'} ${dir} than you asked`;
  }

  const snapEvent = feedback?.kind === 'snap' ? events[feedback.index] : null;

  return (
    <div className="relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="flex items-center gap-2"
      >
        <input
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setFeedback(null);
              (e.target as HTMLInputElement).blur();
            }
            e.stopPropagation();
          }}
          placeholder="Type a date — 216 BCE, 476, rubicon…"
          aria-label="Jump to a date or event"
          className="tnum w-64 rounded-md border border-line bg-panel-2 px-3 py-1.5 text-[13px] text-ink placeholder:text-ink-dim/70 focus:border-accent/50"
        />
        <button
          type="submit"
          className="rounded-md border border-line bg-panel-2 px-3 py-1.5 text-[13px] text-ink-dim hover:text-ink"
        >
          Go
        </button>
      </form>

      {feedback && (
        <div className="absolute left-0 top-full z-40 mt-1.5 w-[340px] rounded-md border border-line bg-panel p-3 text-[13px] shadow-xl">
          {feedback.kind === 'snap' && snapEvent && (
            <>
              <div className="text-ink">
                Nearest event: <span className="font-semibold">{snapEvent.title}</span>,{' '}
                <span className="tnum">{formatYear(snapEvent.year)}</span>
              </div>
              <div className="mt-0.5 text-ink-dim">— {deltaPhrase(feedback.delta, feedback.bracketed)}</div>
              {feedback.alternatives.length > 0 && (
                <div className="mt-2 border-t border-line pt-2">
                  <div className="text-[10px] uppercase tracking-wider text-ink-dim">Or did you mean</div>
                  <div className="mt-1 flex flex-col gap-1">
                    {feedback.alternatives.map((i) => (
                      <button
                        key={events[i].id}
                        onClick={() => {
                          onJump(i);
                          setFeedback(null);
                          setValue('');
                        }}
                        className="tnum text-left text-ink-dim hover:text-ink"
                      >
                        {formatYear(events[i].year)} · {events[i].title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {feedback.kind === 'ambiguous' && (
            <>
              <div className="text-ink">That year exists on both sides of the era line.</div>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => jumpToYear(feedback.bce)}
                  className="tnum flex-1 rounded border border-line bg-panel-2 py-1.5 text-ink hover:border-accent/50"
                >
                  {-feedback.bce} <span className="era-mark">BCE</span>
                </button>
                <button
                  onClick={() => jumpToYear(feedback.ce)}
                  className="tnum flex-1 rounded border border-line bg-panel-2 py-1.5 text-ink hover:border-accent/50"
                >
                  {feedback.ce} <span className="era-mark">CE</span>
                </button>
              </div>
            </>
          )}

          {feedback.kind === 'matches' && (
            <>
              <div className="text-ink">Closest matches:</div>
              <div className="mt-1.5 flex flex-col gap-1">
                {feedback.hits.map((i) => (
                  <button
                    key={events[i].id}
                    onClick={() => {
                      onJump(i);
                      setFeedback(null);
                      setValue('');
                    }}
                    className="tnum text-left text-ink-dim hover:text-ink"
                  >
                    {formatYear(events[i].year)} · {events[i].title}
                  </button>
                ))}
              </div>
            </>
          )}

          {feedback.kind === 'nothing' && (
            <div className="text-ink-dim">
              Nothing matches “{feedback.query}”. Try a year (<span className="tnum">216 BCE</span>) or an event name
              (<em>rubicon</em>).
            </div>
          )}

          <button
            onClick={() => setFeedback(null)}
            className="absolute right-2 top-2 text-ink-dim hover:text-ink"
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
