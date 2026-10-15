// the corpus as one windowed list of fixed 56px rows. era headers are folded into
// the same flat row list rather than nested, so the window stays arithmetic.

import { useEffect, useMemo, useRef } from 'react';
import { ERAS, formatEventDate, type RomeEvent } from '../types';
import { useVirtualRows } from '../lib/useVirtualRows';
import DateInput from './DateInput';
import { CloseButton } from './ui';

const ROW_H = 56;

interface Props {
  events: RomeEvent[];
  index: number;
  visible?: Set<number>;
  onSelect: (i: number) => void;
  onClose: () => void;
}

type Row =
  | { kind: 'header'; era: string; count: number; key: string }
  | { kind: 'event'; event: RomeEvent; index: number; key: string };

export default function MobileTimelineSheet({ events, index, visible, onSelect, onClose }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const rows = useMemo<Row[]>(() => {
    const out: Row[] = [];
    for (const era of ERAS) {
      const items = events
        .map((e, i) => ({ e, i }))
        .filter(({ e, i }) => e.era === era.id && (!visible || visible.has(i)));
      if (items.length === 0) continue;
      out.push({ kind: 'header', era: era.name, count: items.length, key: `h-${era.id}` });
      for (const { e, i } of items) out.push({ kind: 'event', event: e, index: i, key: e.id });
    }
    return out;
  }, [events, visible]);

  const currentRow = useMemo(() => rows.findIndex((r) => r.kind === 'event' && r.index === index), [rows, index]);

  const win = useVirtualRows(scrollRef, rows.length, ROW_H);

  // open where the reader already is, not at 1000 BCE
  useEffect(() => {
    if (currentRow >= 0) win.scrollToRow(currentRow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slice = rows.slice(win.start, win.end);

  return (
    <div className="graticule fixed inset-0 z-50 flex flex-col bg-sea" role="dialog" aria-modal="true" aria-label="Timeline">
      <div className="pad-top-safe pad-x-safe shrink-0 border-b border-line bg-panel">
        <div className="flex items-center justify-between gap-3 px-3 py-2">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-accent/85">Timeline</div>
            <div className="tnum text-[13px] text-ink">{events.length} events</div>
          </div>
          <CloseButton onClose={onClose} />
        </div>
        <div className="px-3 pb-2">
          <DateInput
            events={events}
            onJump={(i) => {
              onSelect(i);
              onClose();
            }}
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="scroll-slim pad-bottom-safe min-h-0 flex-1 overflow-y-auto overscroll-contain"
        role="listbox"
        aria-label="All events"
      >
        <div style={{ height: win.padTop }} aria-hidden="true" />
        {slice.map((row) =>
          row.kind === 'header' ? (
            <div
              key={row.key}
              className="flex items-baseline gap-2 border-b border-line bg-panel px-3"
              style={{ height: ROW_H }}
            >
              <span className="self-center text-[10px] uppercase tracking-[0.18em] text-accent">{row.era}</span>
              <span className="tnum self-center text-[10px] text-ink-dim">{row.count}</span>
            </div>
          ) : (
            <button
              key={row.key}
              role="option"
              aria-selected={row.index === index}
              onClick={() => {
                onSelect(row.index);
                onClose();
              }}
              className={`flex w-full items-center gap-3 border-b border-line/60 px-3 text-left active:bg-panel-2 ${
                row.index === index ? 'bg-panel-2' : ''
              }`}
              style={{ height: ROW_H }}
            >
              <span
                className={`tnum w-[74px] shrink-0 text-[11px] ${row.index === index ? 'text-accent' : 'text-ink-dim'}`}
              >
                {formatEventDate(row.event)}
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className={`block truncate text-[13.5px] leading-tight ${
                    row.index === index ? 'font-medium text-accent' : 'text-ink'
                  }`}
                >
                  {row.event.title}
                </span>
                <span className="mt-0.5 block truncate text-[11.5px] leading-tight text-ink-dim">
                  {row.event.headline}
                </span>
              </span>
              {row.event.weight === 3 && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />}
            </button>
          )
        )}
        <div style={{ height: win.padBottom }} aria-hidden="true" />
      </div>
    </div>
  );
}
