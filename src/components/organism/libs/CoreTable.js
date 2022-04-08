import React from 'react'

import { Table, TableCell, TableHead, TableRow, TableBody, CardMedia, Paper } from '@mui/material'
import { Typography } from 'components/atoms'
import MAIN_LAYOUT_CONFIGS from 'layouts/MainLayout/configs'
import { get } from 'lodash'
import { formatDate, formatDatetime } from 'utils/date'

const CoreTable = ({ data, columns }) => (
  <Paper sx={{ overflow: 'hidden', border: (theme) => `1px solid ${theme.palette.divider}` }}>
    <Table>
      <TableHead sx={{ bgcolor: 'background.default', height: MAIN_LAYOUT_CONFIGS.toolbarHeight }}>
        <TableRow>
          {columns.map((column, index) => (
            <TableCell key={index}>
              <Typography fontWeight="bold">{column.split('::')[0]}</Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((record, bookIndex) => (
          <TableRow key={bookIndex}>
            {columns.map((column, columnIndex) => {
              const [name, type] = column.split('::')
              const value = get(record, name)

              switch (type) {
                case 'img':
                  return (
                    <TableCell key={columnIndex}>
                      <CardMedia src={value} component="img" sx={{ height: 52 }} />
                    </TableCell>
                  )

                case 'date':
                  return (
                    <TableCell key={columnIndex}>
                      <Typography>{formatDate(value)}</Typography>
                    </TableCell>
                  )

                case 'datetime':
                  return (
                    <TableCell key={columnIndex}>
                      <Typography>{formatDatetime(value)}</Typography>
                    </TableCell>
                  )

                default:
                  return (
                    <TableCell key={columnIndex}>
                      <Typography>{value}</Typography>
                    </TableCell>
                  )
              }
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
)

export default React.memo(CoreTable)
