/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#118080',
        accent: '#78EDED',
        light: '#D2F9F9',
        dark: '#062D2D',
      },
      fontFamily: {
        pragati: ['"Pragati Narrow"', 'sans-serif'],
        jakarta:["Plus Jakarta Sans",'sans-serif']
      },
    },
  },
  plugins: [],
}

