import React, { useEffect, useRef } from 'react'

import { Paper } from '@mui/material'
import { get } from 'lodash'
import { useTable, useRowSelect } from 'react-table'

import crudConfigs from '../configs'

import CrudActions from './CrudActions'
import CrudDesktopTable from './CrudDesktopTable'
import CrudMobileTable from './CrudMobileTable'
import Pagination from './Pagination'

const { Checkbox } = crudConfigs.table.components

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef()
  const resolvedRef = ref || defaultRef

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return <Checkbox ref={resolvedRef} {...rest} />
})

/** @type {React.FC<CrudTableProps>}  */
const CrudTable = ({ page }) => {
  const { useRecordMutations, useRecordList, useColumns, listOptions } = page
  const columns = useColumns()
  const { data } = useRecordList()

  const tableMethods = useTable(
    {
      columns,
      data: data.content,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        ...(listOptions.selectable
          ? [
              {
                id: 'selection',
                Header: ({ getToggleAllRowsSelectedProps }) => (
                  <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                ),
                Cell: ({ row }) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />,
                width: 1,
                className: 'while-space-nowrap',
              },
            ]
          : []),
        ...columns,
        {
          id: 'actions',
          Header: () => <></>,
          Cell: ({ row }) => (
            <CrudActions id={get(row, 'original.id')} useRecordMutations={useRecordMutations} />
          ),
          width: 1,
          className: 'while-space-nowrap',
        },
      ])
    }
  )

  return (
    <>
      <Paper className="overflow-hidden border-b-0 border-1 border-divider">
        <CrudDesktopTable {...tableMethods} />
        <CrudMobileTable {...tableMethods} />
      </Paper>
      {listOptions.pagination && <Pagination useRecordList={useRecordList} />}
    </>
  )
}

export default React.memo(CrudTable)

/**
 * @typedef CrudTableProps
 * @type {object}
 * @property {import('modules/Crud/services/CrudPages').default} page
 */
