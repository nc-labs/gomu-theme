import React, { useState, useCallback } from 'react'

import { Menu as MuiMenu, MenuItem as MuiMenuItem } from '@mui/material'

export const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const isOpen = Boolean(anchorEl)

  const openMenu = useCallback((event) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const closeMenu = useCallback(() => {
    setAnchorEl(null)
  }, [])

  /**
   * @type {React.FC<MenuProps>}
   */
  const Menu = useCallback(
    ({ items = [], children, ...props }) => (
      <MuiMenu {...props} anchorEl={anchorEl} open={isOpen} onClose={closeMenu} autoFocus={false}>
        {children ||
          items.map((item, index) => (
            <MenuItem onClick={item.action} key={index}>
              {item.content}
            </MenuItem>
          ))}
      </MuiMenu>
    ),
    [isOpen]
  )

  /**
   * @type {React.FC<import('@mui/material').MenuItemProps>}
   */
  const MenuItem = useCallback(
    ({ onClick, children, ...props }) => (
      <MuiMenuItem {...props} onClick={onClick || closeMenu}>
        {children}
      </MuiMenuItem>
    ),
    []
  )

  return { isOpen, openMenu, closeMenu, Menu, MenuItem }
}

/**
 * @typedef {{content: React.ReactNode, action?: () => void}} IMenuItem
 * @typedef {Omit<import('@mui/material').MenuProps, 'anchorEl' | 'open' | 'onClose'> & {items?: IMenuItem[]}} MenuProps
 */
