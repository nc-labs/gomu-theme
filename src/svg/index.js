import DefaultAvatar from './libs/DefaultAvatar'
import Logout from './libs/Logout'

/**
 * @type {ISvg}
 */
const Svg = {
  DefaultAvatar,
  Logout,
}

export default Svg

/**
 * @typedef {{[key: string]: import('react').FC<import('@mui/material').SvgIconProps>}} ISvg
 */
