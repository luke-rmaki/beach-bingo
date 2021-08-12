#!/usr/bin/env node
const graphqlLoaderPlugin = require(`@luckycatfactory/esbuild-graphql-loader`);
const { build } = require(`estrella`);

build({
  entry: `./server/src/main.ts`,
  outdir: `build`,
  bundle: true,
  minify: false,
  platform: `node`,
  run: [`node`, `./build/main.js`],
  sourcemap: `inline`,
  plugins: [graphqlLoaderPlugin.default()],
});
