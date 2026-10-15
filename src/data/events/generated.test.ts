// edit an era file and forget npm run build:corpus, and the app serves stale text
// while every content validator still passes. this is what makes that loud.

import { describe, expect, it } from 'vitest';
import { FULL_EVENTS, PROSE_KEYS } from './full';
import { EVENTS } from './index';
import { PROSE_ERAS, importProse } from './generated/prose-index.gen';

describe('generated corpus is current', () => {
  it('light index has every event, in the same order', () => {
    expect(EVENTS.length).toBe(FULL_EVENTS.length);
    expect(EVENTS.map((e) => e.id)).toEqual(FULL_EVENTS.map((e) => e.id));
  });

  it('light index matches the authored source field for field, minus prose', () => {
    FULL_EVENTS.forEach((full, i) => {
      const expected: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(full)) {
        if (!(PROSE_KEYS as readonly string[]).includes(k)) expected[k] = v;
      }
      expect(EVENTS[i], `${full.id} drifted — run npm run build:corpus`).toEqual(expected);
    });
  });

  it('light index carries no prose (that is the entire point)', () => {
    for (const e of EVENTS) {
      for (const k of PROSE_KEYS) {
        expect((e as unknown as Record<string, unknown>)[k], `${e.id} still carries ${k}`).toBeUndefined();
      }
    }
  });

  it('every event has prose in its era chunk, matching the source exactly', async () => {
    const loaded: Record<string, Record<string, unknown>> = {};
    for (const era of PROSE_ERAS) loaded[era] = (await importProse(era)).default;

    for (const full of FULL_EVENTS) {
      const chunk = loaded[full.era];
      expect(chunk, `no prose chunk for era ${full.era}`).toBeTruthy();
      const prose = chunk[full.id] as Record<string, unknown>;
      expect(prose, `${full.id} missing from prose-${full.era}`).toBeTruthy();
      expect(prose.body).toBe(full.body);
      expect(prose.whyItMatters).toBe(full.whyItMatters);
      expect(prose.sources).toEqual(full.sources);
      expect(prose.misconception).toEqual(full.misconception);
    }
  });

  it('prose chunks contain nothing that is not in the corpus', async () => {
    const ids = new Set(FULL_EVENTS.map((e) => e.id));
    for (const era of PROSE_ERAS) {
      const chunk = (await importProse(era)).default;
      for (const id of Object.keys(chunk)) {
        expect(ids.has(id), `stale prose entry ${id} in prose-${era} — run npm run build:corpus`).toBe(true);
      }
    }
  });
});
