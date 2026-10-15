// always visible, never a modal, never hover-revealed

const RAMP: { label: string; fill: string }[] = [
  { label: 'Core', fill: 'var(--color-status-core)' },
  { label: 'Province', fill: 'var(--color-status-provincial)' },
  { label: 'Client', fill: 'var(--color-status-client)' },
  { label: 'Contested', fill: 'var(--color-status-contested)' },
];

const RIVALS: { label: string; fill: string }[] = [
  { label: 'Carthage', fill: 'var(--color-rival-carthage)' },
  { label: 'Hellenistic', fill: 'var(--color-rival-hellenistic)' },
  { label: 'Parthia / Persia', fill: 'var(--color-rival-parthia)' },
  { label: 'Celtic', fill: 'var(--color-rival-celtic)' },
  { label: 'Germanic', fill: 'var(--color-rival-germanic)' },
  { label: 'Steppe', fill: 'var(--color-rival-steppe)' },
];

function Swatch({ fill, pattern }: { fill?: string; pattern?: 'hatch' | 'dots' | 'lost' }) {
  if (pattern === 'hatch') {
    return (
      <svg width="14" height="14" className="shrink-0 rounded-[2px]">
        <rect width="14" height="14" fill="var(--color-status-provincial)" />
        <path d="M -2 4 L 4 -2 M 0 14 L 14 0 M 10 16 L 16 10" stroke="var(--color-sea)" strokeWidth="2.4" />
      </svg>
    );
  }
  if (pattern === 'dots') {
    return (
      <svg width="14" height="14" className="shrink-0 rounded-[2px]">
        <rect width="14" height="14" fill="var(--color-status-provincial)" />
        <circle cx="4" cy="4" r="1.3" fill="var(--color-sea)" />
        <circle cx="10" cy="10" r="1.3" fill="var(--color-sea)" />
        <circle cx="10" cy="4" r="1.3" fill="var(--color-sea)" />
        <circle cx="4" cy="10" r="1.3" fill="var(--color-sea)" />
      </svg>
    );
  }
  if (pattern === 'lost') {
    return (
      <svg width="14" height="14" className="shrink-0 rounded-[2px]">
        <rect width="14" height="14" fill="var(--color-land)" />
        <rect x="1" y="1" width="12" height="12" fill="none" stroke="var(--color-status-lost-outline)" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    );
  }
  return <span className="h-3.5 w-3.5 shrink-0 rounded-[2px]" style={{ background: fill }} />;
}

// the full grid doesn't fit a phone, so this shows the control ramp as a strip
// and defers rival hues and pattern fills to the About sheet
export function LegendCompact({ onAbout }: { onAbout?: () => void }) {
  return (
    <button
      onClick={onAbout}
      // accessible name must contain the visible text (WCAG 2.5.3) for voice control
      aria-label="Roman control legend — brighter is firmer. Opens About the map."
      className="tap pointer-events-auto flex select-none items-center gap-2 rounded-md border border-line bg-panel/90 px-2 py-1 shadow-lg backdrop-blur-sm active:bg-panel-2"
    >
      <span className="flex overflow-hidden rounded-[2px]" aria-hidden="true">
        {RAMP.map((s) => (
          <span key={s.label} className="h-2.5 w-4" style={{ background: s.fill }} />
        ))}
        <span className="h-2.5 w-4" style={{ background: 'var(--color-land)' }} />
      </span>
      <span className="whitespace-nowrap text-[9.5px] leading-none text-ink-dim">Roman control</span>
    </button>
  );
}

export default function Legend({ onAbout }: { onAbout?: () => void }) {
  return (
    <div className="pointer-events-auto select-none rounded-md border border-line bg-panel/92 px-3 py-2.5 text-[11px] leading-tight shadow-lg backdrop-blur-sm">
      <div className="mb-1.5 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-ink-dim">
        Roman control
        <span className="text-ink-dim/60">— brighter = firmer</span>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
        {RAMP.map((s) => (
          <div key={s.label} className="flex items-center gap-1.5 text-ink">
            <Swatch fill={s.fill} />
            {s.label}
          </div>
        ))}
        <div className="flex items-center gap-1.5 text-ink">
          <Swatch pattern="hatch" />
          Breakaway
        </div>
        <div className="flex items-center gap-1.5 text-ink">
          <Swatch pattern="dots" />
          Held, briefly
        </div>
        <div className="flex items-center gap-1.5 text-ink">
          <Swatch pattern="lost" />
          Formerly Roman
        </div>
        <div className="flex items-center gap-1.5 text-ink">
          <Swatch fill="var(--color-land)" />
          Outside story
        </div>
      </div>
      <div className="mb-1.5 mt-2.5 text-[10px] uppercase tracking-wider text-ink-dim">Rival powers</div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
        {RIVALS.map((s) => (
          <div key={s.label} className="flex items-center gap-1.5 text-ink">
            <Swatch fill={s.fill} />
            {s.label}
          </div>
        ))}
      </div>
      {onAbout && (
        <button onClick={onAbout} className="mt-2 text-[10.5px] text-ink-dim underline-offset-2 hover:text-ink hover:underline">
          About the map — borders were zones, not lines
        </button>
      )}
    </div>
  );
}
