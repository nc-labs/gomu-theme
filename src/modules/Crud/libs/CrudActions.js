import React, { useCallback } from 'react'

import { Stack } from '@mui/material'
import { IconButton } from 'components'

import { useCrudNavigate } from '../hooks/useCrudNavigate'

const CrudActions = ({ id, useRecordMutations }) => {
  const { toEditPage } = useCrudNavigate()
  const {
    deleteRecordMutation: { mutate },
  } = useRecordMutations()
  const deleteRecord = useCallback(() => mutate(id), [id])
  const editRecord = useCallback(() => toEditPage(id), [id])

  return (
    <Stack direction="row" spacing={1} className="items-center float-right">
      <IconButton size="small" color="success" name="edit" onClick={editRecord} />
      <IconButton size="small" color="error" name="delete" onClick={deleteRecord} />
    </Stack>
  )
}

export default React.memo(CrudActions)
