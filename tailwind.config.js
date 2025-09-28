/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bravy: {
          primary: "#3e216e",
          secondary: "#7947cb",
          deep: "#500e39",
          accent: "#e9b201",
          accent2: "#ffce3a",
          soft: "#ffedad",
        },
      },
      boxShadow: {
        glow: "0 10px 30px rgba(233,178,1,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
