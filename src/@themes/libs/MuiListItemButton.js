import { createTheme } from '@mui/material/styles'
import THEME_CONFIGS from '@themes/configs'

const MuiListItemButton = createTheme({
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: THEME_CONFIGS.borderRadius,
        },
      },
    },
  },
}).components?.MuiListItemButton

export default MuiListItemButton
