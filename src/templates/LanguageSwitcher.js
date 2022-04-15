import React, { useCallback } from 'react'

import { List, ListItemButton } from '@mui/material'
import Button from '@mui/material/Button'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { FlatList } from 'components'
import { usePopover } from 'hooks/usePopover'
import { useTranslation } from 'react-i18next'

import Icon from '../components/libs/Icon'

const languages = [
  { id: 'vi', title: 'Tiếng việt', flag: <Icon name="vn-flag" /> },
  { id: 'en', title: 'English', flag: <Icon name="us-flag" /> },
]

const LanguageSwitcher = () => {
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
      <Button onClick={openPopover} variant="text">
        {currentLanguage?.flag}
        <Typography className="ml-3">{currentLanguage?.id}</Typography>
      </Button>

      <Popover {...popoverProps}>
        <List>
          <FlatList
            data={languages}
            renderItems={(lng) => (
              <ListItemButton onClick={() => handleLanguageChange(lng)}>
                <ListItemIcon>{lng.flag}</ListItemIcon>
                <ListItemText primary={lng.title} />
              </ListItemButton>
            )}
          />
        </List>
      </Popover>
    </>
  )
}

export default React.memo(LanguageSwitcher)
