import type { ESLintUserConfig } from '../index.js';

export const exportsUserConfig: ESLintUserConfig = {
  name: 'mkas3/exports',
  rules: {
    'perfectionist/sort-exports': [
      'error',
      { ignoreCase: true, order: 'asc', type: 'alphabetical' }
    ],

    'perfectionist/sort-named-exports': [
      'error',
      {
        groupKind: 'types-first',
        ignoreCase: true,
        order: 'asc',
        type: 'alphabetical'
      }
    ]
  }
};
