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
          400: "#3b82f6",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
        },
        secondary: {
          100: "#f1f5f9",
          400: "#94a3b8",
          500: "#64748b",
          800: "#334155"
        },
        accent: {
          100: "#ffedd5",
          400: "#fb923c",
          500: "#f59e42",
          600: "#ea580c",
          800: "#c2410c"
        },
      },
    },
  },
  plugins: [],
}
