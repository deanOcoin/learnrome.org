// piecewise-linear scale: event density is wildly uneven, so each segment gets an
// explicit share of the axis. shares are relative weights, they need not sum to 100.

export interface ScaleSegment {
  start: number;
  end: number;
  share: number;
}

// starting weights, rebalanceSegments re-derives them from the corpus
export const TIMELINE_SEGMENTS: ScaleSegment[] = [
  { start: -1000, end: -509, share: 6 },
  { start: -509, end: -264, share: 11 },
  { start: -264, end: -133, share: 14 },
  { start: -133, end: -44, share: 17 },
  { start: -44, end: 14, share: 10 },
  { start: 14, end: 180, share: 13 },
  { start: 180, end: 284, share: 10 },
  { start: 284, end: 395, share: 10 },
  { start: 395, end: 476, share: 9 },
  // epilogue is deliberately squashed, the density ruler makes the warp visible
  { start: 476, end: 1453, share: 3 },
];

export interface TimelineScale {
  /** year to t in [0, 1], clamped to the domain */
  toT(year: number): number;
  toYear(t: number): number;
  domain: [number, number];
  /** with [t0, t1] extents, for the density ruler */
  segments: (ScaleSegment & { t0: number; t1: number })[];
}

export function makeTimelineScale(segments: ScaleSegment[] = TIMELINE_SEGMENTS): TimelineScale {
  if (segments.length === 0) throw new Error('makeTimelineScale: no segments');
  const total = segments.reduce((s, seg) => s + seg.share, 0);
  let acc = 0;
  const segs = segments.map((seg) => {
    const t0 = acc / total;
    acc += seg.share;
    const t1 = acc / total;
    return { ...seg, t0, t1 };
  });
  const domain: [number, number] = [segs[0].start, segs[segs.length - 1].end];

  function toT(year: number): number {
    if (year <= domain[0]) return 0;
    if (year >= domain[1]) return 1;
    const seg = segs.find((s) => year >= s.start && year <= s.end)!;
    return seg.t0 + ((year - seg.start) / (seg.end - seg.start)) * (seg.t1 - seg.t0);
  }

  function toYear(t: number): number {
    if (t <= 0) return domain[0];
    if (t >= 1) return domain[1];
    const seg = segs.find((s) => t >= s.t0 && t <= s.t1)!;
    return seg.start + ((t - seg.t0) / (seg.t1 - seg.t0)) * (seg.end - seg.start);
  }

  return { toT, toYear, domain, segments: segs };
}

// share proportional to event count, clamped to [lo, hi] x uniform so sparse
// centuries keep a visible presence. share is the axis length, so this is density.
export function rebalanceSegments(
  segments: ScaleSegment[],
  eventYears: number[],
  lo = 0.6,
  hi = 1.6
): ScaleSegment[] {
  const counts = segments.map(
    (s) => eventYears.filter((y) => y >= s.start && y < s.end).length
  );
  const totalEvents = counts.reduce((a, b) => a + b, 0);
  if (totalEvents === 0) return segments;
  const avgShare = 100 / segments.length;
  return segments.map((s, i) => {
    const ideal = (counts[i] / totalEvents) * 100;
    const share = Math.min(Math.max(ideal, avgShare * lo), avgShare * hi);
    return { ...s, share };
  });
}
