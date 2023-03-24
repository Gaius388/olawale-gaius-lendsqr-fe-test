/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lendsqr1: "#213F7D",
        lendsqr2: "#39CDCC",
      },
      gridTemplateColumns: {
        dashboard: "20vw 1fr",
        moreButton: "repeat(6, 1fr) 2rem",
      },
    },
    plugins: [],
  },
};
