import { defineConfig } from '@tanstack/start/config';

export default defineConfig({
  server: {
    preset: 'vercel',
    prerender: { routes: ['/', 'about', 'home'], crawlLinks: true },
  },
});
