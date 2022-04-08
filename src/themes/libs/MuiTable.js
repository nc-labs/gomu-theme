import { createTheme } from '@mui/material/styles'

import palette from './palette'

const MuiTable = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          '& thead tr th, tbody tr:not(:last-of-type) td': {
            borderBottom: `1px solid ${palette.divider}`,
          },
        },
      },
    },
  },
}).components?.MuiTable

export default MuiTable
