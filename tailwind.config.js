const {
  PRIMARY_COLOR,
  PRIMARY_HOVER_COLOR,
  PRIMARY_ACTIVE_COLOR,
  SECUNDARY_COLOR,
  SECUNDARY_LIGHT_COLOR,
  TEXT_COLOR,
  DISCOUNT_COLOR,
  NEW_COLOR,
} = require("./src/assets/appVariables");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": PRIMARY_COLOR,
        "primary-hover-color": PRIMARY_HOVER_COLOR,
        "primary-active-color": PRIMARY_ACTIVE_COLOR,
        "secundary-color": SECUNDARY_COLOR,
        "secundary-light-color": SECUNDARY_LIGHT_COLOR,
        "text-color": TEXT_COLOR,
        "discount-color": DISCOUNT_COLOR,
        "new-color": NEW_COLOR,
      },
    },
  },
  plugins: [],
};
