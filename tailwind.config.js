const { green, red } = require('@mui/material/colors')

const spacingByStep = (count = 24, step = 4) => {
  const configs = {}
  Array.from(Array(count + 1).keys()).forEach((i) => (configs[i] = `${i * step}px`))
  return configs

  // Kết quả khi count = 24, step = 4
  // const configs = {
  //   0: '0px',
  //   1: '4px',
  //   2: '8px',
  //   3: '12px',
  //   4: '16px',
  //   5: '20px',
  //   6: '24px',
  //   7: '28px',
  //   8: '32px',
  //   9: '36px',
  //   10: '40px',
  //   11: '44px',
  //   12: '48px',
  //   13: '52px',
  //   14: '56px',
  //   15: '60px',
  //   16: '64px',
  //   17: '68px',
  //   18: '72px',
  //   19: '76px',
  //   20: '80px',
  //   21: '84px',
  //   22: '88px',
  //   23: '92px',
  //   24: '96px',
  // }
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
    colors: {
      primary: '#325ea5',
      secondary: '#cb473e',
      background: '#f6f7f9',
      success: { ...green, DEFAULT: green[500] },
      error: { ...red, DEFAULT: red[500] },
      text: {
        primary: '#242424',
        secondary: '#747475',
        disabled: '#a1a2a3',
      },
      divider: '#efeff5',
      white: '#ffffff',
    },
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
