import React, { useState, useMemo } from 'react'

import { Stack } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import clsx from 'clsx'
import { Typography, FlatList } from 'modules/components'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import MainNavItem from './MainNavItem'

const MainNavMenu = ({ icon, translation, items }) => {
  const { pathname } = useLocation()
  const isActive = useMemo(
    () => items.map((item) => item.url).includes(pathname),
    [pathname, JSON.stringify(items)]
  )
  const { t } = useTranslation('navigator')
  const [open, setOpen] = useState(isActive)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItemButton className="rounded-2" onClick={handleClick} selected={isActive && !open}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={<Typography>{t(translation)}</Typography>} />
        <i className={clsx('icon-medium', open ? 'icon-up' : 'icon-down')} />
      </ListItemButton>

      <Collapse in={open} className="pl-8">
        <List component={Stack} spacing={1} disablePadding>
          <FlatList data={items} renderItems={(item) => <MainNavItem {...item} />} />
        </List>
      </Collapse>
    </>
  )
}

export default React.memo(MainNavMenu)
