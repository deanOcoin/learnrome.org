// every misconception in one sheet, each linking to its event. claim and
// correction are separated by texture and luminance, never by hue alone.

import { useEffect, useMemo, useRef, useState } from 'react';
import { EVENTS } from '../data/events';
import { loadAllProse } from '../lib/prose';
import type { Prose } from '../data/events/full';
import { ERAS, formatYear } from '../types';
import { Veil, SheetHeader } from './ui';

interface Props {
  onJump: (eventId: string) => void;
  onClose: () => void;
}

export default function MisconceptionIndex({ onJump, onClose }: Props) {
  const [query, setQuery] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);
  // the one screen that needs every era's prose
  const [prose, setProse] = useState<Record<string, Prose> | null>(null);
  useEffect(() => {
    let live = true;
    loadAllProse().then((p) => live && setProse(p));
    return () => {
      live = false;
    };
  }, []);

  // numbered from the unfiltered corpus so an entry keeps its number under any filter
  const all = useMemo(() => {
    if (!prose) return [];
    let n = 0;
    return ERAS.map((era) => ({
      era,
      items: EVENTS.filter((e) => e.era === era.id && prose[e.id]?.misconception).map((e) => ({
        e,
        m: prose[e.id].misconception!,
        n: ++n,
      })),
    })).filter((g) => g.items.length > 0);
  }, [prose]);

  const total = all.reduce((s, g) => s + g.items.length, 0);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all
      .map((g) => ({
        ...g,
        items: g.items.filter(
          ({ e, m }) =>
            m.claim.toLowerCase().includes(q) ||
            m.correction.toLowerCase().includes(q) ||
            e.title.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [all, query]);

  const shown = groups.reduce((s, g) => s + g.items.length, 0);

  function scrollToEra(eraId: string) {
    const el = bodyRef.current?.querySelector(`#errata-${eraId}`);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <Veil onClose={onClose} label="What you probably had wrong">
      <div
        className="plate plate-in my-0 flex h-full max-h-none w-full sm:my-auto sm:h-auto sm:max-h-[94dvh] max-w-5xl flex-col rounded-none border-0 bg-panel sm:rounded-lg sm:border sm:border-line shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="shrink-0 px-5 pt-5 sm:px-7 sm:pt-6">
          <SheetHeader
            eyebrow="Errata"
            title="What You Probably Had Wrong"
            subtitle={
              <>
                {total} corrections, spread across the whole timeline — no era is a correction-free zone.
                Correcting a belief you already hold sticks far better than adding a fact to an empty slot.
              </>
            }
            onClose={onClose}
            right={
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter…"
                aria-label="Filter corrections"
                className="h-8 w-28 rounded-md border border-line bg-panel-2 px-2.5 text-[12px] text-ink placeholder:text-ink-dim/70 focus:border-accent/50 sm:w-40"
              />
            }
          />
        </div>

        <div ref={bodyRef} className="scroll-slim flex min-h-0 flex-1 gap-6 overflow-y-auto px-5 pb-6 pt-4 sm:px-7">
          {/* sticky era rail with count bars */}
          <nav className="sticky top-0 hidden w-40 shrink-0 self-start lg:block" aria-label="Jump to era">
            <div className="text-[10px] uppercase tracking-[0.18em] text-ink-dim/70">By era</div>
            <ul className="mt-2.5 space-y-1">
              {all.map(({ era, items }) => {
                const active = groups.some((g) => g.era.id === era.id);
                return (
                  <li key={era.id}>
                    <button
                      onClick={() => scrollToEra(era.id)}
                      disabled={!active}
                      className={`group flex w-full items-baseline gap-2 rounded px-1.5 py-1 text-left text-[12px] transition-colors ${
                        active ? 'text-ink-dim hover:bg-panel-2 hover:text-ink' : 'text-ink-dim/35'
                      }`}
                    >
                      <span className="tnum w-5 shrink-0 text-[11px] text-accent/70">{items.length}</span>
                      <span className="min-w-0 flex-1 truncate">{era.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="rule-ticks mt-3" />
            <p className="tnum mt-2 px-1.5 text-[10.5px] text-ink-dim/70">
              {query ? `${shown} of ${total} shown` : `${total} total`}
            </p>
          </nav>

          <div className="min-w-0 flex-1">
            {!prose && (
              <div role="status" aria-label="Loading the corrections" className="space-y-2 py-2">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="rounded-md border border-line bg-panel-2/40 px-4 py-3.5">
                    <div className="h-[0.8em] w-1/2 rounded bg-line/60" />
                    <div className="mt-3 h-[0.8em] w-full rounded bg-line/40" />
                    <div className="mt-1.5 h-[0.8em] w-4/5 rounded bg-line/40" />
                  </div>
                ))}
              </div>
            )}
            {prose && groups.length === 0 && (
              <p className="prose-body py-10 text-center text-[13.5px] text-ink-dim">
                Nothing matches “{query}”.
              </p>
            )}

            {groups.map(({ era, items }) => (
              <section key={era.id} id={`errata-${era.id}`} className="scroll-mt-2 pt-1 first:pt-0">
                <div className="sticky top-0 z-10 -mx-1 flex items-baseline gap-3 bg-panel/95 px-1 py-2 backdrop-blur-sm">
                  <h2 className="text-[11px] uppercase tracking-[0.2em] text-accent">{era.name}</h2>
                  <span className="tnum text-[10.5px] text-ink-dim/70">
                    {formatYear(era.start)} – {formatYear(era.end)}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="tnum text-[10.5px] text-ink-dim/70">{items.length}</span>
                </div>

                <div className="mb-5 mt-2 space-y-2">
                  {items.map(({ e, m, n }) => (
                    <button
                      key={e.id}
                      onClick={() => onJump(e.id)}
                      className="plate plate-hover plate-patina group block w-full rounded-md border border-line bg-panel-2/55 px-4 py-3.5 text-left transition-colors hover:border-patina/40 hover:bg-panel-2"
                    >
                      <div className="flex gap-3.5">
                        <span className="tnum shrink-0 pt-0.5 text-[11px] tabular-nums text-ink-dim/50">
                          {String(n).padStart(2, '0')}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex gap-2.5">
                            <span className="claim-rule mt-1 w-[3px] shrink-0 rounded-full" aria-hidden="true" />
                            <div className="min-w-0">
                              <div className="text-[9.5px] uppercase tracking-[0.16em] text-ink-dim/60">Claimed</div>
                              <p className="prose-body mt-0.5 max-w-[68ch] text-[13.5px] italic text-ink-dim">
                                {m.claim}
                              </p>
                            </div>
                          </div>
                          <div className="mt-2.5 flex gap-2.5">
                            <span className="mt-1 w-[3px] shrink-0 rounded-full bg-patina/70" aria-hidden="true" />
                            <div className="min-w-0">
                              <div className="text-[9.5px] uppercase tracking-[0.16em] text-patina/85">Actually</div>
                              <p className="prose-body mt-0.5 max-w-[68ch] text-[13.5px] text-ink">
                                {m.correction}
                              </p>
                            </div>
                          </div>
                          <div className="tnum mt-2.5 flex items-center gap-2 text-[11px] text-ink-dim/70 transition-colors group-hover:text-accent">
                            <span>{formatYear(e.year)}</span>
                            <span className="opacity-40">·</span>
                            <span className="truncate">{e.title}</span>
                            <span className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </Veil>
  );
}
