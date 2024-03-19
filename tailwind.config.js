/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        color: {
          pink: '#e3a4bd',
          lightPink: '#eac4d4',
          kobicha: '#714b2b',
          ivory: '#FAFCEB',
        },
      },
    },
  },
  plugins: [],
};
