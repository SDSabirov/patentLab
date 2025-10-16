// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: '2025-04-13',
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/i18n'],

  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
  },
  css: ['~/assets/css/main.css','boxicons/css/boxicons.min.css'],
  plugins: ['~/plugins/aos.client.ts'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
   i18n: {
    // Minimal basic example
    locales: [
      {
        code: 'uz',
        name: 'English',
        file: 'uz.json'
      },
      {
        code: 'ru',
        name: 'Русский',
        file: 'ru.json'
      },
      // Add more languages here
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'uz',
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Pragati+Narrow:wght@400;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        },
        
      ],
      
    },
  },
})