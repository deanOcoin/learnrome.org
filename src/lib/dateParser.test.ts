import { describe, expect, it } from 'vitest';
import { parseDateInput, snapToEvent, yearDistance } from './dateParser';
import type { RomeEvent } from '../types';

describe('parseDateInput', () => {
  it('parses explicit BCE forms', () => {
    for (const s of ['44 BCE', '44 BC', '44 bce', '44bc', '44 b.c.', '44 B.C.E.']) {
      expect(parseDateInput(s)).toEqual({ kind: 'year', year: -44, approx: false });
    }
  });

  it('parses explicit CE forms', () => {
    for (const s of ['212 CE', '212 AD', '212 ce', '212ad', '212 a.d.', '212 C.E.']) {
      expect(parseDateInput(s)).toEqual({ kind: 'year', year: 212, approx: false });
    }
  });

  it('parses negative numbers as BCE', () => {
    expect(parseDateInput('-44')).toEqual({ kind: 'year', year: -44, approx: false });
  });

  it('flags bare numbers ≤ 476 as ambiguous instead of guessing', () => {
    expect(parseDateInput('212')).toEqual({ kind: 'ambiguous', bce: -212, ce: 212 });
    expect(parseDateInput('476')).toEqual({ kind: 'ambiguous', bce: -476, ce: 476 });
    expect(parseDateInput('1')).toEqual({ kind: 'ambiguous', bce: -1, ce: 1 });
  });

  it('reads bare numbers > 476 as BCE (the only in-range reading)', () => {
    expect(parseDateInput('753')).toEqual({ kind: 'year', year: -753, approx: false });
  });

  it('handles circa prefixes', () => {
    expect(parseDateInput('c. 390 BCE')).toEqual({ kind: 'year', year: -390, approx: true });
    expect(parseDateInput('circa 390 bc')).toEqual({ kind: 'year', year: -390, approx: true });
    expect(parseDateInput('ca. 390')).toEqual({ kind: 'ambiguous', bce: -390, ce: 390 });
  });

  it('tolerates whitespace noise and attached era markers', () => {
    expect(parseDateInput('  390BC ')).toEqual({ kind: 'year', year: -390, approx: false });
    expect(parseDateInput(' 212   ce ')).toEqual({ kind: 'year', year: 212, approx: false });
  });

  it('falls through to text queries for non-year input', () => {
    expect(parseDateInput('rubicon')).toEqual({ kind: 'text', query: 'rubicon' });
    expect(parseDateInput('battle of cannae')).toEqual({ kind: 'text', query: 'battle of cannae' });
  });

  it('rejects year zero (no such year)', () => {
    expect(parseDateInput('0')).toEqual({ kind: 'text', query: '0' });
  });

  it('returns empty for blank input', () => {
    expect(parseDateInput('   ')).toEqual({ kind: 'empty' });
  });
});

function ev(id: string, year: number, extra: Partial<RomeEvent> = {}): RomeEvent {
  return {
    id,
    year,
    era: 'late-republic',
    title: id,
    headline: '',
    body: '',
    whyItMatters: '',
    control: {},
    sources: [],
    weight: 2,
    reliability: 'well-attested',
    tags: ['military'],
    ...extra,
  };
}

describe('snapToEvent', () => {
  const events = [
    ev('punic2', -218, { yearEnd: -201, weight: 3 }),
    ev('trasimene', -217),
    ev('cannae', -216, { weight: 3 }),
    ev('zama', -202),
    ev('cynoscephalae', -197),
  ];

  it('prefers a bracketing span over a nearer point event', () => {
    // 210 BCE: trasimene/cannae are 6-7 years away, zama is 8, but the war
    // span brackets it and must win
    const r = snapToEvent(events, -210);
    expect(events[r.index].id).toBe('punic2');
    expect(r.bracketed).toBe(true);
    expect(r.delta).toBe(0);
  });

  it('snaps to nearest by absolute distance outside spans', () => {
    const r = snapToEvent(events, -195);
    expect(events[r.index].id).toBe('cynoscephalae');
    expect(r.delta).toBe(-2); // event is 2 years earlier than asked
  });

  it('reports a positive delta when the event is later than asked', () => {
    const r = snapToEvent([ev('a', -300), ev('b', -100)], -320);
    expect(events && r.delta).toBe(20);
  });

  it('prefers the most specific span when several bracket', () => {
    const nested = [
      ev('long', -300, { yearEnd: -100 }),
      ev('short', -220, { yearEnd: -200 }),
    ];
    const r = snapToEvent(nested, -210);
    expect(nested[r.index].id).toBe('short');
  });

  it('offers next-nearest alternatives, excluding the chosen event', () => {
    const r = snapToEvent(events, -216);
    expect(events[r.index].id).toBe('cannae');
    expect(r.alternatives).toHaveLength(3);
    expect(r.alternatives).not.toContain(r.index);
  });

  it('breaks distance ties toward higher weight', () => {
    const tie = [ev('minor', -100, { weight: 1 }), ev('major', -104, { weight: 3 })];
    const r = snapToEvent(tie, -102);
    expect(tie[r.index].id).toBe('major');
  });
});

describe('yearDistance', () => {
  it('is zero inside a span and endpoint-distance outside', () => {
    const span = ev('s', -218, { yearEnd: -201 });
    expect(yearDistance(span, -210)).toBe(0);
    expect(yearDistance(span, -220)).toBe(2);
    expect(yearDistance(span, -195)).toBe(6);
  });
});
