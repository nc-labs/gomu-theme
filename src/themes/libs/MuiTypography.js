import { createTheme } from '@mui/material/styles'

const MuiTypography = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'icon-small',
          },
          style: {
            fontSize: '16px',
          },
        },
        {
          props: {
            variant: 'icon-medium',
          },
          style: {
            fontSize: '20px',
          },
        },
        {
          props: {
            variant: 'icon-large',
          },
          style: {
            fontSize: '24px',
          },
        },
      ],
    },
  },
}).components?.MuiTypography

export default MuiTypography
