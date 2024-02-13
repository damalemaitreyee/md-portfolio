/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const variants = {
  width: ["responsive", "hover", "focus"],
};
export const theme = {
  extend: {
    backgroundImage: {
      hero: "url('./images/particle.gif')",
      img: "linear-gradient(60deg, #29323c 0%, #485563 100%),url('./images/img-13.gif')",
    },
  },
};
export const plugins = [];
