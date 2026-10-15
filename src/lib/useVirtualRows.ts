// fixed-height rows, so the visible window is arithmetic. no library needed.

import { useCallback, useEffect, useState, type RefObject } from 'react';

export interface Window {
  start: number;
  end: number;
  padTop: number;
  padBottom: number;
}

/** overscan is rows rendered beyond each edge so a flick never shows a gap */
export function useVirtualRows(
  scrollRef: RefObject<HTMLElement | null>,
  count: number,
  rowHeight: number,
  overscan = 8
): Window & { scrollToRow: (i: number, align?: 'center' | 'start') => void } {
  const [range, setRange] = useState({ start: 0, end: Math.min(count, 40) });

  const measure = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const first = Math.floor(el.scrollTop / rowHeight);
    const visible = Math.ceil(el.clientHeight / rowHeight);
    const start = Math.max(0, first - overscan);
    const end = Math.min(count, first + visible + overscan);
    setRange((prev) => (prev.start === start && prev.end === end ? prev : { start, end }));
  }, [scrollRef, count, rowHeight, overscan]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    measure();
    // no rAF coalescing: a queued frame never fires in a non-painting view and the
    // window would freeze. measure() is cheap and scroll already arrives about once a frame.
    const onScroll = () => measure();
    el.addEventListener('scroll', onScroll, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', onScroll);
      ro.disconnect();
    };
  }, [measure, scrollRef]);

  const scrollToRow = useCallback(
    (i: number, align: 'center' | 'start' = 'center') => {
      const el = scrollRef.current;
      if (!el) return;
      const top =
        align === 'center' ? i * rowHeight - el.clientHeight / 2 + rowHeight / 2 : i * rowHeight;
      el.scrollTop = Math.max(0, top);
      measure();
    },
    [scrollRef, rowHeight, measure]
  );

  return {
    start: range.start,
    end: range.end,
    padTop: range.start * rowHeight,
    padBottom: Math.max(0, (count - range.end) * rowHeight),
    scrollToRow,
  };
}
