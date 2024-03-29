const {nextui} = require("@nextui-org/react");

module.exports = {
  darkMode: "class",
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [nextui()],
}
