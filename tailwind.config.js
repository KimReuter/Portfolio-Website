const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#F472B6',
        'green': '#34D399',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* IE und Edge */
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }
      });
    }),
  ],
};