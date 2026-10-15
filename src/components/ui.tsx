// shared chrome for the overlay surfaces and the top-bar button bank. one motif
// (surveyor's sheet: registration ticks, hairline rules, tabular figures) across all of them.

import type { ReactNode, Ref } from 'react';
import { makeTimelineScale } from '../lib/timelineScale';
import { ERAS } from '../types';

const scale = makeTimelineScale();

// glyphs are drawn by hand so they sit with the map's marks

export function RouteGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 11.5c2.2 0 1.6-4.6 4-4.6s1.8-4.4 6-4.4"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="2" cy="11.5" r="1.5" fill="currentColor" />
      <circle cx="6.4" cy="6.6" r="1.2" fill="currentColor" opacity=".7" />
      <circle cx="12" cy="2.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function ErrataGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.4" stroke="currentColor" strokeWidth="1.1" opacity=".85" />
      <path d="M3.6 10.4 10.4 3.6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function KeycapGlyph() {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" aria-hidden="true">
      <rect x="0.75" y="0.75" width="13.5" height="10.5" rx="2.4" stroke="currentColor" strokeWidth="1.1" />
      {/* the cap's front edge, so it reads as a key and not a box */}
      <path d="M2.1 12.9h10.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
      <text
        x="7.5"
        y="8.7"
        textAnchor="middle"
        fill="currentColor"
        style={{ font: '600 8px "Inter Variable", system-ui, sans-serif' }}
      >
        →
      </text>
    </svg>
  );
}

export function PlatesGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="3.2" width="3.4" height="7.6" rx=".6" stroke="currentColor" strokeWidth="1.05" />
      <rect x="5.3" y="1.8" width="3.4" height="10.4" rx=".6" stroke="currentColor" strokeWidth="1.05" />
      <rect x="9.6" y="3.2" width="3.4" height="7.6" rx=".6" stroke="currentColor" strokeWidth="1.05" />
    </svg>
  );
}

interface BankButtonProps {
  glyph: ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
  title?: string;
}

export function BankButton({ glyph, label, onClick, className = 'flex', title }: BankButtonProps) {
  return (
    <button onClick={onClick} className={`bank-btn items-center gap-1.5 ${className}`} title={title ?? label}>
      {glyph}
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
}

export function CloseButton({ onClose, ref }: { onClose: () => void; ref?: Ref<HTMLButtonElement> }) {
  return (
    <button
      ref={ref}
      onClick={onClose}
      aria-label="Close"
      title="Close (Esc)"
      className="group -mr-1 -mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line text-ink-dim transition-colors hover:border-accent/60 hover:text-accent"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
        <path d="M1.5 1.5 10.5 10.5M10.5 1.5 1.5 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    </button>
  );
}

export function SheetHeader({
  eyebrow,
  title,
  subtitle,
  onClose,
  right,
}: {
  eyebrow: string;
  title: string;
  subtitle: ReactNode;
  onClose: () => void;
  right?: ReactNode;
}) {
  return (
    <header>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.22em] text-accent/85">{eyebrow}</div>
          <h1
            className="mt-1.5 text-[26px] leading-[1.12] text-ink sm:text-[30px]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.012em' }}
          >
            {title}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {right}
          <CloseButton onClose={onClose} />
        </div>
      </div>
      <p className="prose-body mt-2 max-w-xl text-[13.5px] text-ink-dim">{subtitle}</p>
      <div className="rule-ticks mt-4" />
    </header>
  );
}

// same piecewise scale as the timeline so the two always agree
export function SpanBar({ from, to, tone = 'accent' }: { from: number; to: number; tone?: 'accent' | 'patina' }) {
  const t0 = scale.toT(from);
  const t1 = scale.toT(to);
  const color = tone === 'patina' ? 'var(--color-patina)' : 'var(--color-accent)';
  return (
    <div className="relative h-[7px] w-full overflow-hidden rounded-sm bg-panel-3" aria-hidden="true">
      {ERAS.slice(1).map((e) => (
        <span
          key={e.id}
          className="absolute top-0 h-full w-px bg-line-bright/70"
          style={{ left: `${scale.toT(e.start) * 100}%` }}
        />
      ))}
      <span
        className="absolute top-0 h-full rounded-sm transition-[left,width] duration-300"
        style={{
          left: `${t0 * 100}%`,
          width: `${Math.max(1.2, (t1 - t0) * 100)}%`,
          background: `linear-gradient(90deg, ${color}, ${color})`,
          opacity: 0.9,
        }}
      />
    </div>
  );
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
export function roman(n: number): string {
  return ROMAN[n] ?? String(n + 1);
}

export function Veil({
  onClose,
  children,
  label,
  align = 'center',
}: {
  onClose: () => void;
  children: ReactNode;
  label: string;
  align?: 'center' | 'top';
}) {
  return (
    <div
      // on a phone the overlay is the screen, full bleed. the card treatment returns at sm
      className={`veil-in graticule pad-top-safe pad-bottom-safe pad-x-safe fixed inset-0 z-50 flex justify-center overflow-y-auto bg-sea p-0 backdrop-blur-[3px] sm:bg-sea/88 sm:p-5 ${
        align === 'center' ? 'items-stretch sm:items-center' : 'items-stretch sm:items-start'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      {children}
    </div>
  );
}
