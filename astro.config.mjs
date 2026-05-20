// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lambertttech.com',
  integrations: [sitemap()],
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.pexels.com' }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
