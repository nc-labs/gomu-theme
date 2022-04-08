import * as React from 'react'

import { SvgIcon } from '@mui/material'

function ArrowUp(props) {
  return (
    <SvgIcon width={512} height={512} viewBox="0 0 2000 2000" {...props}>
      <path
        d="M1744 1436c-16.4 0-32.8-6.2-45.3-18.7L1000 718.5l-698.7 698.7c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5l744-744c25-25 65.5-25 90.5 0l744 744c25 25 25 65.5 0 90.5-12.5 12.6-28.9 18.8-45.3 18.8z"
        data-original="#000000"
        xmlns="http://www.w3.org/2000/svg"
      />
    </SvgIcon>
  )
}

export default React.memo(ArrowUp)
