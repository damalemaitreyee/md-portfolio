/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  variants: {
    width: ["responsive", "hover", "focus"],
  },
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./images/particle.gif')",
        img: "linear-gradient(60deg, #29323c 0%, #485563 100%),url('./images/img-13.gif')",
      },
    },
  },
  plugins: [],
};
