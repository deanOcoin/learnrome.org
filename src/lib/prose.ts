// per-era prose chunks, cached forever once loaded, with neighbour prefetch so
// ordinary stepping never waits on the network.

import { useEffect, useState } from 'react';
import { importProse, PROSE_ERAS, type EraKey } from '../data/events/generated/prose-index.gen';
import type { Prose } from '../data/events/full';
import type { EraId, RomeEvent } from '../types';

const cache = new Map<string, Record<string, Prose>>();
const inflight = new Map<string, Promise<Record<string, Prose>>>();

export function loadEraProse(era: string): Promise<Record<string, Prose>> {
  const hit = cache.get(era);
  if (hit) return Promise.resolve(hit);
  const running = inflight.get(era);
  if (running) return running;

  const p = importProse(era as EraKey)
    .then((m) => {
      cache.set(era, m.default);
      inflight.delete(era);
      return m.default;
    })
    .catch((err) => {
      inflight.delete(era);
      throw err;
    });
  inflight.set(era, p);
  return p;
}

/** sync, only answers when the era chunk is already resident */
export function peekProse(event: Pick<RomeEvent, 'id' | 'era'>): Prose | null {
  return cache.get(event.era)?.[event.id] ?? null;
}

export function prefetchEra(era: string) {
  if (!cache.has(era) && !inflight.has(era)) void loadEraProse(era).catch(() => {});
}

/** whole corpus, for the misconception index */
export function loadAllProse(): Promise<Record<string, Prose>> {
  return Promise.all(PROSE_ERAS.map(loadEraProse)).then((all) => Object.assign({}, ...all));
}

// resolves synchronously when the era is cached so there is no flash or layout shift
export function useProse(event: Pick<RomeEvent, 'id' | 'era'>): Prose | null {
  const [prose, setProse] = useState<Prose | null>(() => peekProse(event));

  useEffect(() => {
    const resident = peekProse(event);
    if (resident) {
      setProse(resident);
      return;
    }
    let live = true;
    setProse(null);
    loadEraProse(event.era).then((byId) => {
      if (live) setProse(byId[event.id] ?? null);
    });
    return () => {
      live = false;
    };
  }, [event.id, event.era]);

  return prose;
}

// stepping is local, so the current era plus its neighbours covers almost every next move
export function usePrefetchNeighbours(events: RomeEvent[], index: number) {
  useEffect(() => {
    const seen = new Set<EraId>();
    for (let i = Math.max(0, index - 3); i <= Math.min(events.length - 1, index + 3); i++) {
      seen.add(events[i].era);
    }
    const run = () => seen.forEach((era) => prefetchEra(era));
    // idle so prefetch never competes with the current event's render
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
      .requestIdleCallback;
    if (ric) {
      const id = ric(run);
      return () => (window as unknown as { cancelIdleCallback?: (h: number) => void }).cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(run, 200);
    return () => window.clearTimeout(t);
  }, [events, index]);
}
