import type { ESLint } from 'eslint';

import type { ESLintUserConfig } from '../index.js';

// @ts-expect-error has no types
import * as pluginReactCompiler from 'eslint-plugin-react-compiler';

export const reactCompilerUserConfig: ESLintUserConfig = {
  name: 'mkas3/react-compiler',
  plugins: {
    'react-compiler': pluginReactCompiler as ESLint.Plugin
  },

  rules: { 'react-compiler/react-compiler': 'error' }
};
