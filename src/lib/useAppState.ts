// all app state in one place so the desktop and mobile shells are pure presentation

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { EVENTS, eventIndexById } from '../data/events';
import { usePrefetchNeighbours } from './prose';
import { buildControlTimeline } from './resolveControl';
import { TOURS } from '../data/tours';
import { snapToEvent } from './dateParser';
import { ERAS, type RegionId, type Tag } from '../types';
import type { ReadingDepth } from '../components/EventPanel';
import { readStored, writeStored } from './storage';

const LS_LAST = 'learnrome:last-event';
const LS_DEPTH = 'learnrome:depth';
const LS_VISITED = 'learnrome:visited';

// position is derived from the current event, never stored, so it can't drift
// when the scrubber, palette or region history moves the event instead
export interface TourState {
  tourId: string;
}

export const TAG_FILTERS: { value: Tag | 'all'; label: string }[] = [
  { value: 'all', label: 'All events' },
  { value: 'military', label: 'Military' },
  { value: 'constitutional', label: 'Constitutional' },
  { value: 'succession', label: 'Succession' },
  { value: 'economic', label: 'Economy' },
  { value: 'legal', label: 'Law' },
  { value: 'religious', label: 'Religion' },
  { value: 'social', label: 'Society' },
  { value: 'slavery', label: 'Slavery' },
  { value: 'daily-life', label: 'Daily life' },
  { value: 'culture', label: 'Culture' },
  { value: 'spectacle', label: 'Spectacle' },
  { value: 'infrastructure', label: 'Infrastructure' },
];

function initialIndex(): number {
  const fromUrl = new URLSearchParams(window.location.search).get('e');
  if (fromUrl) {
    const i = eventIndexById(fromUrl);
    if (i >= 0) return i;
  }
  const fromLs = readStored(LS_LAST);
  if (fromLs) {
    const i = eventIndexById(fromLs);
    if (i >= 0) return i;
  }
  return 0;
}

