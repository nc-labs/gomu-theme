import React from 'react'

import { IconButton as MuiIconButton } from '@mui/material'

import { Icon } from './icon'

/**
 * @type {React.FC<IIconButtonProps>}
 */
export const IconButton = React.memo(({ name, family, size, ...props }) => (
  <MuiIconButton {...props}>
    <Icon {...{ name, family, size }} color="inherit" />
  </MuiIconButton>
))

/**
 * @typedef {Omit<import('@mui/material').IconButtonProps, 'size'> & import('./icon').IIConProps} IIconButtonProps
 */
