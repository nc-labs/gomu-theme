import React from 'react'

import { SvgIcon } from '@mui/material'

function DoubleDown(props) {
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
        d="M64 104a3.988 3.988 0 01-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0L64 94.344l37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40A3.988 3.988 0 0164 104zm2.828-33.172l40-40c1.563-1.563 1.563-4.094 0-5.656s-4.094-1.563-5.656 0L64 62.344 26.828 25.172c-1.563-1.563-4.094-1.563-5.656 0s-1.563 4.094 0 5.656l40 40C61.953 71.609 62.977 72 64 72s2.047-.391 2.828-1.172z"
        data-original="#000000"
      ></path>
    </SvgIcon>
  )
}

export default React.memo(DoubleDown)
