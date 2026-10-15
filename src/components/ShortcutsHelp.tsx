// the shortcuts drawn as a keyboard, keys where they physically sit, and holding
// a real Shift changes the arrow caps in place.

import { useEffect, useState } from 'react';
import { Veil, SheetHeader } from './ui';

interface Props {
  onClose: () => void;
}

interface Key {
  cap: string;
  action: string;
  shiftAction?: string;
  /** fills its row, the space bar */
  wide?: boolean;
  width?: string;
}

const KEYS: Record<string, Key> = {
  esc: { cap: 'Esc', action: 'Close whatever is open' },
  slash: { cap: '/', action: 'Jump to a date or event' },
  b: { cap: 'B', action: 'Switch between brief and full' },
  question: { cap: '?', action: 'This handbook' },
  space: { cap: 'Space', action: 'Play or pause the advance', wide: true },
  // two units wide and hard left, where Shift is. full width would read as another space bar
  shift: { cap: '⇧', action: 'Hold to reach the eras', width: 'w-[104px]' },
  home: { cap: 'Home', action: 'Back to 1000 BCE' },
  end: { cap: 'End', action: 'Forward to 1453' },
  left: { cap: '←', action: 'Previous event', shiftAction: 'Previous era' },
  right: { cap: '→', action: 'Next event', shiftAction: 'Next era' },
};

export default function ShortcutsHelp({ onClose }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [shift, setShift] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => e.key === 'Shift' && setShift(true);
    const up = (e: KeyboardEvent) => e.key === 'Shift' && setShift(false);
    const blur = () => setShift(false);
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    window.addEventListener('blur', blur);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
      window.removeEventListener('blur', blur);
    };
  }, []);

  const active = hovered ? KEYS[hovered] : null;
  const readout = active
    ? shift && active.shiftAction
      ? active.shiftAction
      : active.action
    : null;

  function Cap({ id }: { id: string }) {
    const k = KEYS[id];
    const lit = hovered === id;
    const shifted = shift && !!k.shiftAction;
    return (
      <button
        type="button"
        onMouseEnter={() => setHovered(id)}
        onMouseLeave={() => setHovered((h) => (h === id ? null : h))}
        onFocus={() => setHovered(id)}
        onBlur={() => setHovered((h) => (h === id ? null : h))}
        aria-label={`${k.cap}: ${k.action}${k.shiftAction ? `. With Shift held: ${k.shiftAction}` : ''}`}
        className={`keycap flex h-9 items-center justify-center px-2 text-[12px] transition-colors ${
          k.wide ? 'flex-1' : (k.width ?? 'w-11')
        } ${lit || shifted ? 'text-accent' : 'text-ink'}`}
        style={
          lit || shifted
            ? { borderColor: 'var(--color-accent)', background: 'rgba(217,164,65,0.12)' }
            : undefined
        }
      >
        <span className="tnum">{k.cap}</span>
      </button>
    );
  }

  return (
    <Veil onClose={onClose} label="Vade Mecum — the controls">
      <div
        className="plate plate-in my-0 h-full w-full rounded-none border-0 bg-panel p-5 shadow-2xl sm:my-auto sm:h-auto sm:max-w-lg sm:rounded-lg sm:border sm:border-line sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <SheetHeader
          eyebrow="The Instrument"
          title="Vade Mecum"
          subtitle={
            <>
              <i>Latin: “go with me”</i> — the handbook you keep on your person. Every control, drawn
              where it actually sits under your hands.
            </>
          }
          onClose={onClose}
        />

        {/* opaque on purpose, a translucent plate lets coastlines run through the keys */}
        <div className="mt-5 rounded-lg border border-line bg-sea p-4">
          <div className="flex gap-6">
            {/* typing side */}
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <div className="flex gap-2">
                <Cap id="esc" />
                <span className="w-3" />
                <Cap id="slash" />
                <Cap id="b" />
                <Cap id="question" />
              </div>
              <div className="flex gap-2">
                <Cap id="shift" />
              </div>
              <div className="flex gap-2">
                <Cap id="space" />
              </div>
            </div>

            {/* navigation cluster, offset like the real one */}
            <div className="flex shrink-0 flex-col gap-2">
              <div className="flex gap-2">
                <Cap id="home" />
                <Cap id="end" />
              </div>
              <div className="flex justify-center gap-2 pt-[42px]">
                <Cap id="left" />
                <Cap id="right" />
              </div>
            </div>
          </div>

          {/* readout, same idiom as the timeline's hover card */}
          <div className="mt-4 flex min-h-[20px] items-center gap-2 border-t border-line pt-3">
            {readout ? (
              <>
                <span className="tnum shrink-0 text-[11px] text-accent">{active!.cap}</span>
                <span className="text-[12.5px] text-ink">{readout}</span>
                {shift && active!.shiftAction && (
                  <span className="ml-auto shrink-0 text-[10px] uppercase tracking-[0.16em] text-accent/80">
                    shift held
                  </span>
                )}
              </>
            ) : (
              <span className="text-[12.5px] text-ink-dim">
                Point at a key. Or hold <kbd className="keycap px-1 text-[10.5px] text-ink">⇧</kbd> and
                watch the arrows change.
              </span>
            )}
          </div>
        </div>

        <p className="mt-3 text-[11.5px] leading-relaxed text-ink-dim">
          Nothing here is required — every one of these has a control on screen. They are for the
          reader who would rather keep both hands still and let six centuries go past.
        </p>
      </div>
    </Veil>
  );
}
