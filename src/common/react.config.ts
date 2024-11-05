import type { ESLintUserConfig } from '../index.js';

export const reactUserConfig: ESLintUserConfig = {
  files: ['**/*.?([cm])[jt]s?(x)'],
  name: 'mkas3/react',
  rules: {
    'react/no-class-component': 'error',
    'react/no-default-props': 'error',
    'react/no-missing-component-display-name': 'warn',
    'react/no-prop-types': 'error',

    'react-hooks-extra/no-direct-set-state-in-use-effect': 'warn',
    'react-hooks-extra/no-redundant-custom-hook': 'warn',
    'react-hooks-extra/no-unnecessary-use-callback': 'warn',
    'react-hooks-extra/no-unnecessary-use-memo': 'warn',
    'react-hooks-extra/prefer-use-state-lazy-initialization': 'warn',

    'react-naming-convention/component-name': ['warn', 'PascalCase'],
    'react-naming-convention/filename': ['warn', 'kebab-case'],
    'react-naming-convention/use-state': 'warn',

    'react-refresh/only-export-components': 'off'
  }
};
