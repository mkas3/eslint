import type { ESLintUserConfig } from '../index.js';

import type { TailwindConfig } from './tailwind.type.js';

import { tailwindPlugin, tailwindReadablePlugin } from './tailwind.plugin.js';

export const tailwindConfig: TailwindConfig = {
  overrides: {
    'tailwind/classnames-order': 'off',
    'tailwind/enforces-negative-arbitrary-values': 'warn',
    'tailwind/enforces-shorthand': 'warn',
    'tailwind/migration-from-tailwind-2': 'warn',
    'tailwind/no-arbitrary-value': 'off',
    'tailwind/no-contradicting-classname': 'error',
    'tailwind/no-custom-classname': 'warn',
    'tailwind/no-unnecessary-arbitrary-value': 'warn',

    'tailwind-readable/multiline': ['warn', { classesPerLine: 0, group: 'newLine', lineBreakStyle: 'windows', printWidth: 120 }],
    'tailwind-readable/no-duplicate-classes': 'warn',
    'tailwind-readable/no-unnecessary-whitespace': 'warn',
    'tailwind-readable/sort-classes': 'warn'
  },
  settings: {
    callees: ['classnames', 'clsx', 'cn'],
    classRegex: '^[^\s]*[cC]lass(Name)?$',
    removeDuplicates: true,
    skipClassAttribute: false
  }
};

export const getTailwindConfig = (config: TailwindConfig): ESLintUserConfig => ({
  files: ['**/*.?([cm])[jt]s?(x)'],
  name: 'mkas3/tailwind',
  plugins: {
    'tailwind': tailwindPlugin,
    'tailwind-readable': tailwindReadablePlugin
  },
  rules: config.overrides,
  ...(config.settings ? { settings: { tailwind: config.settings } } : undefined),

  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  }
});
