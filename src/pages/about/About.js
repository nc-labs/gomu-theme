import React from 'react'

import Button from '@mui/material/Button'
import { notify } from 'modules/SnackBar'

function MyApp() {
  return (
    <React.Fragment>
      <Button onClick={() => notify.success('success mesage')}>Show success snackbar</Button>
      <Button onClick={() => notify.error('error mesage')}>Show error snackbar</Button>
    </React.Fragment>
  )
}

export default function IntegrationNotistack() {
  return <MyApp />
}
