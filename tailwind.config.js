/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "san"],
      },
      colors: {
        primary: {
          100: "#1d523b",
          200: "#0D2620",
          300: "#062d20",
        },
        color1: '#1d523b',
        color2: '#cfd8d2',
      },
      borderWidth: {
        1: "1px",
        0.5: "0.5px",
      },
      rotate: {
        40: "40deg",
      },
    },
  },
  plugins: [],
};
