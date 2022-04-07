import React from 'react'

import { SvgIcon } from '@mui/material'

function DoubleUp(props) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="#000"
        d="M104 72a3.988 3.988 0 01-2.828-1.172L64 33.656 26.828 70.828c-1.563 1.563-4.094 1.563-5.656 0s-1.563-4.094 0-5.656l40-40a3.997 3.997 0 015.656 0l40 40a3.997 3.997 0 010 5.656A3.988 3.988 0 01104 72zm2.828 30.828a3.997 3.997 0 000-5.656l-40-40a3.997 3.997 0 00-5.656 0l-40 40c-1.563 1.563-1.563 4.094 0 5.656s4.094 1.563 5.656 0L64 65.656l37.172 37.172c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172z"
        data-original="#000000"
      ></path>
    </SvgIcon>
  )
}

export default React.memo(DoubleUp)
