import React from 'react'

import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  CardMedia,
  Paper,
  Pagination,
  Stack,
} from '@mui/material'
import { Typography } from 'components'
import MAIN_LAYOUT_CONFIGS from 'layouts/MainLayout/configs'
import { get } from 'lodash'
import { useTranslation } from 'react-i18next'
import { formatDate, formatDatetime } from 'utils/date'

const { toolbarHeight, headerHeight, footerHeight } = MAIN_LAYOUT_CONFIGS

const CoreTable = ({
  data,
  columns,
  translation,
  selectable = true,
  page = 1,
  totalItem = 100,
  limit = 10,
}) => {
  const { t } = useTranslation(translation)

  return (
    <Paper sx={{ overflow: 'hidden' }}>
      <Paper
        sx={{
          maxHeight: `calc(100vh - ${headerHeight + footerHeight + toolbarHeight + 56}px)`,
          overflowY: 'auto',
        }}
      >
        <Table stickyHeader>
          <TableHead sx={{ height: toolbarHeight }}>
            <TableRow>
              {selectable && (
                <TableCell>
                  <Typography>select</Typography>
                </TableCell>
              )}

              {columns.map((column, index) => (
                <TableCell key={index}>
                  <Typography fontWeight="bold">{t(`table.${column.split('::')[0]}`)}</Typography>
                </TableCell>
              ))}

              <TableCell>
                <Typography>action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((record, bookIndex) => (
              <TableRow key={bookIndex}>
                {selectable && (
                  <TableCell>
                    <Typography>select</Typography>
                  </TableCell>
                )}

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

                <TableCell>
                  <Typography>action</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Stack
        direction="row"
        p={3}
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'flex-end' }}
        spacing={3}
      >
        <Typography component="span">Số bản ghi trên trang: {limit}</Typography>

        <Typography component="span">
          {(page - 1) * limit + 1}–{page * limit} trong số {totalItem}
        </Typography>

        <Pagination
          shape="rounded"
          color="primary"
          page={page}
          count={totalItem / limit}
          onChange={(_e, nextPage) => console.log(nextPage)}
        />
      </Stack>
    </Paper>
  )
}

export default React.memo(CoreTable)
