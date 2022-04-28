import React, { useMemo } from 'react'

import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Typography, Link } from 'modules/components'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const MainNavItem = ({ icon, translation, url }) => {
  const { t } = useTranslation('navigator')
  const { pathname } = useLocation() || {}
  const isActive = useMemo(() => pathname === url, [pathname, url])

  return (
    <Link to={url} alt={translation}>
      <ListItemButton className="rounded-2" selected={isActive}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={<Typography>{t(translation)}</Typography>} />
      </ListItemButton>
    </Link>
  )
}

export default React.memo(MainNavItem)
