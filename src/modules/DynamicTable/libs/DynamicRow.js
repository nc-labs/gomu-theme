import React from 'react'

import { TableRow } from '@mui/material'
import { FlatList } from 'components'
import { useDynamicTableState } from 'modules/DynamicTable/context'

import RowActions from './RowActions'
import RowAttribute from './RowAttribute'
import RowCheckbox from './RowCheckbox'

const DynamicRow = ({ record }) => {
  const { columns } = useDynamicTableState()

  return (
    <TableRow>
      <RowCheckbox id={record?.id} />

      <FlatList
        data={columns}
        renderItems={(attribute) => <RowAttribute record={record} attribute={attribute} />}
      />

      <RowActions id={record?.id} />
    </TableRow>
  )
}

export default React.memo(DynamicRow)
