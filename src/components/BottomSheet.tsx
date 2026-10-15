// the drag writes the element's height directly and React only hears the final
// snap, so the heavy content inside costs nothing per frame.

import { useCallback, useEffect, useImperativeHandle, useRef, useState, type ReactNode, type Ref } from 'react';

export type SnapId = 'peek' | 'half' | 'full';

/** fraction of the available height visible at each snap */
const SNAP_FRACTION: Record<SnapId, number> = {
  peek: 0.2,
  half: 0.55,
  full: 0.92,
};

const ORDER: SnapId[] = ['peek', 'half', 'full'];

// past this the flick direction wins over proximity
const FLICK_VELOCITY = 0.45; // px per ms
const RUBBER = 0.35; // resistance past the top stop

export interface BottomSheetHandle {
  snapTo: (id: SnapId) => void;
}

interface Props {
  children: ReactNode;
  /** doubles as the drag handle */
  header?: ReactNode;
  footer?: ReactNode;
  initial?: SnapId;
  onSnapChange?: (id: SnapId, heightPx: number) => void;
  onHeightChange?: (heightPx: number) => void;
  label?: string;
  handleRef?: Ref<BottomSheetHandle>;
  // horizontal flicks on the grab area step events. they live here and not on
  // the map because the map owns horizontal drag for panning
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

const AXIS_LOCK = 8; // px of travel before we commit to an axis
const SWIPE_MIN = 56; // px of horizontal travel that counts as a flick

export default function BottomSheet({
  children,
  header,
  footer,
  initial = 'half',
  onSnapChange,
  onHeightChange,
  label = 'Event details',
  handleRef,
  onSwipeLeft,
  onSwipeRight,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [snap, setSnap] = useState<SnapId>(initial);
  const [dragging, setDragging] = useState(false);

  // live drag bookkeeping, kept out of React state on purpose
  const drag = useRef({
    active: false,
    axis: 'undecided' as 'undecided' | 'x' | 'y',
    startX: 0,
    startY: 0,
    startH: 0,
    lastY: 0,
    lastT: 0,
    velocity: 0,
    dx: 0,
    pointerId: -1,
  });

  const availH = () => window.innerHeight;
  const heightFor = useCallback((id: SnapId) => Math.round(availH() * SNAP_FRACTION[id]), []);

  const applyHeight = useCallback(
    (px: number) => {
      const el = rootRef.current;
      if (!el) return;
      el.style.height = `${px}px`;
      onHeightChange?.(px);
    },
    [onHeightChange]
  );

  const settle = useCallback(
    (id: SnapId) => {
      setSnap(id);
      const px = heightFor(id);
      applyHeight(px);
      onSnapChange?.(id, px);
    },
    [applyHeight, heightFor, onSnapChange]
  );

  useEffect(() => {
    settle(initial);
    const onResize = () => settle(snapRef.current);
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // the resize listener above closes over nothing, it reads the current snap from here
  const snapRef = useRef<SnapId>(initial);
  useEffect(() => {
    snapRef.current = snap;
  }, [snap]);

  useImperativeHandle(handleRef, () => ({ snapTo: settle }), [settle]);

  const endDrag = useCallback(() => {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    setDragging(false);

    if (d.axis === 'x') {
      if (d.dx <= -SWIPE_MIN) onSwipeLeft?.();
      else if (d.dx >= SWIPE_MIN) onSwipeRight?.();
      return; // height was never touched
    }

    const el = rootRef.current;
    const current = el ? el.getBoundingClientRect().height : heightFor(snapRef.current);

    // a decisive flick goes one stop that way, otherwise snap to the nearest
    let target: SnapId;
    if (Math.abs(d.velocity) > FLICK_VELOCITY) {
      const dir = d.velocity < 0 ? 1 : -1; // dragging up grows the sheet
      const i = ORDER.indexOf(snapRef.current);
      target = ORDER[Math.max(0, Math.min(ORDER.length - 1, i + dir))];
    } else {
      target = ORDER.reduce((best, id) =>
        Math.abs(heightFor(id) - current) < Math.abs(heightFor(best) - current) ? id : best
      );
    }
    settle(target);
  }, [heightFor, settle]);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = rootRef.current;
    if (!el) return;
    const d = drag.current;
    d.active = true;
    d.axis = 'undecided';
    d.pointerId = e.pointerId;
    d.startX = e.clientX;
    d.startY = e.clientY;
    d.startH = el.getBoundingClientRect().height;
    d.lastY = e.clientY;
    d.lastT = e.timeStamp;
    d.velocity = 0;
    d.dx = 0;
    setDragging(true);
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      /* capture is an enhancement */
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.active) return;

    d.dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;

    // commit to one axis once, so a sloppy diagonal can't do both
    if (d.axis === 'undecided') {
      if (Math.abs(d.dx) < AXIS_LOCK && Math.abs(dy) < AXIS_LOCK) return;
      d.axis = Math.abs(d.dx) > Math.abs(dy) ? 'x' : 'y';
      if (d.axis === 'x' && !onSwipeLeft && !onSwipeRight) d.axis = 'y';
    }
    if (d.axis === 'x') return;

    const dt = e.timeStamp - d.lastT;
    if (dt > 0) d.velocity = (e.clientY - d.lastY) / dt;
    d.lastY = e.clientY;
    d.lastT = e.timeStamp;

    let next = d.startH - dy;
    const max = heightFor('full');
    const min = 44; // never fully vanish, the handle stays grabbable
    if (next > max) next = max + (next - max) * RUBBER; // rubber-band past the top
    if (next < min) next = min;
    applyHeight(next);
  };

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-label={label}
      // h-[55dvh] is only a fallback until the imperative style.height lands
      className="pad-x-safe absolute inset-x-0 bottom-0 z-20 flex h-[55dvh] flex-col rounded-t-2xl border-t border-line bg-panel shadow-2xl"
      // height is deliberately not in this style object: settle() and the drag write it
      // directly, and a React-owned value would snap the sheet back on any re-render
      style={{
        // no transition mid-drag, the finger is the animation
        transition: dragging ? 'none' : 'height 260ms cubic-bezier(0.2, 0.7, 0.3, 1)',
        willChange: 'height',
      }}
    >
      {/* touch-none so the browser doesn't claim the gesture */}
      <div
        className="touch-none shrink-0 cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={endDrag}
      >
        <div className="flex h-6 items-center justify-center" aria-hidden="true">
          <span className="h-1 w-10 rounded-full bg-line-bright" />
        </div>
        {header}
      </div>

      <div ref={scrollRef} className="scroll-slim min-h-0 flex-1 overflow-y-auto overscroll-contain">
        {children}
      </div>

      {footer && <div className="pad-bottom-safe shrink-0 border-t border-line">{footer}</div>}
    </div>
  );
}

export { SNAP_FRACTION };
