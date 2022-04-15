import React from 'react'

import { TableCell, CardMedia } from '@mui/material'
import { Typography } from 'components'
import { get } from 'lodash'
import { formatDate, formatDatetime } from 'utils/datetime'

const RowAttribute = ({ record, attribute }) => {
  const [attrName, attrType] = attribute.split('::')
  const value = get(record, attrName)

  switch (attrType) {
    case 'img':
      return (
        <TableCell>
          <CardMedia src={value} component="img" className="h-[52px]" />
        </TableCell>
      )

    case 'date':
      return (
        <TableCell>
          <Typography>{formatDate(value)}</Typography>
        </TableCell>
      )

    case 'datetime':
      return (
        <TableCell>
          <Typography>{formatDatetime(value)}</Typography>
        </TableCell>
      )

    default:
      return (
        <TableCell>
          <Typography>{value?.toString?.() || value}</Typography>
        </TableCell>
      )
  }
}

export default React.memo(RowAttribute)
