/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [ './src/**/*.html', './src/**/*.vue', './src/**/*.jsx', ],
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}