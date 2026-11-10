// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',
  devtools: { enabled: false },
  telemetry: false,
  css: ['~/assets/css/main.css'],
  devServer: { port: 3006 },
  runtimeConfig: {
    public: {
      // Overridden at runtime by NUXT_PUBLIC_SITE_URL.
      siteUrl: 'http://localhost:3006',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [{ name: 'theme-color', content: '#c8553d' }],
    },
  },
});
