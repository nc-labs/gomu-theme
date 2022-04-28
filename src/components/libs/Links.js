import React from 'react'

import { Button } from '@mui/material'
import clsx from 'clsx'
import { Typography } from 'components'
import { Link as RouterLink } from 'react-router-dom'

/** @type {React.FC<ILink>} */
export const Link = React.memo(
  ({ reloadDocument, replace, state, to, sx, underline = false, alt, ...props }) => (
    <Typography
      {...props}
      className={clsx('cursor-pointer', underline && 'underline', props.className)}
      component={RouterLink}
      {...{ reloadDocument, replace, state, to }}
    />
  )
)

/** @type {React.FC<IButtonLink>} */
export const ButtonLink = React.memo(({ reloadDocument, replace, state, to, sx, ...props }) => (
  <RouterLink {...{ reloadDocument, replace, state, to }}>
    <Button {...props} />
  </RouterLink>
))

/**
 * @typedef {import('./Typographys').ITypographyProps & import('react-router-dom').LinkProps & {underline?: boolean, alt: string}} ILink
 * @typedef {import('@mui/material').ButtonProps & import('react-router-dom').LinkProps & {alt: string}} IButtonLink
 */
