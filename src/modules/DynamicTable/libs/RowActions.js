import React from 'react'

import { TableCell, Stack } from '@mui/material'
import { IconButton } from 'components'
import { useCrudNavigate } from 'hooks/useCrudNavigate'

import { useDynamicTableState } from '../context'

const RowActions = ({ id }) => {
  const { toEditPage } = useCrudNavigate()
  const { service } = useDynamicTableState()
  const {
    deleteRecordMutation: { mutate: deleteRecord },
  } = service.useRecordMutations()

  return (
    <TableCell>
      <Stack direction="row" spacing={1} width="fit-content" className="items-center float-right">
        <IconButton size="small" color="info" name="view" onClick={() => toEditPage(id)} />
        <IconButton size="small" color="success" name="edit" onClick={() => toEditPage(id)} />
        <IconButton size="small" color="error" name="delete" onClick={() => deleteRecord(id)} />
      </Stack>
    </TableCell>
  )
}

export default React.memo(RowActions)
