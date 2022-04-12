import React, { useCallback } from 'react'

import { List, ListItemButton } from '@mui/material'
import Button from '@mui/material/Button'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { usePopover } from 'hooks/usePopover'
import { useTranslation } from 'react-i18next'
import Svg from 'svg'

const languages = [
  { id: 'vi', title: 'Tiếng việt', flag: <Svg.VietNamFlag /> },
  { id: 'en', title: 'English', flag: <Svg.USFlag /> },
]

export const LanguageSwitcher = React.memo(() => {
  const { i18n } = useTranslation()

  const currentLanguageId = i18n.language
  const currentLanguage = languages.find((lng) => lng.id === currentLanguageId)
  const { popoverProps, openPopover, closePopover } = usePopover()

  const handleLanguageChange = useCallback((lng) => {
    i18n.changeLanguage(lng.id)

    closePopover()
  }, [])

  return (
    <>
      <Button className="w-64 h-40" onClick={openPopover} variant="text">
        {currentLanguage?.flag}
        <Typography sx={{ ml: 3 }}>{currentLanguage?.id}</Typography>
      </Button>

      <Popover {...popoverProps}>
        <List>
          {languages.map((lng) => (
            <ListItemButton key={lng.id} onClick={() => handleLanguageChange(lng)}>
              <ListItemIcon className="min-w-40">{lng.flag}</ListItemIcon>
              <ListItemText primary={lng.title} />
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </>
  )
})
