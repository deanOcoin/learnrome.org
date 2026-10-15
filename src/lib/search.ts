// one search for both dates and names, ranked on every keystroke

import { parseDateInput, snapToEvent } from './dateParser';
import { fuzzyFind } from './fuzzy';
import type { RomeEvent } from '../types';

export interface SearchHit {
  index: number;
  event: RomeEvent;
  /** shown as a small note on the row */
  note?: string;
}

export type SearchResult =
  | { kind: 'idle' }
  /** a bare number under 476 could be either era, never guess */
  | { kind: 'ambiguous'; bce: number; ce: number; query: string }
  // strong means the best hit scored above fuzzy's subsequence tier (<=10), i.e. the query
  // really appears in the text. callers mixing events with other result kinds need to know.
  | { kind: 'hits'; hits: SearchHit[]; exact?: SearchHit; asked?: number; strong: boolean }
  | { kind: 'empty'; query: string };

function yearNote(asked: number, e: RomeEvent): string {
  const bracketed = e.yearEnd != null && asked >= e.year && asked <= e.yearEnd;
  if (bracketed) return 'covers the year you asked for';
  const d = e.year - asked;
  if (d === 0) return 'exactly the year you asked for';
  const n = Math.abs(d);
  return `${n} year${n === 1 ? '' : 's'} ${d < 0 ? 'earlier' : 'later'}`;
}

function nearestByYear(events: RomeEvent[], year: number, count: number): SearchHit[] {
  const snap = snapToEvent(events, year);
  const seen = new Set<number>([snap.index]);
  const hits: SearchHit[] = [{ index: snap.index, event: events[snap.index], note: yearNote(year, events[snap.index]) }];
  const byDistance = events
    .map((e, i) => ({ i, d: Math.abs(e.year - year) }))
    .sort((a, b) => a.d - b.d);
  for (const { i } of byDistance) {
    if (hits.length >= count) break;
    if (seen.has(i)) continue;
    seen.add(i);
    hits.push({ index: i, event: events[i], note: yearNote(year, events[i]) });
  }
  return hits;
}

export function search(events: RomeEvent[], raw: string, limit = 24): SearchResult {
  const parsed = parseDateInput(raw);

  switch (parsed.kind) {
    case 'empty':
      return { kind: 'idle' };

    case 'ambiguous':
      return { kind: 'ambiguous', bce: parsed.bce, ce: parsed.ce, query: raw.trim() };

    case 'year': {
      const hits = nearestByYear(events, parsed.year, limit);
      // a parsed year is unambiguous about intent, whatever it lands near
      return { kind: 'hits', hits, exact: hits[0], asked: parsed.year, strong: true };
    }

    case 'text': {
      const matches = fuzzyFind(events, (e) => `${e.title} ${e.headline}`, parsed.query, limit);
      if (matches.length === 0) return { kind: 'empty', query: parsed.query };
      // drop the long tail, otherwise "rubicon" trails 20-odd incidental hits behind the answer
      const best = matches[0].score;
      const relevant = matches.filter((m) => m.score >= best * 0.45).slice(0, 12);
      const hits = relevant.map((m) => ({ index: events.indexOf(m.item), event: m.item }));
      // only teleport to an exact hit when one match clearly dominates
      const dominant = relevant.length === 1 || matches[0].score > matches[1].score * 1.8;
      // 12 sits above fuzzy's subsequence tier
      const strong = best > 12;
      return { kind: 'hits', hits, exact: dominant && strong ? hits[0] : undefined, strong };
    }
  }
}
