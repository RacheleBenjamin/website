/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Roboto', 'Arial', 'Lucida Grande', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'Roboto', 'Arial', 'Lucida Grande', 'sans-serif'],
      },
      colors: {
        cream: '#EDF2FA',
        ink: '#1A1A1A',
        work: '#b45309',
        'work-bg': '#fde4cf',
        shop: '#1d4ed8',
        'shop-bg': '#dbeafe',
        agent: '#6d28d9',
        'agent-bg': '#ede9fe',
        positive: '#047857',
        'positive-bg': '#d1fae5',
      },
      letterSpacing: {
        'wider-2': '0.2em',
        'wider-3': '0.3em',
      },
    },
  },
  plugins: [],
}
