import type { ESLint } from 'eslint';

import tailwindReadable from 'eslint-plugin-readable-tailwind';
// @ts-expect-error has no types
import tailwind from 'eslint-plugin-tailwindcss';

// eslint-disable-next-line ts/no-unsafe-member-access
export const tailwindPlugin = tailwind.configs['flat/recommended'][0].plugins.tailwindcss as ESLint.Plugin;

export const tailwindReadablePlugin = tailwindReadable as ESLint.Plugin;
