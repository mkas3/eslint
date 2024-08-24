import type { ESLintUserConfig } from '../index.js';

export const reactUserConfig: ESLintUserConfig = {
  files: ['**/*.?([cm])[jt]s?(x)'],
  name: 'mkas3/react',
  rules: {
    'react/no-class-component': 'error',
    'react/no-default-props': 'error',
    'react/no-missing-component-display-name': 'warn',
    'react/no-prop-types': 'error',

    'react-hooks-extra/ensure-custom-hooks-using-other-hooks': 'warn',
    'react-hooks-extra/ensure-use-callback-has-non-empty-deps': 'warn',
    'react-hooks-extra/ensure-use-memo-has-non-empty-deps': 'warn',
    'react-hooks-extra/no-direct-set-state-in-use-effect': 'warn',
    'react-hooks-extra/no-direct-set-state-in-use-layout-effect': 'warn',
    'react-hooks-extra/prefer-use-state-lazy-initialization': 'warn',

    'react-naming-convention/component-name': ['warn', 'PascalCase'],
    'react-naming-convention/filename': ['warn', 'kebab-case'],
    'react-naming-convention/use-state': 'warn'
  }
};
