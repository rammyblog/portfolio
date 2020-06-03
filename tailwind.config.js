module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],

  theme: {
    fontFamily: {
      display: ["Libre Baskerville", "serif"],
      body: ["Playfair Display", "serif"],
      header: ["Homemade Apple", "cursive"],
    },
    inset: {
      "0": 0,
      auto: "auto",
      "1/2": "50%",
      "3": "3rem",
      "3": "3rem",
      "1": "1rem",
    },
    extend: {
      height: {
        "85-screen": "85vh",
        "84-screen": "84vh",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus"],
  },
  plugins: [],
}
