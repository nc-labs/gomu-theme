import React from 'react'

import { Typography as MuiTypography } from '@mui/material'

const VARIANT_MAPPING = {
  tiny: 'caption',
  caption: 'body2',
  body: 'body1',
  subtitle: 'subtitle2',
  title: 'subtitle1',
  heading: 'h6',
}

const COLOR_MAPPING = {
  default: 'common.text1',
  muted: 'common.text2',
  disabled: 'common.text3',
  primary: 'primary',
  secondary: 'secondary',
  inherit: 'inherit',
}

/**
 * @type {React.FC<ITypographyProps>}
 */
export const Typography = React.memo(
  React.forwardRef(
    ({ variant = 'body', color = 'inherit', children, component = 'p', ...props }, ref) => (
      <MuiTypography
        ref={ref}
        variant={VARIANT_MAPPING[variant]}
        color={COLOR_MAPPING[color]}
        component={component}
        {...props}
      >
        {children}
      </MuiTypography>
    )
  )
)

/**
 * @typedef {Omit<import('@mui/material').TypographyProps, 'variantMapping' | 'variant' | 'color'> & {
 * variant?: 'tiny' | 'caption' | 'body' | 'subtitle' | 'title' | 'heading'
 * color?: 'default' | 'muted' | 'disabled' | 'primary' | 'secondary' | 'inherit'
 * component?: React.ElementType
 * }} ITypographyProps
 */
