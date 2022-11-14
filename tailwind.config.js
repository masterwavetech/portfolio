/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        cynan: "#43474b",
        depink: "#ff014f",
        general: "#ecf0f3",
      },
      backgroundImage: {
        btn_shadow: "linear-gradient(145deg, #e2e8ec, #ffffff)",
      },
      boxShadow: {
        btn_shadow: "4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff",
      },
      borderRadius: {
        half: "50%",
        xl: "40px",
      },
      spacing: {
        100: "30rem",
        101: "32rem",
        102: "10%",
      },
      zIndex: {
        100: "1",
      },
      minWidth: {
        400: "400px",
      },
    },
  },
  plugins: [],
};
