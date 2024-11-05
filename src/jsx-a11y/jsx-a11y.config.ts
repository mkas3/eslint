import type { ESLint } from 'eslint';

import type { ESLintUserConfig } from '../index.js';

// @ts-expect-error has no types
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

export const jsxA11yUserConfig: ESLintUserConfig = {
  name: 'mkas3/jsx-a11y',
  plugins: {
    'jsx-a11y': pluginJsxA11y as ESLint.Plugin
  },
  rules: pluginJsxA11y.flatConfigs.recommended.rules
};
