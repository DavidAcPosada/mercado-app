const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F2884B',
        },
        secondary: {
          DEFAULT: '#8DA632',
        },
        tercery: {
          DEFAULT: '#F2BC1B',
        },
        complementary: {
          DEFAULT: '#F24B6A',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        black: {
          DEFAULT: '#4B4B4B',
        },
        gray: {
          50: '#f8f8f8',
          100: '#f2f2f2',
          200: '#e2e2e2',
          300: '#d4d4d4',
          400: '#c5c5c5',
          500: '#b7b7b7',
          600: '#929292',
          700: '#707070',
          800: '#494949',
          900: '#252525',
        },
        success: {
          DEFAULT: '#9FC131',
        },
      },
      fontFamily: {
        main: ['Montserrat', ...defaultTheme.fontFamily.sans],
        head: ['Outfit'],
      },
      fontSize: {
        xxs: '.5rem',
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addBase }) {
      addBase({
        div: {
          borderStyle: 'solid',
        },
      });
      const components = {};
      addComponents(components);
    }),
  ],
};
