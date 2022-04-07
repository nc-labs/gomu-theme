import React from 'react'

import { SvgIcon } from '@mui/material'

function Menu(props) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      {...props}
    >
      <g xmlns="http://www.w3.org/2000/svg">
        <path
          d="M174 240H66c-36.393 0-66-29.607-66-66V66C0 29.607 29.607 0 66 0h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zM66 32c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34V66c0-18.748-15.252-34-34-34zM446 240H338c-36.393 0-66-29.607-66-66V66c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zM338 32c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34V66c0-18.748-15.252-34-34-34zM392 512c-66.168 0-120-53.832-120-120s53.832-120 120-120 120 53.832 120 120-53.832 120-120 120zm0-208c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zM174 512H66c-36.393 0-66-29.607-66-66V338c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zM66 304c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34V338c0-18.748-15.252-34-34-34z"
          data-original="#000000"
        ></path>
      </g>
    </SvgIcon>
  )
}

export default React.memo(Menu)
