const Color = require('color')
const alpha = (clr, val) => Color(clr).alpha(val).rgb().string()
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()

module.exports = {
  plugins: [
    require('@tailwindcss/forms')
  ],
  purge: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#EDF2F1',
        highlight: "#0B6B64",
        'highlight-lighter': lighten('#0B6B64', 0.25),
        secondary: '#0E8980',
        tertiary: '#00BCAD',
        fffred: '#b91349',
        'tag-background': '#EDF9F8',
        'dark-background': '#151717',
        'dark-primary': '#98DFD9',
        'dark-secondary': '#323232',
        'dark-tertiary': '#A6A6A6',
        'dark-hover': '#2A2B2B'
      },
      fontSize: {
        'xxs': '.6rem',
      }
    }
  }
}

