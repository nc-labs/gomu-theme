import { createTheme } from '@mui/material/styles'

import palette from './palette'

const MuiTable = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          '& thead tr th, tbody tr td': {
            borderBottom: `1px solid ${palette.divider}`,
          },
          '& tfoot tr td': {
            borderBottom: `1px solid transparent`,
          },
        },
      },
    },
  },
}).components?.MuiTable

export default MuiTable
