import type { ESLintUserConfig } from '../index.js';

import type { TailwindConfig } from './tailwind.type.js';

import tailwind from 'eslint-plugin-tailwindcss';

export const tailwindConfig: TailwindConfig = {
  overrides: {
    'tailwind/classnames-order': 'warn',
    'tailwind/enforces-negative-arbitrary-values': 'warn',
    'tailwind/enforces-shorthand': 'warn',
    'tailwind/migration-from-tailwind-2': 'warn',
    'tailwind/no-arbitrary-value': 'warn',
    'tailwind/no-contradicting-classname': 'error',
    'tailwind/no-custom-classname': 'warn',
    'tailwind/no-unnecessary-arbitrary-value': 'warn'
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
    tailwind: tailwind.configs['flat/recommended'][0].plugins?.tailwindcss
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
