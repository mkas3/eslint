import type { EslintUserConfig } from '../index.js';

import { ESLint } from 'eslint';
// @ts-expect-error has no types
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

import Plugin = ESLint.Plugin;

export const jsxA11yUserConfig: EslintUserConfig = {
  name: 'mkas3/jsx-a11y',
  plugins: {
    'jsx-a11y': pluginJsxA11y as Plugin
  },
  // eslint-disable-next-line ts/no-unsafe-member-access,ts/no-unsafe-assignment
  rules: pluginJsxA11y.flatConfigs.recommended.rules
};
