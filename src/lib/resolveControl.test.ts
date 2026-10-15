import { describe, expect, it } from 'vitest';
import { buildControlTimeline } from './resolveControl';
import type { RomeEvent } from '../types';

function ev(id: string, control: RomeEvent['control']): RomeEvent {
  return {
    id,
    year: 0,
    era: 'principate',
    title: id,
    headline: '',
    body: '',
    whyItMatters: '',
    control,
    sources: [],
    weight: 1,
    reliability: 'well-attested',
    tags: ['military'],
  };
}

describe('buildControlTimeline', () => {
  const events = [
    ev('e0', { latium: 'core' }),
    ev('e1', { sicilia: 'contested' }),
    ev('e2', { sicilia: 'provincial', latium: 'core' }), // latium delta is a no-op
    ev('e3', {}),
    ev('e4', { sicilia: 'core' }),
  ];
  const tl = buildControlTimeline(events);

  it('folds deltas into full state', () => {
    expect(tl.stateAt(0).latium).toBe('core');
    expect(tl.stateAt(0).sicilia).toBe('unshown');
    expect(tl.stateAt(1).sicilia).toBe('contested');
    expect(tl.stateAt(2).sicilia).toBe('provincial');
    expect(tl.stateAt(2).latium).toBe('core');
    expect(tl.stateAt(4).sicilia).toBe('core');
  });

  it('defaults every region to unshown', () => {
    expect(tl.stateAt(0).aegyptus).toBe('unshown');
    expect(tl.stateAt(4)['parthia-core']).toBe('unshown');
  });

  it('diff excludes no-op deltas — a region that did not change must not appear', () => {
    const d2 = tl.diffAt(2);
    expect(d2).toEqual([{ region: 'sicilia', from: 'contested', to: 'provincial' }]);
  });

  it('diff is empty for non-territorial events', () => {
    expect(tl.diffAt(3)).toEqual([]);
  });

  it('tracks when each region last changed', () => {
    expect(tl.lastChangedAt(1).sicilia).toBe(1);
    expect(tl.lastChangedAt(3).sicilia).toBe(2); // e3 changed nothing
    expect(tl.lastChangedAt(4).sicilia).toBe(4);
    expect(tl.lastChangedAt(4).latium).toBe(0); // the no-op at e2 must not count
  });

  it('builds a full change history per region', () => {
    expect(tl.historyOf('sicilia')).toEqual([
      { index: 1, from: 'unshown', to: 'contested' },
      { index: 2, from: 'contested', to: 'provincial' },
      { index: 4, from: 'provincial', to: 'core' },
    ]);
    expect(tl.historyOf('aegyptus')).toEqual([]);
  });

  it('clamps out-of-range indices', () => {
    expect(tl.stateAt(99).sicilia).toBe('core');
    expect(tl.stateAt(-5).latium).toBe('core');
  });

  it('memoizes per events array', () => {
    expect(buildControlTimeline(events)).toBe(tl);
  });
});
