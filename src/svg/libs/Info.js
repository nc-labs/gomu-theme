import React from 'react'

import { SvgIcon } from '@mui/material'

function Info(props) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12 2.5a9.5 9.5 0 109.5 9.5A9.511 9.511 0 0012 2.5zm0 18a8.5 8.5 0 118.5-8.5 8.51 8.51 0 01-8.5 8.5z"
        data-original="#000000"
      ></path>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M14 16.5h-1.5V11a.5.5 0 00-.5-.5h-2a.5.5 0 000 1h1.5V17a.5.5 0 00.5.5h2a.5.5 0 000-1zM12 9.5A1.5 1.5 0 1010.5 8 1.5 1.5 0 0012 9.5zm0-2a.5.5 0 11-.5.5.5.5 0 01.5-.5z"
        data-original="#000000"
      ></path>
    </SvgIcon>
  )
}

export default React.memo(Info)
