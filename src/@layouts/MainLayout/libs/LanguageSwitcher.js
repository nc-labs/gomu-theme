import React, { useCallback } from 'react'
import { usePopover } from '@hooks/usePopover'
import {
  List,
  ListItemButton,
  Button,
  ListItemIcon,
  ListItemText,
  Popover,
  ListItem,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

const languages = [
  { id: 'vi', title: 'Tiếng việt', flag: '/assets/images/vn-flag.png' },
  { id: 'en', title: 'English', flag: 'assets/images/us-flag.png' },
]

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const { anchorEl, openPopover, closePopover } = usePopover()

  const currentLanguageId = i18n.language
  const currentLanguage = languages.find((lng) => lng.id === currentLanguageId)

  const handleLanguageChange = useCallback((lng) => {
    i18n.changeLanguage(lng.id)

    closePopover()
  }, [])

  return (
    <>
      <Button onClick={openPopover} variant="text">
        <img src={currentLanguage.flag} alt={currentLanguage.flag} className="w-[32px]" />
        <p className="ml-2 uppercase">{currentLanguage?.id}</p>
      </Button>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List>
          {languages.map((lang, index) => (
            <ListItem key={index}>
              <ListItemButton onClick={() => handleLanguageChange(lang)}>
                <ListItemIcon>
                  <img src={lang.flag} alt={lang.flag} className="w-[32px]" />
                </ListItemIcon>
                <ListItemText primary={lang.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  )
}

export default React.memo(LanguageSwitcher)
