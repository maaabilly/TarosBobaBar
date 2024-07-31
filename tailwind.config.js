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
      backgroundImage: {
        pricing: "url('./assets/svg/bottomWave.svg')",
        hero: "url('./assets/svg/heroWave.svg')",
        'outline-wave': "url('./assets/svg/outlineWave.svg')",
        menuDescriptionBg: "url('/src/assets/images/menu-bg.jpg')"
      },
    },
  },
  plugins: [],
};
