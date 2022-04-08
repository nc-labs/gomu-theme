import * as React from 'react'

import { SvgIcon } from '@mui/material'

function ArrowDown(props) {
  return (
    <SvgIcon width="1em" height="1em" viewBox="0 0 2000 2000" {...props}>
      <path
        d="M1000 1436c-16.4 0-32.8-6.2-45.3-18.7l-744-744c-25-25-25-65.5 0-90.5s65.5-25 90.5 0l698.7 698.7 698.7-698.7c25-25 65.5-25 90.5 0s25 65.5 0 90.5l-744 744c-12.3 12.5-28.7 18.7-45.1 18.7z"
        data-original="#000000"
        xmlns="http://www.w3.org/2000/svg"
      />
    </SvgIcon>
  )
}

export default React.memo(ArrowDown)
