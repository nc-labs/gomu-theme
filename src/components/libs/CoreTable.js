import React, { useCallback, useState } from 'react'

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
  Checkbox,
} from '@mui/material'
import { Typography } from 'components'
import MAIN_LAYOUT_CONFIGS from 'layouts/MainLayout/configs'
import { get, uniq } from 'lodash'
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
  const [selected, setSelected] = useState([])

  const getHeaderCheckboxProps = useCallback(
    () => ({
      onChange: () => {
        const newValues = selected.length === data.length ? [] : data.map((el) => el?.id)
        setSelected(newValues)
      },
      checked: selected.length === data.length,
      indeterminate: selected.length !== 0 && selected.length !== data.length,
    }),
    [selected]
  )

  const getRowCheckboxProps = useCallback(
    (id) => ({
      onChange: () => {
        const newValues = selected.includes(id)
          ? selected.filter((el) => el !== id)
          : uniq([...selected, id])

        setSelected(newValues)
      },
      checked: selected.includes(id),
    }),
    [selected]
  )

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
                <TableCell sx={{ textAlign: 'center' }}>
                  <Checkbox {...getHeaderCheckboxProps()} />
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
            {data.map((record, index) => (
              <TableRow key={index}>
                {selectable && (
                  <TableCell sx={{ textAlign: 'center' }}>
                    <Checkbox {...getRowCheckboxProps(record?.id)} />
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
