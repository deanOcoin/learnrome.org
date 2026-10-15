// DOM-level repairs for a mobile browser that has drifted (page zoom, stray
// selection, scroll offsets). Touches no app state, so it is safe to run any time.

import { useEffect, useState } from 'react';

export interface FixViewOptions {
  /** re-settle the bottom sheet against the possibly new viewport height */
  resettleSheet?: () => void;
}

let originalViewport = '';
let restoreTimer = 0;

// no API to set the page zoom; briefly pinning maximum-scale=1 is the only lever.
// the authored value must come back right after or pinch-zoom stays disabled.
function resetPageZoom(): void {
  const meta = document.querySelector<HTMLMetaElement>('meta[name="viewport"]');
  if (!meta) return;

  // don't re-read while a reset is in flight or a second tap bakes in the locked value
  if (!restoreTimer) originalViewport = meta.getAttribute('content') ?? '';
  const original = originalViewport;

  meta.setAttribute('content', `${original}, minimum-scale=1, maximum-scale=1, user-scalable=no`);

  if (restoreTimer) window.clearTimeout(restoreTimer);
  restoreTimer = window.setTimeout(() => {
    meta.setAttribute('content', original);
    restoreTimer = 0;
  }, 320);
}

// blur is what actually closes the on-screen keyboard
function dismissKeyboard(): void {
  const active = document.activeElement;
  if (active instanceof HTMLElement && active !== document.body) active.blur();
}

// a long-press on the map leaves selection handles floating over everything
function clearSelection(): void {
  const sel = window.getSelection?.();
  if (sel && !sel.isCollapsed) sel.removeAllRanges();
}

// a zoomed page scrolls in both axes even though the app never does
function resetDocumentScroll(): void {
  window.scrollTo(0, 0);
  const de = document.documentElement;
  de.scrollLeft = 0;
  de.scrollTop = 0;
  document.body.scrollLeft = 0;
  document.body.scrollTop = 0;
}

// nothing scrolls sideways, so any horizontal offset is drift. vertical is the
// reader's place and is kept, but clamped: past-the-end renders blank until touched.
function repairScrollContainers(): void {
  const nodes = document.querySelectorAll<HTMLElement>(
    '[class*="overflow-y-auto"], [class*="overflow-auto"], [role="listbox"]'
  );
  for (const el of nodes) {
    if (el.scrollLeft !== 0) el.scrollLeft = 0;
    const max = el.scrollHeight - el.clientHeight;
    if (max >= 0 && el.scrollTop > max) el.scrollTop = max;
  }
}

// don't force a re-raster with transform: translateZ(0) on the root. a transformed
// ancestor becomes the containing block for every position: fixed overlay, and the
// rAF cleanup wouldn't fire while the page isn't painting. a sync reflow is enough.
function reflow(): void {
  if (document.documentElement.style.transform) document.documentElement.style.transform = '';
  void document.documentElement.offsetHeight;
  void document.body.offsetWidth;
}

function remeasure(opts: FixViewOptions): void {
  window.dispatchEvent(new Event('resize'));
  // the sheet and a few components listen for orientationchange too
  window.dispatchEvent(new Event('orientationchange'));
  opts.resettleSheet?.();
}

export function fixMobileView(opts: FixViewOptions = {}): void {
  dismissKeyboard();
  clearSelection();
  resetDocumentScroll();
  repairScrollContainers();
  resetPageZoom();
  reflow();

  // the zoom reset is async in both engines, so measure again once it lands.
  // timers, not rAF: rAF is suspended when the page isn't painting, which is
  // exactly when someone reaches for this button.
  remeasure(opts);
  window.setTimeout(() => {
    resetDocumentScroll();
    remeasure(opts);
  }, 60);
  window.setTimeout(() => {
    resetDocumentScroll();
    remeasure(opts);
  }, 400);
}

/** zoomed or panned visual viewport, or a scrolled document */
export function viewIsDisplaced(): boolean {
  const vv = window.visualViewport;
  if (vv) {
    if (Math.abs(vv.scale - 1) > 0.01) return true;
    if (Math.abs(vv.offsetLeft) > 1 || Math.abs(vv.offsetTop) > 1) return true;
  }
  return window.scrollX !== 0 || window.scrollY !== 0;
}

// visualViewport events fire on pinch-zoom and keyboard changes, which never raise a window resize
export function useViewDisplaced(): boolean {
  const [displaced, setDisplaced] = useState(false);

  useEffect(() => {
    const check = () => setDisplaced(viewIsDisplaced());
    check();
    const vv = window.visualViewport;
    vv?.addEventListener('resize', check);
    vv?.addEventListener('scroll', check);
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('orientationchange', check);
    return () => {
      vv?.removeEventListener('resize', check);
      vv?.removeEventListener('scroll', check);
      window.removeEventListener('scroll', check);
      window.removeEventListener('orientationchange', check);
    };
  }, []);

  return displaced;
}
