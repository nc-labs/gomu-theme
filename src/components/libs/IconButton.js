import React from 'react'

import { IconButton as MuiIconButton } from '@mui/material'

import Icon from './Icon'

/**
 * @type {React.FC<IconButtonProps>}
 */
const IconButton = ({ name, size, ...props }) => (
  <MuiIconButton size={size} {...props}>
    <Icon name={name} fontSize={size} />
  </MuiIconButton>
)

export default React.memo(IconButton)

/**
 * @typedef {import('@mui/material').IconButtonProps} MuiIconButtonProps
 * @typedef {import('./Icon').SvgNames} SvgNames
 * @typedef {{name: SvgNames} & MuiIconButtonProps} IconButtonProps
 */
