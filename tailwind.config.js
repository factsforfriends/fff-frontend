const Color = require('color')
const alpha = (clr, val) => Color(clr).alpha(val).rgb().string()
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()

module.exports = {
  theme: {
      extend: {
          colors: {
              highlight: {
                default: '#0B6B64',
                lighter: lighten('#0B6B64', 0.25)
              },
              secondary: '#0E8980',
              tertiary: '#00BCAD'
          }
      }
      
  }
}
