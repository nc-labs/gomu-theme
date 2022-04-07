declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    ['icon-small']: true
    ['icon-medium']: true
    ['icon-large']: true
  }
}

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    mode: 'custom'
  }
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    background1: string
    background2: string
    background3: string
  }

  interface CommonColors {
    outline: string
    background1: string
    background2: string
    background3: string
    text1: string
    text2: string
    text3: string
  }
}
