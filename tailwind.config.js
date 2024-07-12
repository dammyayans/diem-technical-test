/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#111827',
        },
        secondary: {
          DEFAULT: '#088395',
        },
      },
    },
  },
  plugins: [],
};
