import type { TypedFlatConfigItem } from '@antfu/eslint-config';

import { Linter } from 'eslint';

import RuleEntry = Linter.RuleEntry;

type DefaultRuleOptions = {
  callees: string[];
  classRegex: string;
  config: object | string;
  ignoredKeys: string[];
  skipClassAttribute: boolean;
  tags: string[];
};

type RuleOptions<T = object> = Partial<DefaultRuleOptions & T>[] | [];

type ClassnamesOrder = RuleOptions<{
  removeDuplicates: boolean;
}>;

type EnforcesNegativeArbitraryValues = RuleOptions;

type EnforcesShorthand = RuleOptions;

type MigrationFromTailwind2 = RuleOptions;

type NoArbitaryValue = RuleOptions;

type NoContradictingClassname = RuleOptions;

type NoCustomClassname = RuleOptions<{
  cssFiles: string[];
  cssFilesRefreshRate: number;
  whitelist: string[];
}>;

type NoUnnecessaryArbitraryValue = RuleOptions;

type DefaultReadableRuleOptions = {
  callees: string[];
  classAttributes: string[];
  variables: string[];
};

type ReadableRuleOptions<T = object> = Partial<DefaultReadableRuleOptions & T>[] | [];

type Multiline = ReadableRuleOptions<{
  classesPerLine: number;
  group: 'emptyLine' | 'never' | 'newLine';
  indent: number | 'tab';
  lineBreakStyle: 'unix' | 'windows';
  preferSingleLine: boolean;
  printWidth: number;
}>;

type NoDuplicateClasses = ReadableRuleOptions;

type NoUnnecessaryWhitespace = ReadableRuleOptions<{
  allowMultiline: boolean;
}>;

type SortClasses = ReadableRuleOptions<{
  order: 'asc' | 'desc' | 'improved' | 'official';
  tailwindConfig: string;
}>;

export type TailwindRules = {
  'tailwind/classnames-order': RuleEntry<ClassnamesOrder>;
  'tailwind/enforces-negative-arbitrary-values': RuleEntry<EnforcesNegativeArbitraryValues>;
  'tailwind/enforces-shorthand': RuleEntry<EnforcesShorthand>;
  'tailwind/migration-from-tailwind-2': RuleEntry<MigrationFromTailwind2>;
  'tailwind/no-arbitrary-value': RuleEntry<NoArbitaryValue>;
  'tailwind/no-contradicting-classname': RuleEntry<NoContradictingClassname>;
  'tailwind/no-custom-classname': RuleEntry<NoCustomClassname>;
  'tailwind/no-unnecessary-arbitrary-value': RuleEntry<NoUnnecessaryArbitraryValue>;

  'tailwind-readable:multiline': RuleEntry<Multiline>;
  'tailwind-readable:no-duplicate-classes': RuleEntry<NoDuplicateClasses>;
  'tailwind-readable:no-unnecessary-whitespace': RuleEntry<NoUnnecessaryWhitespace>;
  'tailwind-readable:sort-classes': RuleEntry<SortClasses>;
};

export type TailwindSettings = {
  callees: string[];
  classRegex: string;
  config: string;
  cssFiles: string[];
  cssFilesRefreshRate: number;
  removeDuplicates: boolean;
  skipClassAttribute: boolean;
  tags: string[];
  whitelist: string[];
};

export type TailwindConfig = {
  overrides?: Partial<TailwindRules> & TypedFlatConfigItem['rules'];
  settings?: Partial<TailwindSettings>;
};
