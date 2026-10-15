// the desktop top bar as one bottom-anchored sheet, 52px rows where a thumb reaches

import { useApp, TAG_FILTERS } from '../lib/useAppState';
import { RouteGlyph, ErrataGlyph, PlatesGlyph } from './ui';
import { type Tag } from '../types';
import type { ReactNode } from 'react';

interface Props {
  onClose: () => void;
  onResetView: () => void;
  onAbout: () => void;
  onBrowseAll: () => void;
}

function Row({ icon, label, hint, onClick }: { icon?: ReactNode; label: string; hint?: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex min-h-[52px] w-full items-center gap-3 border-b border-line/60 px-4 text-left active:bg-panel-2"
    >
      {icon && <span className="flex w-5 justify-center text-ink-dim">{icon}</span>}
      <span className="min-w-0 flex-1">
        <span className="block text-[14px] text-ink">{label}</span>
        {hint && <span className="mt-0.5 block text-[11.5px] leading-tight text-ink-dim">{hint}</span>}
      </span>
      <span className="text-ink-dim/50">›</span>
    </button>
  );
}

export default function MobileMenu({ onClose, onResetView, onAbout, onBrowseAll }: Props) {
  const app = useApp();

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-end bg-sea/70 backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div
        className="pad-bottom-safe plate-in max-h-[88dvh] overflow-y-auto rounded-t-2xl border-t border-line bg-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-6 items-center justify-center" aria-hidden="true">
          <span className="h-1 w-10 rounded-full bg-line-bright" />
        </div>

        <Row
          icon={<RouteGlyph />}
          label="Tours"
          hint="Seven guided paths through the corpus"
          onClick={() => {
            onClose();
            app.setShowLanding(true);
          }}
        />
        <Row
          icon={<ErrataGlyph />}
          label="What You Probably Had Wrong"
          hint="82 corrections, by era"
          onClick={() => {
            onClose();
            app.setShowMisconceptions(true);
          }}
        />
        <Row
          icon={<PlatesGlyph />}
          label="Rome at a Glance"
          hint="264 BCE, 117 CE, 400 CE compared"
          onClick={() => {
            onClose();
            app.setShowGlance(true);
          }}
        />
        {/* the era chip on the rail opens the same sheet but can't reach 44px without
            stealing taps from the scrubber, so the accessible route lives here */}
        <Row
          label="Browse all events"
          hint="The whole corpus, by era, with date search"
          onClick={() => {
            onClose();
            onBrowseAll();
          }}
        />
        <Row
          label="Reset the map view"
          onClick={() => {
            onResetView();
            onClose();
          }}
        />
        <Row
          label="About the map"
          hint="Why borders were zones, not lines"
          onClick={() => {
            onClose();
            onAbout();
          }}
        />

        <div className="px-4 py-3">
          <label className="block text-[10px] uppercase tracking-[0.18em] text-ink-dim">Filter by theme</label>
          <select
            value={app.tagFilter}
            onChange={(e) => app.setTagFilter(e.target.value as Tag | 'all')}
            className="mt-2 h-11 w-full rounded-lg border border-line bg-panel-2 px-3 text-[14px] text-ink"
          >
            {TAG_FILTERS.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>

          <label className="mt-4 block text-[10px] uppercase tracking-[0.18em] text-ink-dim">Reading depth</label>
          <div className="mt-2 flex overflow-hidden rounded-lg border border-line" role="group" aria-label="Reading depth">
            {(['brief', 'full'] as const).map((d) => (
              <button
                key={d}
                onClick={() => app.setDepth(d)}
                aria-pressed={app.depth === d}
                className={`h-11 flex-1 text-[13px] uppercase tracking-wider ${
                  app.depth === d ? 'bg-panel-2 text-accent' : 'text-ink-dim'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="mt-4 h-11 w-full rounded-lg border border-line text-[13px] text-ink-dim active:bg-panel-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
