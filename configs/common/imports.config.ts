import type { EslintUserConfig } from '../index.js';

export const importsUserConfig: EslintUserConfig = {
  name: 'mkas3/imports',
  rules: {
    'import/order': 'off',
    'sort-imports': 'off',

    'perfectionist/sort-imports': [
      'error',
      {
        customGroups: {
          type: {
            'next-type': ['next', 'next-*', 'next/*'],
            'react-type': ['react', 'react-*', 'react/*']
          },
          value: {
            'alias-app': ['@/app/*'],
            'alias-components': ['@/components/*'],
            'alias-lib': ['@/lib/*', '@/utils/*'],
            'next': ['next', 'next-*', 'next/*'],
            'react': ['react', 'react-*', 'react/*']
          }
        },
        groups: [
          'react-type',
          'next-type',
          'type',
          'internal-type',
          'parent-type',
          'sibling-type',
          'index-type',
          'react',
          'next',
          'builtin',
          'external',
          'alias-app',
          'alias-components',
          'alias-lib',
          'internal',
          'parent',
          'sibling',
          'index',
          'side-effect',
          'side-effect-style',
          'style',
          'object',
          'unknown'
        ],
        ignoreCase: true,
        internalPattern: ['~/**'],
        maxLineLength: undefined,
        newlinesBetween: 'always',
        order: 'asc',
        type: 'alphabetical'
      }
    ],

    'perfectionist/sort-named-imports': [
      'error',
      {
        groupKind: 'types-first',
        ignoreAlias: false,
        ignoreCase: true,
        order: 'asc',
        type: 'alphabetical'
      }
    ]
  }
};
