import type { ESLintUserConfig } from '../index.js';

export const antfuUserConfig: ESLintUserConfig = {
  name: 'mkas3/rewrite',
  rules: {
    'antfu/consistent-list-newline': 'error',
    'object-curly-newline': 'off',

    'antfu/import-dedupe': 'error',
    'antfu/indent-unindent': 'error',
    'antfu/top-level-function': 'off'
  }
};
