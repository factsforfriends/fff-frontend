const Color = require('color')
const alpha = (clr, val) => Color(clr).alpha(val).rgb().string()
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()

module.exports = {
  plugins: [
    require('@tailwindcss/forms')
  ],
  purge: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        highlight: "#0B6B64",
        'highlight-lighter': lighten('#0B6B64', 0.25),
        secondary: '#0E8980',
        tertiary: '#00BCAD',
        fffred: '#b91349'
      },
      fontSize: {
        'xxs': '.6rem',
      }
    }
  }
}

