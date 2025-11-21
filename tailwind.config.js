/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        88: '22rem',
      },
      boxShadow: {
        '3xl': '0 0 30px rgba(0,0,0,0.8);',
        '2xl': '0 0 20px rgba(0,0,0,0.8);',
      },
      fontFamily: {
        'roboto': ['Roboto-condensed', 'Roboto'],
      }
    },
  },
  plugins: [],
}

