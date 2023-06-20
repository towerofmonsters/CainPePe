/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px', // Adjust the breakpoint to target smaller screens like phones
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        'light-flesh': '#E6DDC4',
        'dark-green': '#181D31',
        'light-green': '#61876E',
        'green-med': '#678983'
      },
      animation: {
        'spin': 'spin 6s linear infinite',
      },
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        Lucky: ['Luckiest Guy', "cursive"],
        Freckel: ['Freckle Face', 'cursive'],
        Megrim: ['Megrim', 'cursive'],
        Gugi: ['Gugi', 'cursive']
      },
    },
  },
  plugins: [],
}

