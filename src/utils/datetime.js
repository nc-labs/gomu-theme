import { format } from 'date-fns'

import i18n from '../i18n'

export const formatDate = (date) => {
  try {
    return format(new Date(date), i18n.t('date_format') || 'dd/MM/yyyy')
  } catch {
    return ''
  }
}

export const formatDatetime = (date) => {
  try {
    return format(new Date(date), i18n.t('datetime_format') || 'dd/MM/yyyy')
  } catch {
    return ''
  }
}
