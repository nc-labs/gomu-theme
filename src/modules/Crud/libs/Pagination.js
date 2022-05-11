import React from 'react'

import { Stack, Typography, Pagination as MuiPagination, Select, MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'

const LIMIT_OPTIONS = [10, 20, 30]

const Pagination = ({ useRecordList }) => {
  const { data, onLimitChange, onPageChange } = useRecordList()
  const { t } = useTranslation('components')
  const { page, limit, totalPages } = data

  return (
    <div className="flex flex-col items-center justify-center p-3 space-y-3 sm:justify-end sm:space-x-3 sm:space-y-0 sm:flex-row">
      <MuiPagination
        shape="rounded"
        color="primary"
        page={page || 1}
        count={page > totalPages ? page : totalPages}
        onChange={onPageChange}
      />

      <span className="space-x-3">
        <Typography component="span">{t('dynamic_table.items_per_page')}:</Typography>

        <Select value={limit || 10} onChange={onLimitChange} className="h-[32px]">
          {LIMIT_OPTIONS.map((value) => (
            <MenuItem value={value} key={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </span>
    </div>
  )
}

export default React.memo(Pagination)
