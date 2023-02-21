/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};

// require("@headlessui/tailwindcss")
