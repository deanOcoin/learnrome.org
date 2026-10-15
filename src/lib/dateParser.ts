// accepts '44 BCE', '44 BC', '-44', '212 CE', '212 AD', 'c. 390 BCE', '390BC'.
// a bare number <= 476 with no era marker is ambiguous and is never guessed.

import type { RomeEvent } from '../types';

export type ParsedDate =
  | { kind: 'year'; year: number; approx: boolean }
  | { kind: 'ambiguous'; bce: number; ce: number }
  | { kind: 'text'; query: string }
  | { kind: 'empty' };

const ERA_TOKEN = /(b\.?\s?c\.?\s?e\.?|b\.?\s?c\.?|c\.?\s?e\.?|a\.?\s?d\.?)/;
const YEAR_RE = new RegExp(
  `^(-)?(\\d{1,4})\\s*${ERA_TOKEN.source}?$`,
  'i'
);

export function parseDateInput(raw: string): ParsedDate {
  let t = raw.trim().toLowerCase().replace(/\s+/g, ' ').replace(/,/g, '');
  if (!t) return { kind: 'empty' };

  let approx = false;
  const circa = t.match(/^(?:c\.|ca\.|circa)\s+/);
  if (circa) {
    approx = true;
    t = t.slice(circa[0].length);
  }

  const m = t.match(YEAR_RE);
  if (!m) return { kind: 'text', query: raw.trim() };

  const n = parseInt(m[2], 10);
  if (n === 0) return { kind: 'text', query: raw.trim() };
  const neg = !!m[1];
  const era = m[3]?.replace(/[\s.]/g, '');

  if (era) {
    const isBce = era === 'bc' || era === 'bce';
    // "-44 CE" is a contradiction, the sign wins
    const year = neg || isBce ? -n : n;
    return { kind: 'year', year, approx };
  }
  if (neg) return { kind: 'year', year: -n, approx };
  // both readings of a bare number up to 476 are inside the app's range
  if (n <= 476) return { kind: 'ambiguous', bce: -n, ce: n };
  return { kind: 'year', year: -n, approx };
}

export interface SnapResult {
  index: number;
  /** eventYear - askedYear, negative means the event is earlier. 0 for bracketing spans */
  delta: number;
  bracketed: boolean;
  alternatives: number[];
}

/** 0 inside a span, else distance to the nearest endpoint */
export function yearDistance(e: Pick<RomeEvent, 'year' | 'yearEnd'>, year: number): number {
  const start = e.year;
  const end = e.yearEnd ?? e.year;
  if (year < start) return start - year;
  if (year > end) return year - end;
  return 0;
}

export function snapToEvent(events: RomeEvent[], year: number): SnapResult {
  if (events.length === 0) throw new Error('snapToEvent: empty event list');

  const scored = events.map((e, i) => ({
    i,
    e,
    d: yearDistance(e, year),
    span: (e.yearEnd ?? e.year) - e.year,
  }));

  // among hits an exact point beats a bracketing span (216 BCE means Cannae, not the
  // whole war) and the shortest span wins. a bracketing span still beats a nearer point event.
  const hits = scored
    .filter((x) => x.d === 0)
    .sort((a, b) => a.span - b.span || b.e.weight - a.e.weight || a.i - b.i);
  const byDistance = [...scored].sort(
    (a, b) => a.d - b.d || b.e.weight - a.e.weight || a.i - b.i
  );

  const chosen = hits.length > 0 ? hits[0] : byDistance[0];
  const bracketed = chosen.d === 0 && chosen.span > 0 && year !== chosen.e.year;

  const alternatives = byDistance
    .filter((x) => x.i !== chosen.i)
    .slice(0, 3)
    .map((x) => x.i);

  const start = chosen.e.year;
  const end = chosen.e.yearEnd ?? chosen.e.year;
  const nearestPoint = year < start ? start : year > end ? end : year;
  const delta = chosen.d === 0 ? 0 : nearestPoint - year;

  return { index: chosen.i, delta, bracketed, alternatives };
}
