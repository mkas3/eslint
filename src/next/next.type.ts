import type { TypedFlatConfigItem } from '@antfu/eslint-config';
import type { Linter } from 'eslint';

export type NextRules = {
  'next/google-font-display': Linter.RuleEntry;
  'next/google-font-preconnect': Linter.RuleEntry;
  'next/inline-script-id': Linter.RuleEntry;
  'next/next-script-for-ga': Linter.RuleEntry;
  'next/no-assign-module-variable': Linter.RuleEntry;
  'next/no-async-client-component': Linter.RuleEntry;
  'next/no-before-interactive-script-outside-document': Linter.RuleEntry;
  'next/no-css-tags': Linter.RuleEntry;
  'next/no-document-import-in-page': Linter.RuleEntry;
  'next/no-duplicate-head': Linter.RuleEntry;
  'next/no-head-element': Linter.RuleEntry;
  'next/no-head-import-in-document': Linter.RuleEntry;
  'next/no-html-link-for-pages': Linter.RuleEntry;
  'next/no-img-element': Linter.RuleEntry;
  'next/no-page-custom-font': Linter.RuleEntry;
  'next/no-script-component-in-head': Linter.RuleEntry;
  'next/no-styled-jsx-in-document': Linter.RuleEntry;
  'next/no-sync-scripts': Linter.RuleEntry;
  'next/no-title-in-document-head': Linter.RuleEntry;
  'next/no-typos': Linter.RuleEntry;
  'next/no-unwanted-polyfillio': Linter.RuleEntry;
};

export type NextSettings = {
  rootDir?: string;
};

export type NextConfig = {
  overrides?: Partial<NextRules> & TypedFlatConfigItem['rules'];
  settings?: Partial<NextSettings>;
};
