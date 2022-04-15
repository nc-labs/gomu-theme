import React, { useCallback, useMemo } from 'react'

import { TableCell, Checkbox } from '@mui/material'
import { uniq } from 'lodash'

import { useDynamicTableState } from '../context'

const RowCheckbox = ({ id }) => {
  const { data, selected, setSelected, selectable } = useDynamicTableState()

  // true: khi selected đã có id
  const checked = useMemo(() => selected.includes(id), [id, JSON.stringify(selected)])

  const onChange = useCallback(() => {
    const newValues = checked ? selected.filter((el) => el !== id) : uniq([...selected, id])

    setSelected(newValues)
  }, [id, checked, JSON.stringify({ data, selected })])

  if (!selectable) return <></>

  return (
    <TableCell className="w-[42px] py-0 text-center">
      <Checkbox checked={checked} onChange={onChange} />
    </TableCell>
  )
}

export default React.memo(RowCheckbox)
