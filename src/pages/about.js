import React from 'react'

import { Typography } from '@mui/material'
import { useMainLayoutConfigs } from 'layouts/MainLayout/context'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  useMainLayoutConfigs({
    headerTitle: 'About Page',
    cardTitle: 'About Card',
  })

  return <Typography>About {t('app')}</Typography>
}

export default React.memo(About)
