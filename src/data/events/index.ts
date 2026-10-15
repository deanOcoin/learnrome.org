// the app reads the generated light index; prose is fetched per era by lib/prose.ts.
// authored era modules stay the source of truth, see ./full.ts (never import it from the app).

import type { RomeEvent } from '../../types';
import { LIGHT_EVENTS } from './generated/light.gen';
import type { LightEvent } from './full';

export type { LightEvent };

// cast is safe: nothing outside the panel touches prose fields, and the panel uses useProse()
export const EVENTS = LIGHT_EVENTS as unknown as RomeEvent[];

const byId = new Map(EVENTS.map((e, i) => [e.id, i]));

export function eventIndexById(id: string): number {
  return byId.get(id) ?? -1;
}
