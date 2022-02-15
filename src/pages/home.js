import React from 'react'

import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return <Typography>{t('app')}</Typography>
}

export default React.memo(Home)
