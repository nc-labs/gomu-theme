import React from 'react'

import { Stack } from '@mui/material'
import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import { Typography } from 'components/atoms'
import { useTranslation } from 'react-i18next'

import MainNavItem from './MainNavItem'
import MainNavMenu from './MainNavMenu'

const MainNavGroup = ({ translation, items }) => {
  const { t } = useTranslation('navigator')

  return (
    <List
      component={Stack}
      spacing={1}
      subheader={
        <ListSubheader sx={{ display: 'flex', height: 45, px: 0, alignItems: 'center' }}>
          <Typography variant="subtitle">{t(translation)}</Typography>
        </ListSubheader>
      }
      disablePadding
    >
      {items.map((item, index) =>
        item.items ? <MainNavMenu {...item} key={index} /> : <MainNavItem {...item} key={index} />
      )}
    </List>
  )
}

export default React.memo(MainNavGroup)
