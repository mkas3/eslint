import type { OptionsOverrides } from '@antfu/eslint-config';

import type { EslintUserConfig } from '../index.js';

import type { NextConfig } from './next.type.js';

import { fixupConfigRules } from '@eslint/compat';
// @ts-expect-error has no type
import nextPlugin from '@next/eslint-plugin-next';
import { ESLint } from 'eslint';

import Plugin = ESLint.Plugin;

export const nextConfig: OptionsOverrides = {
  overrides: {
    // eslint-disable-next-line ts/no-unsafe-member-access,ts/no-unsafe-argument
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

export const getNextConfig = (config: NextConfig): EslintUserConfig => (fixupConfigRules({
  files: ['**/*.?([cm])[jt]s?(x)'],
  name: 'mkas3/next',
  plugins: {
    next: nextPlugin as Plugin
  },
  ...(config.settings ? { settings: { next: config.settings } } : undefined),

  rules: {
    ...config.overrides
  }
}));
