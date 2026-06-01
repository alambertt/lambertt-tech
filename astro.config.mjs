// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lambertttech.com',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date(),
    }),
  ],
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.pexels.com' }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
