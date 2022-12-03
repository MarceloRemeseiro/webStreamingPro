/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9],
    },
    extend: {
      borderRadius: {
        DEFAULT: "0.3rem",
      },
      colors: {
        fondo: "#0e1015",
        white: "#dcdee3",
        dark: "#13151b",
        medium: "#252933",
        primary: "#181a20",
        secondary: "#EE0823",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      margin: "2rem",
    },
    variants: {
      aspectRatio: ["responsive"],
    },
  },
  plugins: [
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
  ],
};
