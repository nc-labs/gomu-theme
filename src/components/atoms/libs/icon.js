import React from 'react'

import { Typography } from '@mui/material'
import clsx from 'clsx'

/**
 * @type {React.FC<IIcon>}
 */
export const Icon = React.memo(
  ({ name, family = 'solid', className, size = 'medium', ...props }) => (
    <Typography
      {...props}
      className={clsx(`fa-${family}`, `fa-${name}`, className)}
      variant={`icon-${size}`}
      component="span"
    />
  )
)

/**
 * @typedef {{name: string, family?: 'solid' | 'regular' | 'brands', size?: 'small' | 'medium' | 'large'}} IIConProps
 */
