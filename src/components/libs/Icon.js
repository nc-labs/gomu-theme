import React from 'react'

import { SvgIcon as MuiSvgIcon } from '@mui/material'
import { svgConfigs } from 'configs/svgConfigs'

/**
 * @type {React.FC<SvgIconProps>}
 */
const SvgIcon = ({ name, ...props }) => {
  const icon = svgConfigs[name]

  if (!icon) return <></>

  return (
    <MuiSvgIcon viewBox={icon.viewBox} {...props}>
      {icon.children?.map(({ tagName, attrs }, index) =>
        React.createElement(tagName, { ...attrs, key: index })
      )}
    </MuiSvgIcon>
  )
}

export default React.memo(SvgIcon)

/**
 * @typedef {import('@mui/material').SvgIconProps} MuiSvgIconProps
 * @typedef {keyof svgConfigs} SvgNames
 * @typedef {{name: SvgNames} & MuiSvgIconProps} SvgIconProps
 */
