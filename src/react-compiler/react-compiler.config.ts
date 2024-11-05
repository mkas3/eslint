import type { ESLint } from 'eslint';

import type { ESLintUserConfig } from '../index.js';

// @ts-expect-error has no types
import pluginReactCompiler from 'eslint-plugin-react-compiler';

export const reactCompilerUserConfig: ESLintUserConfig = {
  name: 'mkas3/react-compiler',
  plugins: {
    'react-compiler': pluginReactCompiler as ESLint.Plugin
  },
  // eslint-disable-next-line ts/no-unsafe-member-access,ts/no-unsafe-assignment
  rules: { 'react-compiler/react-compiler': 'error' }
};
