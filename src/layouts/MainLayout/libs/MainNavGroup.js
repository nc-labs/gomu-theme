import React from 'react'

import { Stack } from '@mui/material'
import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import { Typography, FlatList } from 'modules/components'
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
        <ListSubheader className="flex h-[45px] px-0 items-center">
          <Typography variant="subtitle">{t(translation)}</Typography>
        </ListSubheader>
      }
      disablePadding
    >
      <FlatList
        data={items}
        renderItems={(item) => (item.items ? <MainNavMenu {...item} /> : <MainNavItem {...item} />)}
      />
    </List>
  )
}

export default React.memo(MainNavGroup)
