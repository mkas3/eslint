export default {
  '*': ['eslint --config eslint.config.ts --flag unstable_ts_config'],
  '**/*.ts?(x)': () => 'bun typecheck'
};
