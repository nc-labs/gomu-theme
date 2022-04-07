import React from 'react'

import { CardMedia, List, ListItem, ListItemButton } from '@mui/material'
import Button from '@mui/material/Button'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { usePopover } from 'hooks/usePopover'
import { useTranslation } from 'react-i18next'

const languages = [
  { id: 'vi', title: 'Tiếng việt', flag: 'vn' },
  { id: 'en', title: 'English', flag: 'us' },
]

const Flag = ({ flag }) => (
  <CardMedia
    component="img"
    src={`assets/images/flags/${flag}.png`}
    sx={{ height: 24, width: 24 }}
  />
)

export const LanguageSwitcher = React.memo(() => {
  const { i18n } = useTranslation()

  const currentLanguageId = i18n.language
  const currentLanguage = languages.find((lng) => lng.id === currentLanguageId)
  const { popoverProps, openPopover, closePopover } = usePopover()

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng.id)

    closePopover()
  }

  return (
    <>
      <Button className="w-64 h-40" onClick={openPopover} variant="text">
        <Flag flag={currentLanguage?.flag} />
        <Typography sx={{ ml: 3 }}>{currentLanguage?.id}</Typography>
      </Button>

      <Popover {...popoverProps}>
        <List>
          {languages.map((lng) => (
            <ListItemButton key={lng.id} onClick={() => handleLanguageChange(lng)}>
              <ListItemIcon className="min-w-40">
                <Flag flag={lng.flag} />
              </ListItemIcon>
              <ListItemText primary={lng.title} />
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </>
  )
})
