/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'UT-orange': '#FB8500',
        'selective-yellow': '#FFB703',
        'prussian-blue': '#023047',
        'blue-green': '#219EBC',
        'sky-blue': '#8ECAE6',
      },
    },
  },
  plugins: [],
}
