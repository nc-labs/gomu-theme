import React, { useState, useMemo } from 'react'

import { Stack } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Typography } from 'components/atoms'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import Svg from 'svg'

import MainNavItem from './MainNavItem'

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
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={<Typography>{t(translation)}</Typography>} />
        {open ? <Svg.ArrowUp /> : <Svg.ArrowDown />}
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
