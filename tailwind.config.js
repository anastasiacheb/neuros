/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // './index.html',
    // "./**\*.js",
    './*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      primary_dark: {
        200: '#152D58',
        300: '#1B3D75',
        400: '#224C93',
        500: '#2D66C4',
        600: '#2E71E5',
        700: '#6099F7',
        800: '#88B2F9',
      },
      primary_light: {
        200: '#E2ECFE',
        300: '#B6D1FB',
        400: '#88B2F9',
        500: '#6099F7',
        600: '#387FF5',
        700: '#2D66C4',
        800: '#224C93',
      },
      dark: {
        0: '#171C2F',
        100: '#1D2235',
        200: '#2B324A',
        300: '#3C4561',
        400: '#4F5678',
        500: '#7881A5',
        600: '#9198B7',
        700: '#A7ADC5',
        800: '#BEC2D3',
        900: '#D3D6E2',
        1000: '#EDEEF3',
      },
      light: {
        0: '#FFFFFF',
        100: '#F5F7FA',
        200: '#ECEEF4',
        300: '#D2D5E2',
        400: '#B6BCCD',
        500: '#9EA5BD',
        600: '#79829F',
        700: '#626981',
        800: '#4B5162',
        900: '#343844',
        1000: '#1C1F25',
      },
    },
    extend: {
      boxShadow: {
        DEFAULT:
          '0px 0px 1px rgba(44, 58, 114, 0.05), 0px 2px 6px rgba(44, 58, 114, 0.05), 0px 10px 18px rgba(58, 76, 146, 0.1)',
        blue: '0px 16px 10px rgba(56, 127, 245, 0.05), 0px 9px 12px rgba(56, 127, 245, 0.05), 0px 6px 8px rgba(56, 127, 245, 0.05);',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        DM: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
