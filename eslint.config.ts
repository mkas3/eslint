import { antfu } from '@antfu/eslint-config';

import { antfuUserConfig } from './src/common/antfu.config.js';
import { commonUserConfig } from './src/common/common.config.js';
import { exportsUserConfig } from './src/common/exports.config.js';
import { importsUserConfig } from './src/common/imports.config.js';
import { stylisticConfig, stylisticUserConfig } from './src/common/stylistic.config.js';
import { typescriptConfig, typescriptUserConfig } from './src/common/typescript.config.js';
import { getNextConfig, nextConfig } from './src/next/next.config.js';
import { reactCompilerUserConfig } from './src/react-compiler/react-compiler.config.js';
import { getTailwindConfig, tailwindConfig } from './src/tailwind/tailwind.config.js';

export default antfu(
  {
    ignores: [],
    stylistic: stylisticConfig,
    type: 'lib',
    typescript: typescriptConfig
  },
  importsUserConfig,
  exportsUserConfig,
  stylisticUserConfig,
  typescriptUserConfig,
  getNextConfig(nextConfig),
  getTailwindConfig(tailwindConfig),
  commonUserConfig,
  reactCompilerUserConfig,
  antfuUserConfig
);
