module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      yellow: {
        DEFAULT: '#FEEFDB',
      },
      purple: {
        DEFAULT: '#704D8D'
      }
    },
    extend: {
      backgroundImage: {
       'hero-image': "url('/static/images/hero-background.jpg')",
      }
    },
    fontFamily: {
      serif: ['Rock Salt', 'serif'],
      sans: ['Open Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}