const isProd = process.env.NODE_ENV === "production"

const withPWA = require("next-pwa")

module.exports = withPWA({
  pwa: {
    disable: !isProd,
    dest: "public",
  },
  env: {
    TOKEN: process.env.TOKEN,
    BASE_URL: process.env.BASE_URL,
  },
})
