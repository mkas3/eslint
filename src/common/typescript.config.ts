import type { OptionsTypescript } from '@antfu/eslint-config';

import type { ESLintUserConfig } from '../index.js';

export const typescriptConfig: OptionsTypescript = {
  tsconfigPath: 'tsconfig.json'
};

export const typescriptUserConfig: ESLintUserConfig = {
  files: ['**/*.?([cm])ts', '**/*.?([cm])tsx'],
  name: 'mkas3/typescript',
  rules: {
    'ts/adjacent-overload-signatures': 'off',
    'ts/consistent-type-definitions': ['error', 'type'],
    'ts/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],
    'ts/sort-type-constituents': 'off',
    'ts/strict-boolean-expressions': 'off'
  }
};