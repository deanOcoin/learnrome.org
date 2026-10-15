// keyed by event id, merged into the corpus at load time so era files stay verbatim

import type { Movement } from '../types';

export const MOVEMENTS: Record<string, Movement[]> = {
  'gallic-sack-390bce': [
    {
      label: 'Brennus to Rome',
      kind: 'march',
      path: [
        [11.0, 44.8],
        [11.9, 43.9],
        [12.5, 42.4],
        [12.5, 42.0],
        [12.48, 41.89],
      ],
    },
  ],
  'hannibal-alps-218bce': [
    {
      label: "Hannibal's march, 218 BCE",
      kind: 'march',
      path: [
        [-0.98, 37.6],
        [0.5, 40.6],
        [2.6, 42.4],
        [4.64, 43.68],
        [4.9, 44.9],
        [6.3, 45.2],
        [7.1, 45.2],
        [7.7, 45.07],
        [9.6, 45.05],
      ],
    },
  ],
  'rubicon-49bce': [
    {
      label: 'Legio XIII crosses',
      kind: 'march',
      path: [
        [12.2, 44.42],
        [12.4, 44.09],
        [12.57, 44.06],
      ],
    },
  ],
  'adrianople-378ce': [
    {
      label: 'The Goths, 376–378',
      kind: 'migration',
      path: [
        [26.0, 45.4],
        [26.3, 43.6],
        [26.4, 42.6],
        [26.56, 41.67],
      ],
    },
  ],
  'rhine-crossing-406ce': [
    {
      label: 'Vandals, Alans, Sueves',
      kind: 'migration',
      path: [
        [9.6, 50.5],
        [8.27, 50.0],
        [6.64, 49.75],
        [4.03, 49.26],
        [2.2, 48.5],
      ],
    },
  ],
  'alaric-sack-410ce': [
    {
      label: 'Alaric to Rome',
      kind: 'march',
      path: [
        [14.5, 46.05],
        [13.37, 45.77],
        [12.57, 44.06],
        [12.9, 43.0],
        [12.48, 41.89],
      ],
    },
  ],
  'vandals-africa-429ce': [
    {
      label: 'The Vandals to Africa, 429–439',
      kind: 'migration',
      path: [
        [-5.9, 37.0],
        [-5.5, 36.0],
        [-5.8, 35.78],
        [-2.0, 35.4],
        [3.0, 36.6],
        [7.75, 36.9],
        [10.32, 36.85],
      ],
    },
  ],
  'justinian-527ce': [
    {
      label: "Belisarius to Carthage, 533",
      kind: 'sea',
      path: [
        [28.98, 41.01],
        [24.5, 37.0],
        [15.29, 37.06],
        [10.32, 36.85],
      ],
    },
  ],
};
