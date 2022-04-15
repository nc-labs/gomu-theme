import React, { useCallback, useMemo } from 'react'

import { TableCell, Checkbox } from '@mui/material'

import { useDynamicTableState } from '../context'

const HeaderCheckbox = () => {
  const { selected, setSelected, selectable, service } = useDynamicTableState()
  const {
    data: { content },
  } = service.useRecordList()

  // true: khi tất cả các row được check
  const checked = useMemo(
    () => selected.length !== 0 && selected.length === content.length,
    [selected.length, content.length]
  )

  // true: khi ít nhất 1 row được check
  const indeterminate = useMemo(
    () => selected.length !== 0 && selected.length !== content.length,
    [selected.length, content.length]
  )

  // nếu đã check: bỏ check tất cả các row
  // nếu chưa check: check tất cả các row
  const onChange = useCallback(() => {
    const newValues = selected.length === content.length ? [] : content.map((el) => el?.id)
    setSelected(newValues)
  }, [JSON.stringify({ content, selected })])

  if (!selectable) return <></>

  return (
    <TableCell className="w-[42px] py-0 text-center">
      <Checkbox checked={checked} indeterminate={indeterminate} onChange={onChange} />
    </TableCell>
  )
}

export default React.memo(HeaderCheckbox)
