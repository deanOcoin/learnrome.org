import { lazy, Suspense } from 'react';
import { useAppState, AppProvider, useApp } from './lib/useAppState';
import { useLayoutMode } from './lib/useLayoutMode';
import DesktopShell from './components/DesktopShell';
import MobileShell from './components/MobileShell';

// none of these are needed for first paint
const ShortcutsHelp = lazy(() => import('./components/ShortcutsHelp'));
const Landing = lazy(() => import('./components/Landing'));
const MisconceptionIndex = lazy(() => import('./components/MisconceptionIndex'));
const GlanceView = lazy(() => import('./components/GlanceView'));
const AboutMap = lazy(() => import('./components/AboutMap'));
const CommandPalette = lazy(() => import('./components/CommandPalette'));

// import.meta.env.DEV is replaced at build time, so the audit tool is not
// just unreachable in production, it is never bundled
const AuditView = import.meta.env.DEV ? lazy(() => import('./components/AuditView')) : null;

export default function App() {
  if (AuditView && new URLSearchParams(window.location.search).get('dev') === 'audit') {
    return (
      <Suspense fallback={null}>
        <AuditView />
      </Suspense>
    );
  }
  return <MainApp />;
}

function MainApp() {
  const state = useAppState();
  return (
    <AppProvider value={state}>
      <Shells />
    </AppProvider>
  );
}

function Shells() {
  const app = useApp();
  const mode = useLayoutMode();

  return (
    <>
      {mode === 'mobile' ? <MobileShell /> : <DesktopShell />}

      <Suspense fallback={null}>
        {app.showHelp && <ShortcutsHelp onClose={() => app.setShowHelp(false)} />}
        {app.showLanding && (
          <Landing
            firstVisit={app.isFirstVisit}
            onStartTour={app.startTour}
            onSurprise={app.surprise}
            onGlance={() => {
              app.setShowLanding(false);
              app.setShowGlance(true);
            }}
            onMisconceptions={() => {
              app.setShowLanding(false);
              app.setShowMisconceptions(true);
            }}
            onClose={() => app.setShowLanding(false)}
          />
        )}
        {app.showMisconceptions && (
          <MisconceptionIndex
            onJump={(id) => {
              app.setShowMisconceptions(false);
              app.jumpToEventId(id);
            }}
            onClose={() => app.setShowMisconceptions(false)}
          />
        )}
        {app.showGlance && <GlanceView onJumpToYear={app.jumpToYear} onClose={() => app.setShowGlance(false)} />}
        {app.showAbout && <AboutMap onClose={() => app.setShowAbout(false)} />}
        {app.showPalette && <CommandPalette onClose={() => app.setShowPalette(false)} />}
      </Suspense>
    </>
  );
}
