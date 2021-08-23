const Color = require('color')
const { width, maxWidth } = require('tailwindcss/defaultTheme')
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
        fffred: '#FF6E6E',
        'tag-background': '#EDF9F8',
        'dark-background': '#151717',
        'dark-navi': '#232424',
        'dark-primary': '#98DFD9',
        'dark-primary-font': '#FFFFFF',
        'dark-secondary-font': '#A6A6A6',
        'dark-dark-font': '#121212',
        'dark-cards': '#2F3333',
        'dark-hover': '#2A2B2B',
        'dark-category-background': '#7F8584',
        'gradient-from': '#0B6B64 0%',
        'dark-gradient-from': '#98DFD9 0%',
        'gradient-via': '#0B6B64 50%',
        'dark-gradient-via': '#98DFD9 50%',
        'gradient-to': '#00000000 50%',
      },
      fontSize: {
        'xxs': '.6rem',
        'header-large': ['2rem', '3rem'],
        'header-medium': ['1.5rem', '2.25rem'],
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '64': '100% 16rem'
      },
      inset:{
        '26': '6.5rem'
      }
    },
    maxWidth: {
      '1/1':'100vw',
      '3xl': '48rem',
      '4xl': '56rem',
      '6xl': '72rem',
      'md': '28rem',
      'screen-xl': '1280px',
      'screen-sm': '640px',

    },
    minWidth: {
      '1/3':'33%'
    }
  },
  variants: {
    extend: {
      display: ['dark', 'hover', 'group-hover']
    }
  }
}

