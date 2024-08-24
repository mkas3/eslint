import { ESLint } from 'eslint';
// @ts-expect-error has no type
import baseReact from 'eslint-plugin-react';

import Plugin = ESLint.Plugin;

export const reactBasePlugin = baseReact as Plugin;
