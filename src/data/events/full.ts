// whole authored corpus with prose. source of truth for codegen and validators only:
// importing this from the app drags 640 KB of prose into the first-paint bundle.

import type { RomeEvent } from '../../types';
import { REGAL_EVENTS } from './regal';
import { EARLY_REPUBLIC_EVENTS } from './early-republic';
import { MIDDLE_REPUBLIC_EVENTS } from './middle-republic';
import { LATE_REPUBLIC_A_EVENTS } from './late-republic-a';
import { LATE_REPUBLIC_B_EVENTS } from './late-republic-b';
import { TRIUMVIRAL_EVENTS } from './triumviral';
import { PRINCIPATE_A_EVENTS } from './principate-a';
import { PRINCIPATE_B_EVENTS } from './principate-b';
import { HIGH_EMPIRE_EVENTS } from './high-empire';
import { CRISIS_EVENTS } from './crisis';
import { DOMINATE_A_EVENTS } from './dominate-a';
import { DOMINATE_B_EVENTS } from './dominate-b';
import { COLLAPSE_EPILOGUE_EVENTS } from './collapse-epilogue';
import { MOVEMENTS } from '../movements';

// thematic events with empty control deltas, so the panel says "map unchanged"
// rather than implying an authoring gap. kept here so era files stay verbatim.
const NON_TERRITORIAL_EXTRA = new Set([
  'latifundia-crisis-180bce',
  'commentarii-56bce',
  'calendar-46bce',
  'debasement-215ce',
  'walls-cities-250ce',
  'dominus-court-290ce',
  'solidus-312ce',
]);

const raw: RomeEvent[] = [
  ...REGAL_EVENTS,
  ...EARLY_REPUBLIC_EVENTS,
  ...MIDDLE_REPUBLIC_EVENTS,
  ...LATE_REPUBLIC_A_EVENTS,
  ...LATE_REPUBLIC_B_EVENTS,
  ...TRIUMVIRAL_EVENTS,
  ...PRINCIPATE_A_EVENTS,
  ...PRINCIPATE_B_EVENTS,
  ...HIGH_EMPIRE_EVENTS,
  ...CRISIS_EVENTS,
  ...DOMINATE_A_EVENTS,
  ...DOMINATE_B_EVENTS,
  ...COLLAPSE_EPILOGUE_EVENTS,
];

// stable sort, same-year events keep authored order
export const FULL_EVENTS: RomeEvent[] = raw
  .map((e) => ({
    ...e,
    ...(NON_TERRITORIAL_EXTRA.has(e.id) && Object.keys(e.control).length === 0
      ? { nonTerritorial: true as const }
      : {}),
    ...(MOVEMENTS[e.id] ? { movements: MOVEMENTS[e.id] } : {}),
  }))
  .sort((a, b) => a.year - b.year);

const ids = new Set<string>();
for (const e of FULL_EVENTS) {
  if (ids.has(e.id)) throw new Error(`Duplicate event id: ${e.id}`);
  ids.add(e.id);
}

/** fields the map, timeline and control fold never need */
export const PROSE_KEYS = ['body', 'whyItMatters', 'sources', 'misconception'] as const;
export type ProseKey = (typeof PROSE_KEYS)[number];
export type Prose = Pick<RomeEvent, 'body' | 'whyItMatters' | 'sources'> &
  Partial<Pick<RomeEvent, 'misconception'>>;
export type LightEvent = Omit<RomeEvent, ProseKey>;
