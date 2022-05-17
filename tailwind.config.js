const { green, red } = require('@mui/material/colors')

const spacingByStep = (count = 24, step = 4) => {
  const configs = {}
  Array.from(Array(count + 1).keys()).forEach((i) => (configs[i] = `${i * step}px`))
  return configs
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    spacing: spacingByStep(24, 4),
    screens: {
      xs: '0px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    borderWidth: {
      ...spacingByStep(2, 1),
      DEFAULT: '1px',
    },
    borderRadius: {
      ...spacingByStep(24, 4),
      full: '9999px',
    },
    zIndex: {
      'mobile-stepper': 1000,
      'fab': 1050,
      'speed-dial': 1050,
      'app-bar': 1100,
      'drawer': 1200,
      'modal': 1300,
      'snackbar': 1400,
      'tooltip': 1500,
      'auto': 'auto',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      none: '0 0 #000000',
    },
    fontSize: {
      tiny: '10px',
      caption: '12px',
      body: '14px',
      subtitle: '16px',
      title: '18px',
      heading: '20px',
    },
    fontFamily: {
      sans: "'Noto Sans', sans-serif",
    },
    colors: {
      primary: '#325ea5',
      secondary: '#cb473e',
      success: { ...green, DEFAULT: green[500] },
      error: { ...red, DEFAULT: red[500] },
      white: '#fff',
      black: '#000',
    },
    textColor: {
      DEFAULT: '#242424',
      normal: '#242424',
      muted: '#747475',
      disabled: '#a1a2a3',
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      default: '#efeff5',
      DEFAULT: '#efeff5',
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      default: '#f6f7f9',
    }),
    transitionProperty: {
      DEFAULT: 'all',
    },
    transitionDuration: {
      '0': '0ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
      DEFAULT: '250ms',
    },
    extend: {},
  },
}
