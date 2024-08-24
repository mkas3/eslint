import type { EslintUserConfig } from '../index.js';

export const exportsUserConfig: EslintUserConfig = {
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
