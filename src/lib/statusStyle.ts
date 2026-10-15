// colours come only from the CSS variables in index.css, patterns from MapView's <defs>

import type { ControlStatus } from '../types';

export function statusFill(s: ControlStatus): string {
  switch (s) {
    case 'core':
      return 'var(--color-status-core)';
    case 'provincial':
      return 'var(--color-status-provincial)';
    case 'client':
      return 'var(--color-status-client)';
    case 'contested':
      return 'var(--color-status-contested)';
    case 'transient':
      return 'url(#pat-transient)';
    case 'breakaway':
      return 'url(#pat-breakaway)';
    case 'lost':
    case 'unshown':
      return 'var(--color-land)';
    case 'rival-carthage':
      return 'var(--color-rival-carthage)';
    case 'rival-hellenistic':
      return 'var(--color-rival-hellenistic)';
    case 'rival-parthia':
      return 'var(--color-rival-parthia)';
    case 'rival-celtic':
      return 'var(--color-rival-celtic)';
    case 'rival-germanic':
      return 'var(--color-rival-germanic)';
    case 'rival-steppe':
      return 'var(--color-rival-steppe)';
  }
}

export interface StrokeStyle {
  stroke: string;
  strokeWidth: number;
  strokeDasharray?: string;
}

export function statusStroke(s: ControlStatus): StrokeStyle {
  switch (s) {
    case 'contested':
      // dashed edge reads as "control in doubt this year"
      return { stroke: 'var(--color-status-core)', strokeWidth: 1, strokeDasharray: '3 2' };
    case 'lost':
      // former Roman territory keeps a ghost of the ramp as an ochre outline
      return { stroke: 'var(--color-status-lost-outline)', strokeWidth: 1, strokeDasharray: '4 3' };
    default:
      return { stroke: 'var(--color-sea)', strokeWidth: 0.6 };
  }
}
