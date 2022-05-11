import React from 'react'

import clsx from 'clsx'

import crudConfigs from '../configs'

const { Table, Thead, Tbody, Tr, Th, Td } = crudConfigs.table.components
const CrudDesktopTable = ({ getTableProps, getTableBodyProps, headerGroups, rows, prepareRow }) => (
  <Table {...getTableProps()} className="hidden sm:table">
    <Thead className="bg-background">
      {headerGroups.map((headerGroup) => (
        <Tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <Th
              {...column.getHeaderProps()}
              width={column.width}
              className={clsx('font-bold', column.className)}
            >
              {column.render('Header')}
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>

    <Tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row)
        return (
          <Tr {...row.getRowProps()}>
            {row.cells.map((cell) => (
              <Td
                {...cell.getCellProps()}
                width={cell.column.width}
                className={cell.column.className}
              >
                {cell.render('Cell')}
              </Td>
            ))}
          </Tr>
        )
      })}
    </Tbody>
  </Table>
)

export default React.memo(CrudDesktopTable)
