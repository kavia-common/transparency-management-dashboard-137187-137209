/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e9effd",
          100: "#dbeafe",
          300: "#60a5fa",
          500: "#2563eb",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        secondary: {
          100: "#f1f5f9",
          500: "#64748b",
          800: "#334155"
        },
        accent: {
          100: "#ffedd5",
          500: "#f59e42",
          600: "#f59e42",
          800: "#c2410c"
        },
      },
    },
  },
  plugins: [],
}
