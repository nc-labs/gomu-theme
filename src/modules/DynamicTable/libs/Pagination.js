import React from 'react'

import { Stack, Typography, Pagination as MuiPagination, Select, MenuItem } from '@mui/material'
import { useDynamicTableState } from 'modules/DynamicTable/context'
import { useTranslation } from 'react-i18next'

const LIMIT_OPTIONS = [10, 20, 30]

const Pagination = () => {
  const { service } = useDynamicTableState()
  const { data, onLimitChange, onPageChange } = service.useRecordList()
  const { t } = useTranslation('components')
  const { page, limit, totalPages } = data

  return (
    <Stack
      direction="row"
      p={3}
      alignItems="center"
      justifyContent={{ xs: 'center', md: 'flex-end' }}
      spacing={3}
    >
      <MuiPagination
        shape="rounded"
        color="primary"
        page={page || 1}
        count={page > totalPages ? page : totalPages}
        onChange={onPageChange}
      />

      <Typography component="span">{t('dynamic_table.items_per_page')}:</Typography>

      <Select value={limit || 10} onChange={onLimitChange} className="h-[32px]">
        {LIMIT_OPTIONS.map((value) => (
          <MenuItem value={value} key={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  )
}

export default React.memo(Pagination)
