import React from 'react'

import { Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Typography } from './typographys'

/**
 * @type {React.FC<ILink>}
 */
export const Link = React.memo(
  ({ reloadDocument, replace, state, to, children, sx, underline = false, alt, ...props }) => (
    <RouterLink {...{ reloadDocument, replace, state, to }}>
      <Typography
        {...props}
        sx={[
          {
            cursor: 'pointer',
            textDecoration: underline ? 'underline' : undefined,
            ...(typeof sx === 'object' && !Array.isArray(sx) ? sx : {}),
          },
          ...(Array.isArray(sx) ? sx : []),
        ]}
        component="span"
      >
        {children}
      </Typography>
    </RouterLink>
  )
)

/**
 * @type {React.FC<IButtonLink>}
 */
export const ButtonLink = React.memo(
  ({ reloadDocument, replace, state, to, children, sx, ...props }) => (
    <RouterLink {...{ reloadDocument, replace, state, to }}>
      <Button {...props}>{children}</Button>
    </RouterLink>
  )
)

/**
 * @typedef {import('./typographys').ITypographyProps & import('react-router-dom').LinkProps & {underline?: boolean, alt: string}} ILink
 * @typedef {import('@mui/material').ButtonProps & import('react-router-dom').LinkProps & {alt: string}} IButtonLink
 */
