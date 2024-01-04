/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#297fca',
        customBlueLine: '#e4f1fd',
        darkBlue: '#000078',
      },
      fontSize: {
        'xxs': 'calc(.4rem + .2vw)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
      },
      gridTemplateColumns: {
        '14': 'repeat(14, 1fr)',
      }
    },

  },
  plugins: [],
}

