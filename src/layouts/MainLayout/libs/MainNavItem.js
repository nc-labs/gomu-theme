import React, { useMemo } from 'react'

import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Icon, Typography, Link } from 'components/atoms'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

/**
 * @type {React.FC<INavItem>}
 */
const MainNavItem = ({ icon, translation, url }) => {
  const { t } = useTranslation('navigator')
  const { pathname } = useLocation() || {}
  const isActive = useMemo(() => pathname === url, [pathname, url])

  return (
    <Link to={url} alt={translation}>
      <ListItemButton sx={{ borderRadius: 1 }} selected={isActive}>
        <ListItemIcon sx={{ minWidth: 32, width: 32 }}>
          {typeof icon === 'string' ? <Icon name={icon} /> : icon}
        </ListItemIcon>
        <ListItemText primary={<Typography>{t(translation)}</Typography>} />
      </ListItemButton>
    </Link>
  )
}

export default React.memo(MainNavItem)

/**
 * @typedef {{icon: React.ReactNode, translation: string, url: string}} INavItem
 */