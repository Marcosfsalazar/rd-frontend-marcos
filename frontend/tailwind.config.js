/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', ...defaultTheme.fontFamily.sans],
        body: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',
        yellow: 'var(--yellow)',
        blue: 'var(--blue)',
        gray: 'var(--gray)',
      },
    },
  },
  plugins: [],
}
