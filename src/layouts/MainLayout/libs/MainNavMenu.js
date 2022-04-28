import React, { useMemo } from 'react'

import { Stack } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Typography, FlatList, Icon } from 'components'
import { useBoolean } from 'hooks/useBoolean'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import MainNavItem from './MainNavItem'

const MainNavMenu = ({ icon, translation, items }) => {
  const { t } = useTranslation('navigator')
  const { pathname } = useLocation()
  const isActive = useMemo(
    () => items.map((item) => item.url).includes(pathname),
    [pathname, JSON.stringify(items)]
  )
  const [open, { setTrue: openMenu }] = useBoolean(isActive)

  return (
    <>
      <ListItemButton className="rounded-2" onClick={openMenu} selected={isActive && !open}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={<Typography>{t(translation)}</Typography>} />
        <Icon name={open ? 'up' : 'down'} />
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
