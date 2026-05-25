/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        cream: '#F5F1EA',
        ink: '#1A1A1A',
      },
      letterSpacing: {
        'wider-2': '0.2em',
        'wider-3': '0.3em',
      },
    },
  },
  plugins: [],
}
