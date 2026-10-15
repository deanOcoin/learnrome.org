// pointer-and-keyboard layout: map, right-hand reading panel, full timeline

import { useApp, TAG_FILTERS } from '../lib/useAppState';
import MapView from './MapView';
import Timeline from './Timeline';
import DateInput from './DateInput';
import Legend from './Legend';
import TourBar from './TourBar';
import PanelContent from './PanelContent';
import { BankButton, RouteGlyph, ErrataGlyph, PlatesGlyph, KeycapGlyph } from './ui';
import { formatYear, type Tag } from '../types';

export default function DesktopShell() {
  const app = useApp();

  return (
    <div className="flex h-full flex-col">
      <header className="pad-x-safe z-30 flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-line bg-panel px-3 py-2 sm:gap-x-4 sm:px-4">
        <div className="flex items-center gap-2.5">
          <span
            className="text-[19px] leading-none text-ink"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.015em' }}
          >
            Learn<span className="text-accent">Rome</span>
          </span>
          <span className="hidden h-4 w-px bg-line lg:block" />
          <span className="tnum hidden text-[10.5px] tracking-wide text-ink-dim lg:block">1000 BCE – 476 CE</span>
        </div>

        <div className="bank">
          <BankButton glyph={<RouteGlyph />} label="Tours" onClick={() => app.setShowLanding(true)} />
          <BankButton
            glyph={<ErrataGlyph />}
            label="Had Wrong"
            title="What You Probably Had Wrong — every misconception, in one sheet"
            onClick={() => app.setShowMisconceptions(true)}
            className="hidden sm:flex"
          />
          <BankButton
            glyph={<PlatesGlyph />}
            label="At a Glance"
            title="Rome at a Glance — three moments compared"
            onClick={() => app.setShowGlance(true)}
            className="hidden lg:flex"
          />
          <BankButton
            glyph={<KeycapGlyph />}
            label="Vade Mecum"
            title="Vade Mecum — every control, drawn where it sits on the keyboard (?)"
            onClick={() => app.setShowHelp(true)}
            className="hidden xl:flex"
          />
        </div>

        <select
          value={app.tagFilter}
          onChange={(e) => app.setTagFilter(e.target.value as Tag | 'all')}
          aria-label="Filter events by theme"
          className="rounded-md border border-line bg-panel-2 px-2 py-1.5 text-[12px] text-ink-dim transition-colors hover:border-line-bright focus:text-ink"
        >
          {TAG_FILTERS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        <div className="ml-auto flex items-center gap-2">
          {/* the palette gets a visible control showing its own shortcut, or nobody finds it */}
          <button
            onClick={() => app.setShowPalette(true)}
            title="Search everything (⌘K)"
            className="flex items-center gap-2 rounded-md border border-line bg-panel-2 px-2.5 py-1.5 text-[12px] text-ink-dim transition-colors hover:border-line-bright hover:text-ink"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.4" />
              <path d="M10.6 10.6 14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <span className="hidden xl:inline">Search</span>
            <kbd className="rounded border border-line px-1 text-[10px] leading-[1.4]">⌘K</kbd>
          </button>
          <DateInput events={app.events} onJump={app.jumpFree} inputRef={app.dateInputRef} />
        </div>
      </header>

      {app.activeTour && app.tour && (
        <TourBar
          tour={app.activeTour}
          step={app.tourPos}
          stepCount={app.tourSteps.length}
          onStep={app.tourStep}
          onExit={() => app.setTour(null)}
        />
      )}

      <div className="flex min-h-0 flex-1">
        <main className="relative min-w-0 flex-1">
          <MapView
            control={app.control}
            lastChanged={app.lastChanged}
            events={app.events}
            currentEvent={app.event}
            changed={app.diff.map((d) => d.region)}
            focusRegions={app.event.spatialFocus}
            selectedRegion={app.selectedRegion}
            onRegionClick={(r) => app.setSelectedRegion(r)}
          />
          <div className="absolute bottom-3 left-3 z-10 hidden sm:block">
            <Legend onAbout={() => app.setShowAbout(true)} />
          </div>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-md border border-line bg-panel/92 px-1.5 py-1 backdrop-blur-sm">
            <button
              onClick={() => app.step(-1)}
              disabled={app.index === 0}
              className="rounded px-2 py-1 text-ink-dim hover:text-ink disabled:opacity-30"
              aria-label="Previous event"
              title="Previous event (←)"
            >
              ◀
            </button>
            <button
              onClick={() => app.setPlaying((p) => !p)}
              className="rounded px-2 py-1 text-ink hover:text-accent"
              aria-label={app.playing ? 'Pause' : 'Play'}
              title="Play / pause (Space)"
            >
              {app.playing ? '⏸' : '⏵'}
            </button>
            <span className="tnum min-w-24 text-center text-[12px] text-ink">{formatYear(app.event.year)}</span>
            <button
              onClick={() => app.step(1)}
              disabled={app.index === app.events.length - 1}
              className="rounded px-2 py-1 text-ink-dim hover:text-ink disabled:opacity-30"
              aria-label="Next event"
              title="Next event (→)"
            >
              ▶
            </button>
            <select
              value={app.playMs}
              onChange={(e) => app.setPlayMs(Number(e.target.value))}
              aria-label="Play speed"
              className="rounded border-0 bg-transparent py-1 text-[11px] text-ink-dim"
            >
              <option value={2500}>fast</option>
              <option value={4000}>normal</option>
              <option value={6500}>slow</option>
            </select>
          </div>
        </main>

        <aside className="w-[400px] shrink-0 border-l border-line">
          <PanelContent />
        </aside>
      </div>

      <Timeline events={app.events} index={app.index} onSelect={app.jumpFree} visible={app.visibleSet} />
    </div>
  );
}
