import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    paths: {
      base: '/leo-fitness'
    },
    alias: {
      '$components': './src/lib/components',
      '$data': './src/lib/data',
      '$state': './src/lib/state',
      '$types': './src/lib/types',
      '$utils': './src/lib/utils'
    }
  }
};

export default config;
