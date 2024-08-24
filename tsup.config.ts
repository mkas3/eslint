import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  entry: [
    'src/index.ts'
  ],
  minify: true,
  outDir: 'dist',
  shims: true,
  treeshake: true
});
