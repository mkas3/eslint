export default {
  '*': ['eslint --config eslint.config.ts'],
  '**/*.ts?(x)': () => 'bun typecheck'
};
