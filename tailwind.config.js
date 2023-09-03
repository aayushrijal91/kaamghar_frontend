/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#255398',
        'secondary': '#0A1D39',
        'tertiary': '#5AB2F8',
        'body': '#f3f2f0',
      },
      fontFamily: {
        friends: ["Friends", "sans-serif"],
        articulat: ["articulat-cf", "sans-serif"],
        'articulat-heavy': ["articulat-heavy-cf", "sans-serif"],
      },
    },
  },
  plugins: [],
}

