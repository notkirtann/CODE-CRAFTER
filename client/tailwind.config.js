/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#CCCCCC",
        lightblue: "#C3D8FF",
        green:"#008170",
        mehndi:"#005B41",
        grey:"#232D3F",
        textpurple: "#7743DB",
        lightgreen: "#A6FF96"
      },
      height: {
        half: "45vh",
        onehalf: "9.9vh",
        "144": "33.99rem",
      },
    },
  },
  plugins: [],
};
