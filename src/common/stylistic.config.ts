import type { OptionsOverrides, OptionsStylistic } from '@antfu/eslint-config';

import type { ESLintUserConfig } from '../index.js';

export const stylisticConfig: OptionsOverrides & OptionsStylistic['stylistic'] = {
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: true
};

export const stylisticUserConfig: ESLintUserConfig = {
  name: 'mkas3/formatter',
  rules: {
    'curly': 'off',

    'style/arrow-parens': ['error', 'always'],
    'style/brace-style': ['error', '1tbs'],
    'style/comma-dangle': ['error', 'never'],
    'style/jsx-quotes': ['error', 'prefer-single'],
    'style/quotes': ['error', 'single', { allowTemplateLiterals: true }],

    'style/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        multilineDetection: 'brackets',
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],

    'perfectionist/sort-array-includes': 'error',
    'perfectionist/sort-intersection-types': [
      'error',
      {
        groups: [
          'keyword',
          'literal',
          'named',
          ['tuple', 'union', 'intersection'],
          'object',
          'function',
          'operator',
          'conditional',
          'import',
          'nullish',
          'unknown'
        ],
        ignoreCase: true,
        order: 'asc',
        type: 'alphabetical'
      }
    ],

    'perfectionist/sort-jsx-props': [
      'error',
      {
        customGroups: {
          key: 'key',
          className: 'className',
          otherClassName: '.+ClassName',
          callback: 'on*',
          ref: 'ref'
        },
        groups: [
          'key',
          'ref',
          'className',
          'otherClassName',
          'unknown',
          'shorthand',
          'callback'
        ],
        ignoreCase: true,
        ignorePattern: [],
        order: 'asc',
        type: 'alphabetical'
      }
    ],
    'style/jsx-sort-props': 'off',

    // 'perfectionist/sort-object-types': [
    //   'error',
    //   {
    //     customGroups: {
    //       id: 'id',
    //       className: '*ClassName',
    //       boolean: 'is*',
    //       callback: 'on*'
    //     },
    //     groupKind: 'required-first',
    //     groups: ['id', 'boolean', 'className', 'unknown', 'callback'],
    //     ignoreCase: true,
    //     order: 'asc',
    //     partitionByNewLine: true,
    //     type: 'alphabetical'
    //   }
    // ],
    'perfectionist/sort-object-types': 'off',

    // 'perfectionist/sort-objects': [
    //   'error',
    //   {
    //     customGroups: {
    //       key: 'key',
    //       id: 'id',
    //       className: 'className',
    //       otherClassName: '*ClassName',
    //       callback: 'on*',
    //       children: 'children'
    //     },
    //     destructureOnly: false,
    //     groups: ['key', 'id', 'className', 'otherClassName', 'unknown', 'children', 'callback'],
    //     ignoreCase: true,
    //     ignorePattern: [],
    //     order: 'asc',
    //     partitionByComment: false,
    //     partitionByNewLine: true,
    //     styledComponents: true,
    //     type: 'alphabetical'
    //   }
    // ],
    'perfectionist/sort-objects': 'off',
    'sort-keys': 'off',

    'perfectionist/sort-union-types': [
      'error',
      {
        groups: [
          'keyword',
          'literal',
          'named',
          ['tuple', 'union', 'intersection'],
          'object',
          'function',
          'operator',
          'conditional',
          'import',
          'nullish',
          'unknown'
        ],
        ignoreCase: true,
        order: 'asc',
        type: 'alphabetical'
      }
    ]
  }
};
