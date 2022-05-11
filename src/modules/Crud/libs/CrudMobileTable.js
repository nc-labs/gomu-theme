import React from 'react'

import crudConfigs from '../configs'

const { Table, Tbody, Tr, Td } = crudConfigs.table.components

const CrudMobileTable = ({ getTableProps, getTableBodyProps, rows, prepareRow }) => (
  <Table {...getTableProps()} className="table sm:hidden">
    {rows.map((row) => {
      prepareRow(row)

      return (
        <Tbody {...getTableBodyProps()} key={row.id} className="even:bg-background border-divider">
          {row.cells.map((cell, index) => (
            <Tr key={index}>
              <Td
                {...cell.column.getHeaderProps()}
                width="1"
                className="font-bold whitespace-nowrap"
              >
                {cell.column.render('Header')}
              </Td>

              <Td {...cell.getCellProps()} width="auto">
                {cell.render('Cell')}
              </Td>
            </Tr>
          ))}
        </Tbody>
      )
    })}
  </Table>
)

export default React.memo(CrudMobileTable)