export function useAppState() {
  const [index, setIndexRaw] = useState(initialIndex);
  const [depth, setDepthRaw] = useState<ReadingDepth>(
    () => (readStored(LS_DEPTH) as ReadingDepth) || 'full'
  );
  const [selectedRegion, setSelectedRegion] = useState<RegionId | null>(null);
  const [playing, setPlaying] = useState(false);
  const [playMs, setPlayMs] = useState(4000);
  const [showHelp, setShowHelp] = useState(false);
  const [tagFilter, setTagFilter] = useState<Tag | 'all'>('all');
  const [tour, setTour] = useState<TourState | null>(null);
  const [showLanding, setShowLanding] = useState(
    () => !new URLSearchParams(window.location.search).get('e') && !readStored(LS_VISITED)
  );
  const [showMisconceptions, setShowMisconceptions] = useState(false);
  const [showGlance, setShowGlance] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    writeStored(LS_VISITED, '1');
  }, []);

  const timeline = useMemo(() => buildControlTimeline(EVENTS), []);
  const event = EVENTS[index];

  // warm the prose around the reader while idle
  usePrefetchNeighbours(EVENTS, index);
  const control = timeline.stateAt(index);
  const diff = timeline.diffAt(index);
  const lastChanged = timeline.lastChangedAt(index);

  const visibleSet = useMemo(() => {
    if (tagFilter === 'all') return undefined;
    const s = new Set<number>();
    EVENTS.forEach((e, i) => {
      if (e.tags.includes(tagFilter)) s.add(i);
    });
    return s;
  }, [tagFilter]);

  const setIndex = useCallback((i: number, push = false) => {
    const clamped = Math.max(0, Math.min(EVENTS.length - 1, i));
    setIndexRaw(clamped);
    const id = EVENTS[clamped].id;
    const url = new URL(window.location.href);
    url.searchParams.set('e', id);
    if (push) window.history.pushState(null, '', url);
    else window.history.replaceState(null, '', url);
    writeStored(LS_LAST, id);
  }, []);

  const setDepth = useCallback((d: ReadingDepth) => {
    setDepthRaw(d);
    writeStored(LS_DEPTH, d);
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      if (!visibleSet) return setIndex(index + dir);
      let i = index + dir;
      while (i >= 0 && i < EVENTS.length && !visibleSet.has(i)) i += dir;
      if (i >= 0 && i < EVENTS.length) setIndex(i);
    },
    [index, setIndex, visibleSet]
  );

  const jumpEra = useCallback(
    (dir: 1 | -1) => {
      const currentEra = EVENTS[index].era;
      const order = ERAS.map((e) => e.id);
      const target = order[order.indexOf(currentEra) + dir];
      if (!target) return;
      const i = EVENTS.findIndex((e) => e.era === target);
      if (i >= 0) setIndex(i);
    },
    [index, setIndex]
  );

  // play mode
  useEffect(() => {
    if (!playing) return;
    if (index >= EVENTS.length - 1) {
      setPlaying(false);
      return;
    }
    const t = window.setTimeout(() => step(1), playMs);
    return () => window.clearTimeout(t);
  }, [playing, index, playMs, step]);

  // back/forward
  useEffect(() => {
    function onPop() {
      const id = new URLSearchParams(window.location.search).get('e');
      if (id) {
        const i = eventIndexById(id);
        if (i >= 0) setIndexRaw(i);
      }
    }
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const jumpToEventId = useCallback(
    (id: string) => {
      const i = eventIndexById(id);
      if (i >= 0) {
        setSelectedRegion(null);
        setIndex(i, true);
      }
    },
    [setIndex]
  );

  // tours
  const activeTour = tour ? TOURS.find((t) => t.id === tour.tourId) ?? null : null;
  // ids missing from the corpus are skipped
  const tourSteps = useMemo(
    () => (activeTour ? activeTour.eventIds.map(eventIndexById).filter((i) => i >= 0) : []),
    [activeTour]
  );

  const startTour = useCallback(
    (tourId: string) => {
      const t = TOURS.find((x) => x.id === tourId);
      if (!t) return;
      const first = t.eventIds.map(eventIndexById).find((i) => i >= 0);
      if (first == null) return;
      setTour({ tourId });
      setShowLanding(false);
      setShowMisconceptions(false);
      setShowGlance(false);
      setSelectedRegion(null);
      setIndex(first, true);
    },
    [setIndex]
  );

  // -1 once the reader has wandered off the path
  const tourPos = tourSteps.indexOf(index);

  const tourStep = useCallback(
    (dir: 1 | -1) => {
      if (!tour || tourSteps.length === 0) return;
      // off the path: "next" rejoins at the closest stop instead of doing nothing
      if (tourPos < 0) {
        let best = 0;
        for (let i = 1; i < tourSteps.length; i++) {
          if (Math.abs(tourSteps[i] - index) < Math.abs(tourSteps[best] - index)) best = i;
        }
        setIndex(tourSteps[best]);
        return;
      }
      const next = tourPos + dir;
      if (next < 0 || next >= tourSteps.length) return;
      setIndex(tourSteps[next]);
    },
    [tour, tourSteps, tourPos, index, setIndex]
  );

  const surprise = useCallback(() => {
    const pool = EVENTS.map((e, i) => ({ e, i })).filter(({ e }) => e.weight >= 2);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setShowLanding(false);
    setIndex(pick.i, true);
  }, [setIndex]);

  const jumpToYear = useCallback(
    (year: number) => {
      setShowGlance(false);
      setShowLanding(false);
      setIndex(snapToEvent(EVENTS, year).index, true);
    },
    [setIndex]
  );

  // free navigation exits an active tour
  const jumpFree = useCallback(
    (i: number) => {
      setTour(null);
      setSelectedRegion(null);
      setIndex(i, true);
    },
    [setIndex]
  );

  const closeAllOverlays = useCallback(() => {
    setShowHelp(false);
    setShowLanding(false);
    setShowMisconceptions(false);
    setShowGlance(false);
    setShowAbout(false);
    setShowPalette(false);
    setSelectedRegion(null);
    setPlaying(false);
  }, []);

  // keyboard, declared after the tour callbacks it dispatches to
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // cmd-k has to work while a text field has focus, hence before the input check
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setShowPalette((s) => !s);
        return;
      }
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') return;
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          if (e.shiftKey) jumpEra(-1);
          else if (tour) tourStep(-1);
          else step(-1);
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (e.shiftKey) jumpEra(1);
          else if (tour) tourStep(1);
          else step(1);
          break;
        case 'Home':
          e.preventDefault();
          setIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setIndex(EVENTS.length - 1);
          break;
        case ' ':
          e.preventDefault();
          setPlaying((p) => !p);
          break;
        case '/':
          e.preventDefault();
          dateInputRef.current?.focus();
          break;
        case 'b':
        case 'B':
          setDepth(depth === 'brief' ? 'full' : 'brief');
          break;
        case '?':
          setShowHelp((s) => !s);
          break;
        case 'Escape':
          closeAllOverlays();
          break;
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [depth, jumpEra, setDepth, setIndex, step, tour, tourStep, closeAllOverlays]);

  return {
    // data
    events: EVENTS,
    index,
    event,
    timeline,
    control,
    diff,
    lastChanged,
    visibleSet,
    selectedRegion,
    depth,
    playing,
    playMs,
    tagFilter,
    tour,
    activeTour,
    tourSteps,
    tourPos,
    showHelp,
    showLanding,
    showMisconceptions,
    showGlance,
    showAbout,
    showPalette,
    dateInputRef,
    // actions
    setIndex,
    setSelectedRegion,
    setDepth,
    setPlaying,
    setPlayMs,
    setTagFilter,
    setTour,
    setShowHelp,
    setShowLanding,
    setShowMisconceptions,
    setShowGlance,
    setShowAbout,
    setShowPalette,
    step,
    jumpEra,
    jumpFree,
    jumpToEventId,
    jumpToYear,
    startTour,
    tourStep,
    surprise,
    closeAllOverlays,
    isFirstVisit: !readStored(LS_LAST),
  };
}

export type AppState = ReturnType<typeof useAppState>;

const Ctx = createContext<AppState | null>(null);
export const AppProvider = Ctx.Provider;

export function useApp(): AppState {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp must be used inside <AppProvider>');
  return v;
}
