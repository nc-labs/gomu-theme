import React, { useState, useMemo } from 'react'

import { Stack } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Icon, Typography } from 'components/atoms'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import MainNavItem from './MainNavItem'

/**
 * @type {React.FC<INavMenu>}
 */
const MainNavMenu = ({ icon, translation, items }) => {
  const { pathname } = useLocation()
  const isActive = useMemo(
    () => items.map((i) => i.url).includes(pathname),
    [pathname, JSON.stringify(items)]
  )
  const { t } = useTranslation('navigator')
  const [open, setOpen] = useState(isActive)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItemButton sx={{ borderRadius: 1 }} onClick={handleClick} selected={isActive && !open}>
        <ListItemIcon sx={{ minWidth: 32, width: 32 }}>
          {typeof icon === 'string' ? <Icon name={icon} /> : icon}
        </ListItemIcon>
        <ListItemText primary={<Typography>{t(translation)}</Typography>} />
        <Icon name={open ? 'angle-up' : 'angle-down'} />
      </ListItemButton>

      <Collapse in={open} sx={{ pl: 8 }}>
        <List component={Stack} spacing={1} disablePadding>
          {items.map((item, index) => (
            <MainNavItem {...item} key={index} />
          ))}
        </List>
      </Collapse>
    </>
  )
}

export default React.memo(MainNavMenu)

/**
 * @typedef {{icon: React.ReactNode, translation: string, items: import('./MainNavItem').INavItem[]}} INavMenu
 */