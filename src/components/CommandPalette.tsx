// cmd-k / ctrl-k: everything the toolbar offers, addressable by typing.

import { useEffect, useMemo, useRef, useState } from 'react';
import { search } from '../lib/search';
import { useApp, TAG_FILTERS } from '../lib/useAppState';
import { TOURS } from '../data/tours';
import { fuzzyFind } from '../lib/fuzzy';
import { formatEventDate, formatYear, type Tag } from '../types';

interface Action {
  id: string;
  label: string;
  hint?: string;
  group: string;
  run: () => void;
}

export default function CommandPalette({ onClose }: { onClose: () => void }) {
  const app = useApp();
  const [q, setQ] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => inputRef.current?.focus(), []);

  const actions = useMemo<Action[]>(() => {
    const close = (fn: () => void) => () => {
      fn();
      onClose();
    };
    return [
      { id: 'tours', label: 'Guided tours', hint: 'Seven curated paths', group: 'Go', run: close(() => app.setShowLanding(true)) },
      { id: 'errata', label: 'What You Probably Had Wrong', hint: 'Every correction', group: 'Go', run: close(() => app.setShowMisconceptions(true)) },
      { id: 'glance', label: 'Rome at a Glance', hint: '264 BCE / 117 CE / 400 CE', group: 'Go', run: close(() => app.setShowGlance(true)) },
      { id: 'about', label: 'About the map', hint: 'Borders were zones, not lines', group: 'Go', run: close(() => app.setShowAbout(true)) },
      { id: 'keys', label: 'Vade Mecum — the controls', group: 'Go', run: close(() => app.setShowHelp(true)) },
      { id: 'surprise', label: 'Surprise me', hint: 'A random significant event', group: 'Do', run: close(app.surprise) },
      {
        id: 'play',
        label: app.playing ? 'Stop playback' : 'Play through history',
        group: 'Do',
        run: close(() => app.setPlaying((p) => !p)),
      },
      {
        id: 'depth',
        label: app.depth === 'brief' ? 'Switch to full reading depth' : 'Switch to brief reading depth',
        group: 'Do',
        run: close(() => app.setDepth(app.depth === 'brief' ? 'full' : 'brief')),
      },
      { id: 'first', label: 'Jump to the beginning', hint: formatYear(app.events[0].year), group: 'Do', run: close(() => app.setIndex(0, true)) },
      {
        id: 'last',
        label: 'Jump to the end',
        hint: formatYear(app.events[app.events.length - 1].year),
        group: 'Do',
        run: close(() => app.setIndex(app.events.length - 1, true)),
      },
      ...TOURS.map((t) => ({
        id: `tour-${t.id}`,
        label: t.title,
        hint: `Tour · ~${t.minutes} min`,
        group: 'Tours',
        run: close(() => app.startTour(t.id)),
      })),
      ...TAG_FILTERS.map((t) => ({
        id: `tag-${t.value}`,
        label: t.value === 'all' ? 'Clear the theme filter' : `Filter: ${t.label}`,
        hint: 'Theme',
        group: 'Filter',
        run: close(() => app.setTagFilter(t.value as Tag | 'all')),
      })),
    ];
  }, [app, onClose]);

  const { events: eventHits, commands, ambiguous, strongEvents } = useMemo(() => {
    const r = search(app.events, q, 8);
    const cmds =
      q.trim() === ''
        ? actions.filter((a) => a.group !== 'Filter').slice(0, 8)
        : fuzzyFind(actions, (a) => `${a.label} ${a.hint ?? ''} ${a.group}`, q, 6).map((m) => m.item);
    return {
      events: r.kind === 'hits' ? r.hits.slice(0, 8) : [],
      commands: cmds,
      ambiguous: r.kind === 'ambiguous' ? r : null,
      strongEvents: r.kind === 'hits' && r.strong,
    };
  }, [app.events, q, actions]);

  // one flat list so up/down crosses the section break. events lead only on a strong
  // match: "rubicon" should find the Rubicon first, but "glance" must not let a few
  // scattered-letter headline hits outrank the "Rome at a Glance" command
  const flat = useMemo(() => {
    const cmds = commands.map((c) => ({ kind: 'cmd' as const, cmd: c }));
    const evs = eventHits.map((h) => ({ kind: 'event' as const, hit: h }));
    return strongEvents ? [...evs, ...cmds] : [...cmds, ...evs];
  }, [commands, eventHits, strongEvents]);

  useEffect(() => setCursor(0), [q]);
  useEffect(() => {
    listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [cursor]);

  function activate(i: number) {
    const row = flat[i];
    if (!row) return;
    if (row.kind === 'cmd') row.cmd.run();
    else {
      app.jumpFree(row.hit.index);
      onClose();
    }
  }

  return (
    <div
      className="veil-in graticule fixed inset-0 z-[60] flex items-start justify-center bg-sea/85 p-4 pt-[12vh] backdrop-blur-[3px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="plate plate-in w-full max-w-xl overflow-hidden rounded-lg border border-line bg-panel shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-line px-3">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 text-ink-dim">
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
              else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setCursor((c) => Math.min(flat.length - 1, c + 1));
              } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setCursor((c) => Math.max(0, c - 1));
              } else if (e.key === 'Enter') {
                e.preventDefault();
                activate(cursor);
              }
            }}
            placeholder="Jump to a year, an event, or a command…"
            aria-label="Search events and commands"
            className="tnum h-12 w-full bg-transparent text-[14.5px] text-ink placeholder:text-ink-dim/70 focus:outline-none"
          />
          <kbd className="keycap shrink-0 px-1.5 py-0.5 text-[10px] text-ink-dim">esc</kbd>
        </div>

        <div ref={listRef} className="scroll-slim max-h-[52vh] overflow-y-auto py-1">
          {ambiguous && (
            <div className="px-3 py-2.5">
              <p className="text-[12.5px] text-ink-dim">
                “{ambiguous.query}” exists on both sides of the era line.
              </p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => setQ(`${-ambiguous.bce} BCE`)}
                  className="tnum flex-1 rounded border border-line bg-panel-2 py-2 text-[13px] text-ink hover:border-accent/60"
                >
                  {-ambiguous.bce} <span className="era-mark">BCE</span>
                </button>
                <button
                  onClick={() => setQ(`${ambiguous.ce} CE`)}
                  className="tnum flex-1 rounded border border-line bg-panel-2 py-2 text-[13px] text-ink hover:border-accent/60"
                >
                  {ambiguous.ce} <span className="era-mark">CE</span>
                </button>
              </div>
            </div>
          )}

          {flat.length === 0 && !ambiguous && (
            <p className="px-3 py-6 text-center text-[13px] text-ink-dim">
              Nothing matches “{q}”.
            </p>
          )}

          {flat.map((row, i) => {
            const active = i === cursor;
            const prev = flat[i - 1];
            const group = row.kind === 'cmd' ? row.cmd.group : 'Events';
            const prevGroup = !prev ? null : prev.kind === 'cmd' ? prev.cmd.group : 'Events';
            return (
              <div key={row.kind === 'cmd' ? row.cmd.id : row.hit.event.id}>
                {group !== prevGroup && (
                  <div className="px-3 pb-1 pt-2 text-[9.5px] uppercase tracking-[0.18em] text-ink-dim/60">
                    {group}
                  </div>
                )}
                <button
                  data-active={active}
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => activate(i)}
                  className={`flex w-full items-center gap-3 px-3 py-2 text-left ${
                    active ? 'bg-accent/12' : ''
                  }`}
                >
                  {row.kind === 'event' ? (
                    <>
                      <span className={`tnum w-[84px] shrink-0 text-[11px] ${active ? 'text-accent' : 'text-ink-dim'}`}>
                        {formatEventDate(row.hit.event)}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={`block truncate text-[13.5px] ${active ? 'text-accent' : 'text-ink'}`}>
                          {row.hit.event.title}
                        </span>
                        {row.hit.note && (
                          <span className="block truncate text-[11px] text-ink-dim">{row.hit.note}</span>
                        )}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="min-w-0 flex-1">
                        <span className={`block truncate text-[13.5px] ${active ? 'text-accent' : 'text-ink'}`}>
                          {row.cmd.label}
                        </span>
                        {row.cmd.hint && (
                          <span className="block truncate text-[11px] text-ink-dim">{row.cmd.hint}</span>
                        )}
                      </span>
                      {active && <span className="shrink-0 text-[10px] text-ink-dim">↵</span>}
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
