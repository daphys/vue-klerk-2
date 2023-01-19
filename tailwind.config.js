module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '0.875em',
      base: '1rem',
      xl: '1.25rem',
      '2xl' : '1.5rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'xxl': '2rem',
      'title' : '3.5rem'
    },
    extend: {
      colors: {
        'gray': '#F5F5F8',
        'grayText' : '#999999',
        'sky' : '#E6EDFF'
      },
      boxShadow: {
        'main': '0px 8px 16px 0px #00000014',
      }
    },
    fontFamily: {
      sans: [
        'Inter',
        'Avenir',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Ubuntu',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },
  plugins: [],
};
