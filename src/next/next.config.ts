import type { OptionsOverrides } from '@antfu/eslint-config';
import type { ESLint } from 'eslint';

import type { ESLintUserConfig } from '../index.js';

import type { NextConfig } from './next.type.js';

// @ts-expect-error has no type
import nextPlugin from '@next/eslint-plugin-next';

export const nextConfig: OptionsOverrides = {
  overrides: {
    // eslint-disable-next-line ts/no-unsafe-argument, ts/no-unsafe-member-access
    ...Object.entries({ ...nextPlugin.configs.recommended.rules, ...nextPlugin.configs['core-web-vitals'].rules }).reduce(
      (acc, [key, value]) => {
        // @ts-expect-error has value
        acc[key.replace('@next/next', 'next')] = value;
        return acc;
      },
      {}
    )
  }
};

export const getNextConfig = (config: NextConfig): ESLintUserConfig => ({
  files: ['**/*.?([cm])[jt]s?(x)'],
  name: 'mkas3/next',
  plugins: {
    next: nextPlugin as ESLint.Plugin
  },

  ...(config.settings ? { settings: { next: config.settings } } : undefined),

  rules: {
    ...config.overrides
  }
});
