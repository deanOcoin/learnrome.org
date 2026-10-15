import { describe, expect, it } from 'vitest';
import { search } from './search';
import { FULL_EVENTS as EVENTS } from '../data/events/full';

const hitTitles = (q: string) => {
  const r = search(EVENTS, q);
  return r.kind === 'hits' ? r.hits.map((h) => h.event.title) : [];
};

describe('unified search', () => {
  it('empty query is idle, not an empty result', () => {
    expect(search(EVENTS, '   ').kind).toBe('idle');
  });

  it('resolves a year to the nearest event, closest first', () => {
    const r = search(EVENTS, '216 BCE');
    expect(r.kind).toBe('hits');
    if (r.kind !== 'hits') return;
    expect(r.hits[0].event.title).toBe('Cannae');
    expect(r.hits[0].note).toMatch(/exactly/);
    expect(r.asked).toBe(-216);
    // ordered by distance from the asked year
    const d = r.hits.map((h) => Math.abs(h.event.year - -216));
    expect([...d].sort((a, b) => a - b)).toEqual(d);
  });

  it('never guesses an ambiguous bare year', () => {
    const r = search(EVENTS, '212');
    expect(r.kind).toBe('ambiguous');
    if (r.kind !== 'ambiguous') return;
    expect(r.bce).toBe(-212);
    expect(r.ce).toBe(212);
  });

  it('finds events by name', () => {
    expect(hitTitles('rubicon')[0]).toBe('The Rubicon');
    expect(hitTitles('adrianople')[0]).toBe('Adrianople');
    expect(hitTitles('cannae')[0]).toBe('Cannae');
  });

  it('does not trail weak matches behind a strong one', () => {
    const r = search(EVENTS, 'rubicon');
    expect(r.kind).toBe('hits');
    if (r.kind !== 'hits') return;
    // the incidental long tail is trimmed
    expect(r.hits.length).toBeLessThanOrEqual(12);
    expect(r.exact?.event.title).toBe('The Rubicon');
  });

  it('reports nothing found rather than inventing a match', () => {
    const r = search(EVENTS, 'zzzzzqqq');
    expect(r.kind).toBe('empty');
  });

  it('marks real matches strong and letter-soup weak', () => {
    // the palette ranks events against commands on this flag: "glance" only matches
    // events as a scattered subsequence and must not outrank the "Rome at a Glance" command
    for (const q of ['rubicon', 'adrianople', 'cannae', '216 BCE']) {
      const r = search(EVENTS, q);
      expect(r.kind === 'hits' && r.strong, `${q} should be strong`).toBe(true);
    }
    const weak = search(EVENTS, 'glance');
    expect(weak.kind === 'hits' && weak.strong, 'glance should be weak').toBe(false);
  });

  it('only auto-selects an exact hit when the match is strong', () => {
    const weak = search(EVENTS, 'glance');
    expect(weak.kind === 'hits' && weak.exact).toBeUndefined();
  });

  it('accepts the date forms the spec requires', () => {
    for (const q of ['44 BCE', '44 BC', '-44', 'c. 390 BCE', '390BC', '  216   bce  ']) {
      const r = search(EVENTS, q);
      expect(r.kind, `${q} should resolve to events`).toBe('hits');
    }
  });
});
