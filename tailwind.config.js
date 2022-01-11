const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        licorice: ["Licorice", "cursive"],
      }
    },
    colors: {
      "brown-sugar": "#B07156",
      "china-rose": "#AB4E68",
      "china-rose-ligth": "#BF7389",
      "eggplant": "#533745",
      "grullo": "#9D9171",
      "tumbleweed": "#C4A287",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      zinc: colors.zinc,
      red: colors.red,
      orange: colors.orange,
      pink: colors.pink,
      violet: colors.violet,
      purple: colors.purple,
      blue: colors.blue,
      cyan: colors.cyan,
      green: colors.green,
      teal: colors.teal,
      lime: colors.lime,
      brown: colors.brown,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      gold: colors.gold,
      silver: colors.silver,
      bronze: colors.bronze,
    },
  },
  plugins: [],
}
