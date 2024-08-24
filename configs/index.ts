import type { ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config';
import type { Linter } from 'eslint';
import type { Awaitable, FlatConfigComposer } from 'eslint-flat-config-utils';

import type { NextConfig } from './next/next.type.js';
import type { TailwindConfig } from './tailwind/tailwind.type.js';

import { antfu } from '@antfu/eslint-config';
import { fixupPluginRules } from '@eslint/compat';
import { ESLint } from 'eslint';
// @ts-expect-error has no type
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { antfuUserConfig } from './common/antfu.config.js';
import { exportsUserConfig } from './common/exports.config.js';
import { importsUserConfig } from './common/imports.config.js';
import { reactUserConfig } from './common/react.config.js';
import { stylisticConfig, stylisticUserConfig } from './common/stylistic.config.js';
import { typescriptUserConfig } from './common/typescript.config.js';
import { jsxA11yUserConfig } from './jsx-a11y/jsx-a11y.config.js';
import { getNextConfig, nextConfig } from './next/next.config.js';
import { getTailwindConfig, tailwindConfig } from './tailwind/tailwind.config.js';

import Plugin = ESLint.Plugin;

export type EslintUserConfig = Awaitable<(
  | FlatConfigComposer<any, any>
  | Linter.Config[]
  | TypedFlatConfigItem
  | TypedFlatConfigItem[]
)>;

export type EslintConfig =
  (
    options: OptionsConfig & TypedFlatConfigItem & {
      exports?: boolean;
      imports?: boolean;
      jsxA11y?: boolean;
      next?: boolean | NextConfig;
      tailwind?: boolean | TailwindConfig;
    },
    ...configs: EslintUserConfig[]
  ) => FlatConfigComposer<TypedFlatConfigItem, ConfigNames>;

export const eslint: EslintConfig = ({
  exports = true,
  imports = true,
  jsxA11y = true,
  lessOpinionated = true,
  next = false,
  stylistic = true,
  tailwind = false,
  ...options
// eslint-disable-next-line ts/promise-function-async
}, ...configs) => {
  if (imports) {
    configs.unshift(importsUserConfig);
  }

  if (exports) {
    configs.unshift(exportsUserConfig);
  }

  if (jsxA11y) {
    configs.unshift(jsxA11yUserConfig);
  }

  if (typeof next !== 'object') {
    if (next) {
      configs.unshift(getNextConfig(nextConfig));
    }
  } else {
    configs.unshift(getNextConfig(next));
  }

  if (typeof tailwind !== 'object') {
    if (tailwind) {
      configs.unshift(getTailwindConfig(tailwindConfig));
    }
  } else {
    configs.unshift(getTailwindConfig(tailwind));
  }

  if (stylistic) {
    configs.unshift(stylisticUserConfig);
  }

  if (options.react) {
    configs.unshift(reactUserConfig);
  }

  if (options.typescript) {
    configs.unshift(typescriptUserConfig);
  }

  return antfu({
    ...options,
    lessOpinionated,
    stylistic: typeof stylistic !== 'object' ? (stylistic ? stylisticConfig : false) : stylistic
  }, antfuUserConfig, ...configs)
    .override('antfu/react/setup', (config) => ({
      ...config,
      plugins: {
        ...config.plugins,
        'react-hooks': fixupPluginRules(reactHooksPlugin as Plugin)
      }
    }));
};
