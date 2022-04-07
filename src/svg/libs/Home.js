import React from 'react'

import { SvgIcon } from '@mui/material'

function Home(props) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M21.82 30H10.18A5 5 0 015 25.24V19a1 1 0 012 0v6.24A3 3 0 0010.18 28h11.64A3 3 0 0025 25.24V19a1 1 0 012 0v6.24A5 5 0 0121.82 30zm7.89-13.29a1 1 0 000-1.42l-13-13a1 1 0 00-1.42 0l-13 13a1 1 0 001.42 1.42L16 4.41l12.29 12.3a1 1 0 001.42 0z"
        data-name="9-Home"
        data-original="#000000"
      ></path>
    </SvgIcon>
  )
}

export default React.memo(Home)
