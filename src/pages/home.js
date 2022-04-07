import React from 'react'

import { Typography } from '@mui/material'
import { useMainLayoutConfigs } from 'layouts/MainLayout/context'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  useMainLayoutConfigs({
    headerTitle: 'Home Page',
    cardTitle: 'Home Card',
  })

  return <Typography>Home {t('app')}</Typography>
}

export default React.memo(Home)
