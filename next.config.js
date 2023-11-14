require("dotenv").config();

module.exports = {
  reactStrictMode: false,
  env: {
    API_URL: process.env.API_URL,
    // SECRET_KEY: process.env.SECRET_KEY,
  },
};
