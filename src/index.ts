import type { NextConfig } from './next/next.type.js';

import type { ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config';
import type { Linter } from 'eslint';
import type { Awaitable, FlatConfigComposer } from 'eslint-flat-config-utils';

import type { TailwindConfig } from './tailwind/tailwind.type.js';

import { reactUserConfig } from './common/react.config.js';
import { reactCompilerUserConfig } from './react-compiler/react-compiler.config.js';
// @ts-expect-error has no type
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { getNextConfig, nextConfig } from './next/next.config.js';

import { antfu } from '@antfu/eslint-config';

import { antfuUserConfig } from './common/antfu.config.js';
import { commonUserConfig } from './common/common.config.js';
import { exportsUserConfig } from './common/exports.config.js';
import { importsUserConfig } from './common/imports.config.js';
import { stylisticConfig, stylisticUserConfig } from './common/stylistic.config.js';
import { typescriptConfig, typescriptUserConfig } from './common/typescript.config.js';
import { jsxA11yUserConfig } from './jsx-a11y/jsx-a11y.config.js';
import { getTailwindConfig, tailwindConfig } from './tailwind/tailwind.config.js';

export type ESLintUserConfig = Awaitable<(
  | FlatConfigComposer<any, any>
  | Linter.Config[]
  | TypedFlatConfigItem
  | TypedFlatConfigItem[]
)>;

export type ESLintConfig =
  (
    options: OptionsConfig & TypedFlatConfigItem & {
      exports?: boolean;
      imports?: boolean;
      jsxA11y?: boolean;
      next?: boolean | NextConfig;
      tailwind?: boolean | TailwindConfig;
      reactCompiler?: boolean;
    },
    ...configs: ESLintUserConfig[]
  ) => FlatConfigComposer<TypedFlatConfigItem, ConfigNames>;

export const eslint: ESLintConfig = ({
  exports = true,
  imports = true,
  jsonc = true,
  jsxA11y = true,
  lessOpinionated = true,
  next = true,
  react = true,
  stylistic = true,
  tailwind = true,
  reactCompiler = true,
  typescript = true,
  ...options
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

  if (react) {
    configs.unshift(reactUserConfig);
  }

  if (typescript) {
    configs.unshift(typescriptUserConfig);
  }

  if (reactCompiler) {
    configs.unshift(reactCompilerUserConfig);
  }

  configs.unshift(commonUserConfig);

  let result = antfu({
    ...options,
    jsonc,
    react,
    typescript: typeof typescript !== 'object' ? (typescript ? typescriptConfig : false) : typescript,
    lessOpinionated,
    stylistic: typeof stylistic !== 'object' ? (stylistic ? stylisticConfig : false) : stylistic
  }, antfuUserConfig, ...configs);

  if (react) {
    result = result.override('antfu/react/setup', (config) => ({
      ...config,
      plugins: {
        ...config.plugins,
        'react-hooks': reactHooksPlugin
      }
    }));
  }

  return result;
};
