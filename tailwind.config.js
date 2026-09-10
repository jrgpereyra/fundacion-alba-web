/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'alba-blue': '#082E53',
        'alba-yellow': '#FFB700',
        'alba-gray': '#5A5A5A',
        'alba-warm': '#FFFDF5'
      },
      fontFamily: {
        spectral: ['Spectral', 'serif']
      }
    }
  },
  plugins: []
};
