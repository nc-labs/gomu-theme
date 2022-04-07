import { createTheme } from '@mui/material/styles'
import THEME_CONFIGS from 'themes/configs'

const MuiListItemIcon = createTheme({
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'unset',
          marginRight: THEME_CONFIGS.spacing * 4,
        },
      },
    },
  },
}).components?.MuiListItemIcon

export default MuiListItemIcon
