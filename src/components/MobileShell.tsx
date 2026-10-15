// touch layout: the map is the whole screen, everything else floats over it or
// slides up from the bottom edge where a thumb reaches.

import { lazy, Suspense, useRef, useState } from 'react';
import { useApp } from '../lib/useAppState';
import { useElementSize } from '../lib/useElementSize';
import { fixMobileView, useViewDisplaced } from '../lib/fixView';
import MapView from './MapView';
import PanelContent from './PanelContent';
import TourBar from './TourBar';
import BottomSheet, { type BottomSheetHandle, type SnapId } from './BottomSheet';
import MobileTimelineRail from './MobileTimelineRail';
// never needed on first paint
const MobileTimelineSheet = lazy(() => import('./MobileTimelineSheet'));
const MobileMenu = lazy(() => import('./MobileMenu'));
const MobileSearchSheet = lazy(() => import('./MobileSearchSheet'));
import { LegendCompact } from './Legend';
import { formatYear } from '../types';

export default function MobileShell() {
  const app = useApp();
  const headerRef = useRef<HTMLElement>(null);
  const mapResetRef = useRef<(() => void) | null>(null);
  const sheetRef = useRef<BottomSheetHandle>(null);
  const header = useElementSize(headerRef);
  const [sheetH, setSheetH] = useState(0);
  const [snap, setSnap] = useState<SnapId>('half');
  const [showTimeline, setShowTimeline] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [fixed, setFixed] = useState(false);
  const displaced = useViewDisplaced();

  function fixView() {
    fixMobileView({ resettleSheet: () => sheetRef.current?.snapTo(snap) });
    setFixed(true);
    window.setTimeout(() => setFixed(false), 900);
  }

  // inset follows the settled snap, not the live drag, so the projection refits
  // once per gesture rather than every frame
  const mapBottomInset = Math.min(sheetH, window.innerHeight * 0.55);

  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute inset-0">
        <MapView
          control={app.control}
          lastChanged={app.lastChanged}
          events={app.events}
          currentEvent={app.event}
          changed={app.diff.map((d) => d.region)}
          focusRegions={app.event.spatialFocus}
          selectedRegion={app.selectedRegion}
          onRegionClick={(r) => app.setSelectedRegion(r)}
          fitInset={{ top: header.h, bottom: mapBottomInset }}
          showReset={false}
          resetRef={mapResetRef}
        />
      </div>

      <header ref={headerRef} className="pad-top-safe pad-x-safe absolute inset-x-0 top-0 z-30">
        <div className="flex items-center gap-2 bg-gradient-to-b from-sea/95 via-sea/80 to-transparent px-3 pb-6 pt-2">
          <span
            className="text-[17px] leading-none text-ink"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.015em' }}
          >
            Learn<span className="text-accent">Rome</span>
          </span>
          <div className="ml-auto flex items-center gap-2">
            {/* safe to spam, fixMobileView touches no app state */}
            <button
              onClick={fixView}
              title="Reset zoom and re-fit the layout without losing your place"
              className={`flex h-11 items-center gap-1.5 rounded-lg border px-2.5 text-[12px] backdrop-blur-sm transition-colors ${
                fixed
                  ? 'border-accent/60 bg-accent/15 text-accent'
                  : displaced
                    ? 'border-accent/70 bg-accent/12 text-accent'
                    : 'border-line bg-panel/90 text-ink active:bg-panel-2'
              }`}
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M1.6 5V2.4a.8.8 0 0 1 .8-.8H5M11 1.6h2.6a.8.8 0 0 1 .8.8V5M14.4 11v2.6a.8.8 0 0 1-.8.8H11M5 14.4H2.4a.8.8 0 0 1-.8-.8V11"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="8" r="1.6" fill="currentColor" />
              </svg>
              {/* label never changes, the colour flash is the confirmation. no aria-label:
                  an override must contain the visible text (WCAG 2.5.3), so the name comes from content */}
              <span className="whitespace-nowrap">Fix View</span>
              <span className="sr-only">
                — reset zoom and re-fit the layout without losing your place
              </span>
            </button>
            <button
              onClick={() => setShowSearch(true)}
              aria-label="Jump to a date or event"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-panel/90 text-ink backdrop-blur-sm active:bg-panel-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.4" />
                <path d="M10.6 10.6 14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
            <button
              onClick={() => setShowMenu(true)}
              aria-label="Menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-panel/90 text-ink backdrop-blur-sm active:bg-panel-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {app.activeTour && app.tour && (
        <div className="pad-x-safe absolute inset-x-0 top-[56px] z-30">
          <TourBar
            tour={app.activeTour}
            step={app.tourPos}
            stepCount={app.tourSteps.length}
            onStep={app.tourStep}
            onExit={() => app.setTour(null)}
          />
        </div>
      )}

      {/* legend stays visible without interaction, just above the sheet's top edge */}
      <div
        className="pad-x-safe pointer-events-none absolute left-3 z-10"
        style={{ bottom: sheetH + 8, transition: 'bottom 260ms cubic-bezier(0.2,0.7,0.3,1)' }}
      >
        <LegendCompact onAbout={() => app.setShowAbout(true)} />
      </div>

      <BottomSheet
        handleRef={sheetRef}
        initial="half"
        onSnapChange={(id, px) => {
          setSnap(id);
          setSheetH(px);
        }}
        onSwipeLeft={() => app.step(1)}
        onSwipeRight={() => app.step(-1)}
        label={app.selectedRegion ? 'Region history' : 'Event details'}
        header={
          <div className="border-b border-line px-3 pb-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => app.step(-1)}
                disabled={app.index === 0}
                aria-label="Previous event"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line text-ink-dim active:bg-panel-2 disabled:opacity-25"
              >
                ◀
              </button>

              <button
                onClick={() => sheetRef.current?.snapTo(snap === 'full' ? 'half' : 'full')}
                className="flex min-h-[44px] min-w-0 flex-1 flex-col justify-center text-left"
              >
                {/* no aria-label: it would have to contain the visible text (WCAG 2.5.3), and the
                    two lines concatenate without a space, so the name comes from content plus the sr-only span */}
                <div className="tnum text-[11px] leading-tight text-accent">{formatYear(app.event.year)}</div>
                <div className="truncate text-[14px] font-medium leading-tight text-ink">{app.event.title}</div>
                <span className="sr-only">{snap === 'full' ? '— collapse details' : '— expand details'}</span>
              </button>

              <button
                onClick={() => app.step(1)}
                disabled={app.index === app.events.length - 1}
                aria-label="Next event"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line text-ink-dim active:bg-panel-2 disabled:opacity-25"
              >
                ▶
              </button>
            </div>
          </div>
        }
        footer={
          <MobileTimelineRail
            events={app.events}
            index={app.index}
            onSelect={app.jumpFree}
            visible={app.visibleSet}
            onOpenFull={() => setShowTimeline(true)}
          />
        }
      >
        <div className="px-4 py-3">
          <PanelContent hideDepthToggle bare />
        </div>
      </BottomSheet>

      <Suspense fallback={null}>
      {showTimeline && (
        <MobileTimelineSheet
          events={app.events}
          index={app.index}
          visible={app.visibleSet}
          onSelect={app.jumpFree}
          onClose={() => setShowTimeline(false)}
        />
      )}
      {showMenu && (
        <MobileMenu
          onClose={() => setShowMenu(false)}
          onResetView={() => mapResetRef.current?.()}
          onAbout={() => app.setShowAbout(true)}
          onBrowseAll={() => setShowTimeline(true)}
        />
      )}
      {showSearch && (
        <MobileSearchSheet events={app.events} onJump={app.jumpFree} onClose={() => setShowSearch(false)} />
      )}
      </Suspense>
    </div>
  );
}
