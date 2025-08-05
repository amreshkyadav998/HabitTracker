/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Blue for buttons and accents
        secondary: '#F3F4F6', // Light gray for backgrounds (light theme)
        darkBg: '#1F2937', // Dark gray for backgrounds (dark theme)
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      transitionProperty: {
        'all': 'all',
      },
    },
  },
  plugins: [],
}