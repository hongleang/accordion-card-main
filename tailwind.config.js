module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '375px',
        xl: '1440px'
      },
      colors: {
        darkBlue: '#1d1e35',
        red: '#f47c57',
        lightViolet: '#af67e9',
        lightBlue: '#6565e7',
        grayBlue: '#4a4b5e',
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
