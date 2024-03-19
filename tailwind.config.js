/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        color: {
          pink: '#FFD1E3',
          lightPink: '#eac4d4',
          hotPink: '#FF8FBA',
          brightPink: '#ff009d',
          kobicha: '#714b2b',
          ivory: '#FAFCEB',
          lavender: '#aba4e3',
        },
      },
    },
  },
  plugins: [],
};
