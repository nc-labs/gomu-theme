import React from 'react'

import { TableCell } from '@mui/material'
import { FlatList, Typography } from 'modules/components'
import { useTranslation } from 'react-i18next'

import { useDynamicTableState } from '../context'

const HeaderTitles = () => {
  const { columns, translation } = useDynamicTableState()
  const { t } = useTranslation(translation)

  return (
    <FlatList
      data={columns}
      renderItems={(column) => (
        <TableCell>
          <Typography fontWeight="bold">{t(`table.${column.split('::')[0]}`)}</Typography>
        </TableCell>
      )}
    />
  )
}

export default React.memo(HeaderTitles)
