import { useEffect, useState } from 'react';
import { readStored, writeStored, removeStored } from './storage';

export type LayoutMode = 'mobile' | 'desktop';

/** touch shell at or below this width */
export const MOBILE_MAX = 767;

const LS_KEY = 'learnrome:layout';

// ?layout=mobile|desktop sticks until clearLayoutOverride
function readOverride(): LayoutMode | null {
  const q = new URLSearchParams(window.location.search).get('layout');
  if (q === 'mobile' || q === 'desktop') {
    writeStored(LS_KEY, q);
    return q;
  }
  const stored = readStored(LS_KEY);
  return stored === 'mobile' || stored === 'desktop' ? stored : null;
}

// keyed on viewport width, never the UA: "Request Desktop Site" works by widening the
// layout viewport. pointer: coarse is deliberately left out, it would trap touch laptops.
export function useLayoutMode(): LayoutMode {
  const [mode, setMode] = useState<LayoutMode>(() => {
    if (typeof window === 'undefined') return 'desktop';
    return readOverride() ?? (window.innerWidth <= MOBILE_MAX ? 'mobile' : 'desktop');
  });

  useEffect(() => {
    const override = readOverride();
    if (override) {
      setMode(override);
      return;
    }
    const mq = window.matchMedia(`(max-width: ${MOBILE_MAX}px)`);
    // matchMedia change is dropped for engine-driven resizes (devtools, orientation,
    // URL-bar collapse), so read the width directly and listen to resize as well
    const apply = () => setMode(window.innerWidth <= MOBILE_MAX ? 'mobile' : 'desktop');
    apply();
    mq.addEventListener('change', apply);
    window.addEventListener('resize', apply);
    window.addEventListener('orientationchange', apply);
    return () => {
      mq.removeEventListener('change', apply);
      window.removeEventListener('resize', apply);
      window.removeEventListener('orientationchange', apply);
    };
  }, []);

  return mode;
}

/** primary input can't hover. drives affordances, not layout */
export function useCoarsePointer(): boolean {
  const [coarse, setCoarse] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    const apply = () => setCoarse(mq.matches);
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);
  return coarse;
}

export function clearLayoutOverride() {
  removeStored(LS_KEY);
  const url = new URL(window.location.href);
  url.searchParams.delete('layout');
  window.history.replaceState(null, '', url);
}
