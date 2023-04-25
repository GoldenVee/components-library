/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  theme: {
    extend: {
      colors: {
        litlvl: {
          50: '#ffffff',
          100: '#edf0f2',
          200: '#f9fafb',
          300: '#e4e7eb',
          400: '#ebeff2',
          500: '#d3d8de',
          600: '#C1C6CC',
          700: '#A6ABB1',
          800: '#a7aeb5',
        },
        darklvl: {
          800: '#101417',
          700: '#232a31',
          600: '#191f24',
          500: '#2c343e',
          400: '#20272E',
          300: '#2A323B',
          200: '#353F4A',
          100: '#414D5A',
          50: '#7a8a99',
        },
        warningLit: '#f19844',
        warningDrk: '#DC7516',
        destroyLit: '#dd1e63',
        destroyDrk: '#d80f46',
        confirmLit: '#57d275',
        confirmDrk: '#39ad60',
      },
      lineHeight: {
        11: '60px',
      },
    },
  },
  plugins: [],
};
