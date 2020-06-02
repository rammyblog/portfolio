module.exports = {
  // purge: ['"./components/**/*.js", "./pages/**/*.js"]'],
  purge: {
    enabled: true,
    content: ["./components/**/*.js", "./pages/**/*.js"],

    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: [
        "bg-red-500",
        "bg-red-600",
        "bg-yellow-300",
        "bg-green-800",
        "bg-blue-300",
        "bg-gray-700",
        "bg-indigo-700",
        "bg-blue-700",
      ],
    },
  },
  theme: {
    fontFamily: {
      display: ["Playfair Display", "serif"],
      body: ["Playfair Display", "serif"],
    },
    inset: {
      "0": 0,
      auto: "auto",
      "1/2": "50%",
      "3": "3rem",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
