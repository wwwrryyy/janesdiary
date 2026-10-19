import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wwwrryyy.github.io',
  base: '/janesdiary',
  trailingSlash: 'always',
  output: 'static',
  devToolbar: {
    enabled: false,
  },
});
