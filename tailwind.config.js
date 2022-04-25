module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: "#999999",
    },
    fontSize: {
      base: "14px",
      lg: "36px",
    },
    backgroundImage: {
      "home-gradient": "linear-gradient(to right, #12A2E9, #D946EF)",
    },
    extend: {},
  },
  plugins: [],
};
