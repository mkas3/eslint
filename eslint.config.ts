import { antfu } from '@antfu/eslint-config';

import { antfuUserConfig } from './configs/common/antfu.config.js';
import { exportsUserConfig } from './configs/common/exports.config.js';
import { importsUserConfig } from './configs/common/imports.config.js';
import { stylisticConfig, stylisticUserConfig } from './configs/common/stylistic.config.js';
import { typescriptConfig, typescriptUserConfig } from './configs/common/typescript.config.js';
import { getNextConfig, nextConfig } from './configs/next/next.config.js';
import { getTailwindConfig, tailwindConfig } from './configs/tailwind/tailwind.config.js';

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
  antfuUserConfig
);
