/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAF8F5",
          100: "#F6F4EE",
          200: "#ECE7DE",
          300: "#E2DACB",
          400: "#D3CCBF",
        },
        espresso: {
          800: "#2A2421",
          900: "#231F20",
          950: "#1C1817",
        },
        sun: {
          300: "#F7D578",
          400: "#F0BE3C",
          500: "#EBB832",
          600: "#D99F1E",
        },
        editorial: {
          400: "#608FAE",
          500: "#4B7897",
          600: "#3B6989",
          700: "#2F546F",
        }
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        display: ["Cinzel", "Bodoni Moda", "Playfair Display", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'editorial': '0 10px 30px -10px rgba(35, 31, 32, 0.08)',
        'editorial-hover': '0 20px 40px -15px rgba(35, 31, 32, 0.15)',
      }
    },
  },
  plugins: [],
}
