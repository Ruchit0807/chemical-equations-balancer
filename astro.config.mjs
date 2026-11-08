// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://balancechemicalequation.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          ja: 'ja',
          fr: 'fr',
          de: 'de',
          pt: 'pt',
          ko: 'ko',
          it: 'it',
        },
      },
      filter: (page) => {
        // Exclude redirect aliases and error pages so only indexable content appears in search index
        const excluded = [
          'https://balancechemicalequation.com/about/',
          'https://balancechemicalequation.com/contact/',
          'https://balancechemicalequation.com/privacy/',
          'https://balancechemicalequation.com/terms/',
        ];
        return (
          !excluded.includes(page) &&
          !page.includes('/404') &&
          !page.includes('/500')
        );
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
