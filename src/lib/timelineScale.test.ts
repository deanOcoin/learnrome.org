import { describe, expect, it } from 'vitest';
import { makeTimelineScale, rebalanceSegments, TIMELINE_SEGMENTS } from './timelineScale';

describe('makeTimelineScale', () => {
  const scale = makeTimelineScale();

  it('maps the domain ends to 0 and 1', () => {
    expect(scale.toT(-1000)).toBe(0);
    expect(scale.toT(1453)).toBe(1);
  });

  it('clamps outside the domain', () => {
    expect(scale.toT(-2000)).toBe(0);
    expect(scale.toT(2000)).toBe(1);
  });

  it('is strictly monotonic across segment boundaries', () => {
    const years = [-1000, -800, -509, -400, -264, -216, -133, -100, -44, -1, 1, 14, 100, 180, 250, 284, 350, 395, 450, 476, 1000, 1453];
    for (let i = 1; i < years.length; i++) {
      expect(scale.toT(years[i])).toBeGreaterThan(scale.toT(years[i - 1]));
    }
  });

  it('gives each segment exactly its share of the axis', () => {
    const total = TIMELINE_SEGMENTS.reduce((s, x) => s + x.share, 0);
    // end of the first segment (509 BCE) sits at share/total
    expect(scale.toT(-509)).toBeCloseTo(6 / total, 10);
    // the dense 133-44 BCE stretch spans exactly 17/total of the axis
    expect(scale.toT(-44) - scale.toT(-133)).toBeCloseTo(17 / total, 10);
  });

  it('round-trips year → t → year', () => {
    for (const y of [-753, -509, -216, -44, 14, 212, 476, 800]) {
      expect(scale.toYear(scale.toT(y))).toBeCloseTo(y, 6);
    }
  });

  it('exposes segment t-extents that tile [0, 1]', () => {
    expect(scale.segments[0].t0).toBe(0);
    expect(scale.segments[scale.segments.length - 1].t1).toBeCloseTo(1, 10);
    for (let i = 1; i < scale.segments.length; i++) {
      expect(scale.segments[i].t0).toBeCloseTo(scale.segments[i - 1].t1, 10);
    }
  });
});

describe('rebalanceSegments', () => {
  it('gives denser segments more share, within clamps', () => {
    const segs = [
      { start: -1000, end: -500, share: 50 },
      { start: -500, end: 0, share: 50 },
    ];
    // 3 events early, 17 late
    const years = [-900, -800, -700, ...Array.from({ length: 17 }, (_, i) => -400 + i * 20)];
    const out = rebalanceSegments(segs, years);
    expect(out[1].share).toBeGreaterThan(out[0].share);
    // sparse segment is floored at 0.6x the average share so it stays visible
    expect(out[0].share).toBeGreaterThanOrEqual(0.6 * 50 - 1e-9);
  });

  it('returns input unchanged when there are no events', () => {
    const segs = [{ start: 0, end: 100, share: 10 }];
    expect(rebalanceSegments(segs, [])).toEqual(segs);
  });
});
