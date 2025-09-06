/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #3b82f6, 0 0 20px #3b82f6, 0 0 40px #3b82f6' },
          '50%': { boxShadow: '0 0 20px #3b82f6, 0 0 40px #3b82f6, 0 0 60px #3b82f6' },
        },
      },
      animation: {
        glow: 'glow 3s ease infinite',
      },
    },
  },
  plugins: [],
}

