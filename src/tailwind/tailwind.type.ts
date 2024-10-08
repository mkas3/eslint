import type { TypedFlatConfigItem } from '@antfu/eslint-config';
import type { Linter } from 'eslint';

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
  'tailwind/classnames-order': Linter.RuleEntry<ClassnamesOrder>;
  'tailwind/enforces-negative-arbitrary-values': Linter.RuleEntry<EnforcesNegativeArbitraryValues>;
  'tailwind/enforces-shorthand': Linter.RuleEntry<EnforcesShorthand>;
  'tailwind/migration-from-tailwind-2': Linter.RuleEntry<MigrationFromTailwind2>;
  'tailwind/no-arbitrary-value': Linter.RuleEntry<NoArbitaryValue>;
  'tailwind/no-contradicting-classname': Linter.RuleEntry<NoContradictingClassname>;
  'tailwind/no-custom-classname': Linter.RuleEntry<NoCustomClassname>;
  'tailwind/no-unnecessary-arbitrary-value': Linter.RuleEntry<NoUnnecessaryArbitraryValue>;

  'tailwind-readable:multiline': Linter.RuleEntry<Multiline>;
  'tailwind-readable:no-duplicate-classes': Linter.RuleEntry<NoDuplicateClasses>;
  'tailwind-readable:no-unnecessary-whitespace': Linter.RuleEntry<NoUnnecessaryWhitespace>;
  'tailwind-readable:sort-classes': Linter.RuleEntry<SortClasses>;
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
