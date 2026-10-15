// events carry deltas, not state. state at event i is the fold of all deltas
// up to and including i over an all-'unshown' base, precomputed once per events array.

import type { ControlStatus, RegionId, RomeEvent } from '../types';
import { ALL_REGION_IDS } from '../types';

export interface ControlChange {
  region: RegionId;
  from: ControlStatus;
  to: ControlStatus;
}

export interface ControlTimeline {
  /** shared object, do not mutate */
  stateAt(index: number): Record<RegionId, ControlStatus>;
  /** no-op deltas excluded */
  diffAt(index: number): ControlChange[];
  /** per region, the event <= index that last changed it. missing means still unshown */
  lastChangedAt(index: number): Partial<Record<RegionId, number>>;
  /** every change to region in order, powers the region history panel */
  historyOf(region: RegionId): { index: number; from: ControlStatus; to: ControlStatus }[];
}

const cache = new WeakMap<RomeEvent[], ControlTimeline>();

export function buildControlTimeline(events: RomeEvent[]): ControlTimeline {
  const cached = cache.get(events);
  if (cached) return cached;

  const states: Record<RegionId, ControlStatus>[] = [];
  const diffs: ControlChange[][] = [];
  const lastChanged: Partial<Record<RegionId, number>>[] = [];
  const histories = new Map<RegionId, { index: number; from: ControlStatus; to: ControlStatus }[]>();

  const state = {} as Record<RegionId, ControlStatus>;
  for (const r of ALL_REGION_IDS) state[r] = 'unshown';
  let last: Partial<Record<RegionId, number>> = {};

  events.forEach((e, i) => {
    const changes: ControlChange[] = [];
    for (const [region, to] of Object.entries(e.control) as [RegionId, ControlStatus][]) {
      const from = state[region];
      if (from !== to) {
        changes.push({ region, from, to });
        state[region] = to;
      }
    }
    if (changes.length > 0) {
      last = { ...last };
      for (const c of changes) {
        last[c.region] = i;
        let h = histories.get(c.region);
        if (!h) histories.set(c.region, (h = []));
        h.push({ index: i, from: c.from, to: c.to });
      }
    }
    states.push({ ...state });
    diffs.push(changes);
    lastChanged.push(last);
  });

  const timeline: ControlTimeline = {
    stateAt: (i) => states[clampIndex(i, events.length)],
    diffAt: (i) => diffs[clampIndex(i, events.length)],
    lastChangedAt: (i) => lastChanged[clampIndex(i, events.length)],
    historyOf: (region) => histories.get(region) ?? [],
  };
  cache.set(events, timeline);
  return timeline;
}

function clampIndex(i: number, len: number): number {
  if (len === 0) throw new Error('buildControlTimeline: empty event list');
  return Math.min(Math.max(i, 0), len - 1);
}
