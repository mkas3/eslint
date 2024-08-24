import type { TypedFlatConfigItem } from '@antfu/eslint-config';

import { Linter } from 'eslint';

import RuleEntry = Linter.RuleEntry;

export type NextRules = {
  'next/google-font-display': RuleEntry;
  'next/google-font-preconnect': RuleEntry;
  'next/inline-script-id': RuleEntry;
  'next/next-script-for-ga': RuleEntry;
  'next/no-assign-module-variable': RuleEntry;
  'next/no-async-client-component': RuleEntry;
  'next/no-before-interactive-script-outside-document': RuleEntry;
  'next/no-css-tags': RuleEntry;
  'next/no-document-import-in-page': RuleEntry;
  'next/no-duplicate-head': RuleEntry;
  'next/no-head-element': RuleEntry;
  'next/no-head-import-in-document': RuleEntry;
  'next/no-html-link-for-pages': RuleEntry;
  'next/no-img-element': RuleEntry;
  'next/no-page-custom-font': RuleEntry;
  'next/no-script-component-in-head': RuleEntry;
  'next/no-styled-jsx-in-document': RuleEntry;
  'next/no-sync-scripts': RuleEntry;
  'next/no-title-in-document-head': RuleEntry;
  'next/no-typos': RuleEntry;
  'next/no-unwanted-polyfillio': RuleEntry;
};

export type NextSettings = {
  rootDir?: string;
};

export type NextConfig = {
  overrides?: Partial<NextRules> & TypedFlatConfigItem['rules'];
  settings?: Partial<NextSettings>;
};
