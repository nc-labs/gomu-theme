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
  default: 'text.primary',
  muted: 'text.secondary',
  disabled: 'text.disabled',
  primary: 'primary',
  secondary: 'secondary',
  inherit: 'inherit',
}

/**  @type {React.FC<ITypographyProps>} */
const Typography = React.forwardRef(
  ({ variant = 'body', color = 'inherit', component = 'p', ...props }, ref) => (
    <MuiTypography
      ref={ref}
      variant={VARIANT_MAPPING[variant]}
      color={COLOR_MAPPING[color]}
      component={component}
      {...props}
    />
  )
)

export default React.memo(Typography)

/**
 * @typedef {Omit<import('@mui/material').TypographyProps, 'variantMapping' | 'variant' | 'color'>} MuiTypographyProps
 * @typedef {'tiny' | 'caption' | 'body' | 'subtitle' | 'title' | 'heading'} TVariant
 * @typedef {'default' | 'muted' | 'disabled' | 'primary' | 'secondary' | 'inherit'} TColor
 * @typedef {MuiTypographyProps & {variant?: TVariant, color?: TColor, component?: React.ElementType}} ITypographyProps
 */
