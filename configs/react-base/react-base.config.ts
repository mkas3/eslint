import type { EslintUserConfig } from '../index.js';

import type { ReactBaseConfig } from './react-base.type.js';

import { reactBasePlugin } from './react-base.plugin.js';

export const reactBaseConfig: ReactBaseConfig = {
  overrides: {
    'react-base/boolean-prop-naming': 'off',
    'react-base/button-has-type': 'warn',
    'react-base/destructuring-assignment': 'warn',
    'react-base/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: 'arrow-function'
      }
    ],
    'react-base/hook-use-state': 'warn',
    'react-base/jsx-curly-brace-presence': [
      'warn',
      {
        propElementValues: 'always',
        props: 'never',
        children: 'never'
      }
    ],
    'react-base/jsx-filename-extension': [
      'warn',
      {
        allow: 'as-needed',
        ignoreFilesWithoutCode: true
      }
    ],
    'react-base/jsx-handler-names': [
      'warn',
      {
        eventHandlerPrefix: 'on',
        eventHandlerPropPrefix: 'on'
      }
    ],
    'react-base/jsx-indent': 'off',
    'react-base/jsx-newline': 'off',
    'react-base/jsx-no-constructed-context-values': 'warn',
    'react-base/jsx-no-leaked-render': ['warn', { validStrategies: ['ternary', 'coerce'] }],
    'react-base/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react-base/jsx-props-no-spreading': 'off',
    'react-base/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        multiline: 'first',
        reservedFirst: ['key', 'ref'],
        shorthandLast: true
      }
    ],
    'react-base/no-array-index-key': 'warn',
    'react-base/no-danger': 'warn',
    'react-base/no-object-type-as-default-prop': 'warn',
    'react-base/no-unknown-property': 'off',
    'react-base/no-unstable-nested-components': [
      'warn',
      {
        allowAsProps: true
      }
    ],
    'react-base/no-unused-prop-types': 'warn',
    'react-base/prop-types': 'off',
    'react-base/react-in-jsx-scope': 'off',
    'react-base/require-default-props': 'off',
    'react-base/style-prop-object': 'warn',
    'react-base/void-dom-elements-no-children': 'warn'
  }
};

export const getReactBaseConfig = (config: ReactBaseConfig): EslintUserConfig => (({
  files: ['**/*.?([cm])[jt]s?(x)'],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  name: 'mkas3/react-base',
  plugins: {
    'react-base': reactBasePlugin
  },

  rules: {
    ...config.overrides
  }
}));
