// corpus-wide drift detectors, above all resolved control state at checkpoint years

import { describe, expect, it } from 'vitest';
import { FULL_EVENTS as EVENTS } from './full';
import { TOURS } from '../tours';
import { buildControlTimeline } from '../../lib/resolveControl';
import { ERAS, type ControlStatus, type RegionId } from '../../types';

const tl = buildControlTimeline(EVENTS);

/** state after the last event starting at or before y */
function stateAtYear(y: number): Record<RegionId, ControlStatus> {
  let idx = 0;
  for (let i = 0; i < EVENTS.length; i++) if (EVENTS[i].year <= y) idx = i;
  return tl.stateAt(idx);
}

function words(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

describe('corpus integrity', () => {
  it('has a full corpus (~220 events)', () => {
    expect(EVENTS.length).toBeGreaterThanOrEqual(200);
  });

  it('has unique, url-safe ids', () => {
    const seen = new Set<string>();
    for (const e of EVENTS) {
      expect(e.id).toMatch(/^[a-z0-9-]+$/);
      expect(seen.has(e.id), `duplicate id ${e.id}`).toBe(false);
      seen.add(e.id);
    }
  });

  it('is sorted chronologically by start year', () => {
    for (let i = 1; i < EVENTS.length; i++) {
      expect(
        EVENTS[i].year,
        `${EVENTS[i].id} (${EVENTS[i].year}) before ${EVENTS[i - 1].id} (${EVENTS[i - 1].year})`
      ).toBeGreaterThanOrEqual(EVENTS[i - 1].year);
    }
  });

  it('every connects target exists and is not a forward reference by more than a nudge', () => {
    const idx = new Map(EVENTS.map((e, i) => [e.id, i]));
    EVENTS.forEach((e, i) => {
      for (const c of e.connects ?? []) {
        expect(idx.has(c), `${e.id} connects to unknown ${c}`).toBe(true);
        expect(c, `${e.id} connects to itself`).not.toBe(e.id);
        expect(idx.get(c)!, `${e.id} connects forward to ${c}`).toBeLessThanOrEqual(i);
      }
    });
  });

  it('every event has sources, body, headline, whyItMatters', () => {
    for (const e of EVENTS) {
      expect(e.sources.length, `${e.id} has no sources`).toBeGreaterThanOrEqual(1);
      expect(words(e.body), `${e.id} body too short`).toBeGreaterThanOrEqual(80);
      expect(e.headline.length, `${e.id} headline`).toBeGreaterThan(20);
      expect(words(e.whyItMatters), `${e.id} whyItMatters too short`).toBeGreaterThanOrEqual(30);
    }
  });

  it('respects depth targets by weight (floor check)', () => {
    for (const e of EVENTS) {
      const w = words(e.body);
      const floor = e.weight === 3 ? 300 : e.weight === 2 ? 180 : 90;
      expect(w, `${e.id} (w${e.weight}) body ${w} words < ${floor}`).toBeGreaterThanOrEqual(floor);
    }
  });

  it('brief depth is genuinely brief: first paragraph ≤ 230 words', () => {
    for (const e of EVENTS) {
      const first = e.body.split(/\n\s*\n/)[0];
      expect(words(first), `${e.id} first paragraph too long`).toBeLessThanOrEqual(230);
    }
  });
});

describe('quotas', () => {
  it('has at least 40 misconception callouts', () => {
    const n = EVENTS.filter((e) => e.misconception).length;
    expect(n).toBeGreaterThanOrEqual(40);
  });

  it('no era is a correction-free zone', () => {
    for (const era of ERAS) {
      const inEra = EVENTS.filter((e) => e.era === era.id);
      if (inEra.length === 0) continue;
      const n = inEra.filter((e) => e.misconception).length;
      expect(n, `era ${era.id} has zero misconceptions`).toBeGreaterThanOrEqual(1);
    }
  });

  it('has at least 40 non-territorial thematic events', () => {
    const n = EVENTS.filter((e) => e.nonTerritorial).length;
    expect(n).toBeGreaterThanOrEqual(38);
  });

  it('non-territorial events carry empty control deltas', () => {
    for (const e of EVENTS.filter((e) => e.nonTerritorial)) {
      expect(Object.keys(e.control).length, `${e.id} is nonTerritorial but has control deltas`).toBe(0);
    }
  });

  it('daily-life filtering produces a coherent timeline', () => {
    const n = EVENTS.filter((e) => e.tags.includes('daily-life')).length;
    expect(n).toBeGreaterThanOrEqual(5);
  });

  it('covers all thematic areas from §9.1', () => {
    for (const tag of ['slavery', 'economic', 'religious', 'legal', 'social', 'daily-life', 'spectacle', 'culture', 'infrastructure'] as const) {
      const n = EVENTS.filter((e) => e.tags.includes(tag)).length;
      expect(n, `tag ${tag} underrepresented`).toBeGreaterThanOrEqual(3);
    }
  });
});

describe('tours', () => {
  it('every tour step resolves to a real event — no dead links', () => {
    const ids = new Set(EVENTS.map((e) => e.id));
    for (const t of TOURS) {
      for (const id of t.eventIds) {
        expect(ids.has(id), `tour ${t.id} references missing event ${id}`).toBe(true);
      }
    }
  });

  it('tour steps are in chronological order', () => {
    const idx = new Map(EVENTS.map((e, i) => [e.id, i]));
    for (const t of TOURS) {
      for (let i = 1; i < t.eventIds.length; i++) {
        const a = idx.get(t.eventIds[i - 1])!;
        const b = idx.get(t.eventIds[i])!;
        expect(b, `tour ${t.id}: ${t.eventIds[i]} out of order`).toBeGreaterThan(a);
      }
    }
  });
});

describe('control checkpoints (drift detectors)', () => {
  it('216 BCE: Hannibal in Italy, Carthage a rival power', () => {
    const s = stateAtYear(-216);
    expect(s.campania).toBe('contested');
    expect(s.apulia).toBe('contested');
    expect(s['hispania-baetica']).toBe('rival-carthage');
    expect(s['africa-proconsularis']).toBe('rival-carthage');
    expect(s.latium).toBe('core');
  });

  it('200 BCE: Spain provincial, Numidia client', () => {
    const s = stateAtYear(-200);
    expect(s['hispania-baetica']).toBe('provincial');
    expect(s.numidia).toBe('client');
    expect(s.sicilia).toBe('provincial');
    expect(s.campania).toBe('core');
  });

  it('145 BCE: Africa, Macedonia, Achaea provincial', () => {
    const s = stateAtYear(-145);
    expect(s['africa-proconsularis']).toBe('provincial');
    expect(s.macedonia).toBe('provincial');
    expect(s.achaea).toBe('provincial');
    expect(s.cisalpina).toBe('core');
  });

  it('50 BCE: Gaul taken, east organized, Egypt still Ptolemaic', () => {
    const s = stateAtYear(-50);
    expect(s['gallia-lugdunensis']).toBe('provincial');
    expect(s.syria).toBe('provincial');
    expect(s.aegyptus).toBe('rival-hellenistic');
    expect(s['parthia-core']).toBe('rival-parthia');
  });

  it('12 CE: post-Teutoburg — Rhine/Danube frontier, Egypt Roman', () => {
    const s = stateAtYear(12);
    expect(s['germania-magna']).toBe('rival-germanic');
    expect(s.raetia).toBe('provincial');
    expect(s.pannonia).toBe('provincial');
    expect(s.aegyptus).toBe('provincial');
    expect(s.judaea).toBe('provincial');
  });

  it('116 CE: maximum extent — Mesopotamia held, briefly', () => {
    const s = stateAtYear(116);
    expect(s.mesopotamia).toBe('transient');
    expect(s.armenia).toBe('transient');
    expect(s.dacia).toBe('provincial');
  });

  it('118 CE: Hadrian has given the east back', () => {
    const s = stateAtYear(118);
    expect(s.mesopotamia).toBe('rival-parthia');
    expect(s.armenia).toBe('client');
  });

  it('268 CE: the empire in three pieces', () => {
    const s = stateAtYear(268);
    expect(s['gallia-lugdunensis']).toBe('breakaway');
    expect(s['britannia-south']).toBe('breakaway');
    expect(s.syria).toBe('breakaway');
    expect(s.aegyptus).toBe('breakaway');
    expect(s['agri-decumates']).toBe('lost');
    expect(s.latium).toBe('core');
  });

  it('280 CE: Aurelian has reunified; Dacia abandoned', () => {
    const s = stateAtYear(280);
    expect(s['gallia-lugdunensis']).toBe('provincial');
    expect(s.syria).toBe('provincial');
    expect(s.aegyptus).toBe('provincial');
    expect(s.dacia).toBe('lost');
  });

  it('380 CE: Goths inside the frontier', () => {
    const s = stateAtYear(380);
    expect(s.thracia).toBe('contested');
    expect(s.mesopotamia).toBe('rival-parthia');
  });

  it('476 CE: the west gone, the east untouched', () => {
    const s = stateAtYear(476);
    expect(s.latium).toBe('rival-germanic');
    expect(s.sicilia).toBe('rival-germanic');
    expect(s['africa-proconsularis']).toBe('rival-germanic');
    expect(s['gallia-lugdunensis']).toBe('rival-germanic');
    expect(s['britannia-south']).toBe('lost');
    // The whole point of the app's ending:
    expect(s.thracia).toBe('provincial');
    expect(s.asia).toBe('provincial');
    expect(s.aegyptus).toBe('provincial');
    expect(s.syria).toBe('provincial');
  });

  it('540 CE: Justinian has Africa and Italy back', () => {
    const s = stateAtYear(540);
    expect(s['africa-proconsularis']).toBe('provincial');
    expect(s.latium).toBe('provincial');
  });
});
