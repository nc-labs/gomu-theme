import { format } from 'date-fns'

import i18n from '../locales'

const parseDateObject = (date, formatString) => {
  try {
    return format(new Date(date), formatString)
  } catch {
    return ''
  }
}

export const formatDate = (date) => parseDateObject(date, i18n.t('date_format') || 'dd/MM/yyyy')
export const formatDatetime = (date) =>
  parseDateObject(date, i18n.t('datetime_format') || 'HH:mm dd/MM/yyyy')
export const formatTime = (date) => parseDateObject(date, i18n.t('time_format') || 'HH:mm')
