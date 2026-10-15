// resolves as you type, answers in full-width thumb-sized rows.

import { useEffect, useMemo, useRef, useState } from 'react';
import { search, type SearchHit } from '../lib/search';
import { CloseButton } from './ui';
import { ERAS, formatEventDate, formatYear, type RomeEvent } from '../types';

interface Props {
  events: RomeEvent[];
  onJump: (index: number) => void;
  onClose: () => void;
}

const EXAMPLES = ['216 BCE', 'rubicon', '476', 'adrianople', 'c. 390 BCE'];

export default function MobileSearchSheet({ events, onJump, onClose }: Props) {
  const [q, setQ] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // after paint, so the keyboard rises with the sheet rather than before it
    const t = window.setTimeout(() => inputRef.current?.focus(), 60);
    return () => window.clearTimeout(t);
  }, []);

  const result = useMemo(() => search(events, q), [events, q]);

  // an empty search box should still offer somewhere to go
  const landmarks = useMemo(
    () =>
      events
        .map((e, i) => ({ index: i, event: e }))
        .filter(({ event }) => event.weight === 3)
        .slice(0, 40),
    [events]
  );

  function take(hit: SearchHit) {
    onJump(hit.index);
    onClose();
  }

  const rows: SearchHit[] =
    result.kind === 'hits' ? result.hits : result.kind === 'idle' ? landmarks : [];

  return (
    <div
      className="graticule fixed inset-0 z-50 flex flex-col bg-sea"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div className="pad-top-safe pad-x-safe shrink-0 border-b border-line bg-panel">
        <div className="flex items-center gap-2 px-3 py-2">
          <div className="relative flex-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-dim"
            >
              <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.4" />
              <path d="M10.6 10.6 14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => {
                e.stopPropagation();
                if (e.key === 'Escape') onClose();
                if (e.key === 'Enter' && result.kind === 'hits') take(result.exact ?? result.hits[0]);
              }}
              placeholder="A year or a name…"
              aria-label="Search by date or event name"
              // keeps the mobile keyboard from capitalising or autocorrecting "rubicon"
              inputMode="search"
              enterKeyHint="search"
              autoCapitalize="none"
              autoCorrect="off"
              autoComplete="off"
              spellCheck={false}
              className="tnum h-11 w-full rounded-lg border border-line bg-panel-2 pl-9 pr-9 text-[15px] text-ink placeholder:text-ink-dim/70 focus:border-accent/60"
            />
            {q && (
              <button
                onClick={() => {
                  setQ('');
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
                className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded text-ink-dim active:text-ink"
              >
                ×
              </button>
            )}
          </div>
          <CloseButton onClose={onClose} />
        </div>

        {result.kind === 'idle' && (
          <div className="flex flex-wrap gap-1.5 px-3 pb-2.5">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                onClick={() => setQ(ex)}
                className="tnum rounded-full border border-line bg-panel-2 px-3 py-1.5 text-[12px] text-ink-dim active:text-ink"
              >
                {ex}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="scroll-slim pad-bottom-safe min-h-0 flex-1 overflow-y-auto overscroll-contain">
        {result.kind === 'ambiguous' && (
          <div className="px-3 py-4">
            <p className="prose-body text-[13.5px] text-ink-dim">
              “{result.query}” sits on both sides of the era line. Which did you mean?
            </p>
            <div className="mt-3 flex gap-2">
              {(
                [
                  { label: `${-result.bce}`, era: 'BCE' },
                  { label: `${result.ce}`, era: 'CE' },
                ] as const
              ).map(({ label, era }) => (
                <button
                  key={era}
                  onClick={() => setQ(`${label} ${era}`)}
                  className="tnum flex-1 rounded-lg border border-line bg-panel-2 py-3.5 text-[16px] text-ink active:border-accent/60"
                >
                  {label} <span className="era-mark">{era}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {result.kind === 'empty' && (
          <div className="px-3 py-6 text-center">
            <p className="prose-body text-[13.5px] text-ink-dim">
              Nothing matches “{result.query}”.
            </p>
            <p className="prose-body mt-1.5 text-[12.5px] text-ink-dim/70">
              Try a year like <span className="text-ink">216 BCE</span>, or a name like{' '}
              <span className="text-ink">rubicon</span>.
            </p>
          </div>
        )}

        {rows.length > 0 && (
          <>
            <div className="px-3 pb-1 pt-2.5 text-[10px] uppercase tracking-[0.18em] text-ink-dim/70">
              {result.kind === 'idle'
                ? 'Landmarks'
                : result.kind === 'hits' && result.asked != null
                  ? `Nearest to ${formatYear(result.asked)}`
                  : `${rows.length} match${rows.length === 1 ? '' : 'es'}`}
            </div>
            <ul>
              {rows.map((hit) => {
                const e = hit.event;
                const era = ERAS.find((x) => x.id === e.era);
                return (
                  <li key={e.id}>
                    <button
                      onClick={() => take(hit)}
                      className="flex min-h-[60px] w-full items-center gap-3 border-b border-line/60 px-3 py-2 text-left active:bg-panel-2"
                    >
                      <span className="tnum w-[74px] shrink-0 text-[11px] text-accent">{formatEventDate(e)}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[14px] leading-tight text-ink">{e.title}</span>
                        <span className="mt-0.5 block truncate text-[11.5px] leading-tight text-ink-dim">
                          {hit.note ?? era?.name}
                        </span>
                      </span>
                      {e.weight === 3 && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
