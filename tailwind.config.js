/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f172a",
          dark: "#020617",
          light: "#1e293b",
        },
        medical: {
          DEFAULT: "#059669", // Med-Green
          light: "#10b981",
          soft: "#ecfdf5",
        },
        luxury: {
          white: "#ffffff",
          gray: "#f8fafc",
          border: "#e2e8f0",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
