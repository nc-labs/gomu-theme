import React from 'react'

import { CardMedia } from '@mui/material'
import { get } from 'lodash'
import { formatDate, formatDatetime, formatTime } from 'utils/datetime'

const RowAttribute = ({ record, attribute }) => {
  const [attrName, attrType] = attribute.split('::')
  const value = get(record, attrName)

  switch (attrType) {
    case 'img':
      return <CardMedia src={value} component="img" className="h-[52px]" />
    case 'date':
      return formatDate(value)
    case 'datetime':
      return formatDatetime(value)
    case 'time':
      return formatTime(value)
    default:
      return value?.toString?.() || value
  }
}

export default React.memo(RowAttribute)
