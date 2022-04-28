import React from 'react'

import { SvgIcon as MuiSvgIcon } from '@mui/material'
import { svgConfigs } from 'configs/svgConfigs'

import FlatList from './FlatList'

/** @type {React.FC<SvgIconProps>} */
const SvgIcon = ({ name, ...props }) => {
  const icon = svgConfigs[name]

  if (!icon) return <></>

  return (
    <MuiSvgIcon viewBox={icon.viewBox} {...props}>
      <FlatList
        data={icon.children}
        renderItems={({ tagName, attrs }) => React.createElement(tagName, attrs)}
      />
    </MuiSvgIcon>
  )
}

export default React.memo(SvgIcon)

/**
 * @typedef {import('@mui/material').SvgIconProps} MuiSvgIconProps
 * @typedef {keyof svgConfigs} TIconNames
 * @typedef {{name: TIconNames} & MuiSvgIconProps} SvgIconProps
 */
