/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      Poppins: 'Poppins',
    },
    colors: {
      Blue: '#3A6EA5',
      LightGrey: '#D9D9D9',
      LightMedGrey: 'rgba(0, 0, 0, 0.25)',
      Sea: '#8EB7BC',
      White: '#ffffff',
      Black: '#000000',
      TransParent: '#00000000',
      MidGrey: '#838383',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '3.75rem',
        xl: '2.5rem',
        '2xl': '7.375rem',
      },
    },
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },

  plugins: [
    plugin(function({ addBase, theme }) {
      addBase([
        {
          '@media (max-width: 639px)': {
            h1: {
              fontSize: '36px',
              lineHeight: '48px',
              letterSpacing: '-0.01em',
            },
            h2: {
              fontSize: '32px',
              lineHeight: '40px',
            },
            h3: {
              fontSize: '24px',
              lineHeight: '32px',
            },
            h4: {
              fontSize: '18px',
              lineHeight: '26px',
            },
          },
        },
        {
          '@media (min-width: 640px)': {
            h1: {
              fontSize: '46px',
              lineHeight: '56px',
              letterSpacing: '-0.01em',
            },
            h2: {
              fontSize: '36px',
              lineHeight: '44px',
            },
            h3: {
              fontSize: '26px',
              lineHeight: '36px',
            },
            h4: {
              fontSize: '20px',
              lineHeight: '26px',
            },
          },
        },
        {
          '@media (min-width: 1280px)': {
            h1: {
              fontSize: '56px',
              lineHeight: '64px',
              letterSpacing: '-0.01em',
            },
            h2: {
              fontSize: '40px',
              lineHeight: '48px',
            },
            h3: {
              fontSize: '28px',
              lineHeight: '38px',
            },
            h4: {
              fontSize: '24px',
              lineHeight: '28px',
            },
          },
        },
      ]);
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
