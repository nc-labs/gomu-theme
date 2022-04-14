import React, { useCallback, useMemo } from 'react'

import {
  Stack,
  Typography,
  Pagination as MuiPagination,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material'
import { useUrlState } from 'hooks/useUrlState'
import { get } from 'lodash'
import { useTranslation } from 'react-i18next'

const LIMIT_OPTIONS = [10, 20, 30]

const Pagination = ({ tableName = 'core-pagination', totalItem }) => {
  const { t } = useTranslation('components')
  const [params, setParams] = useUrlState({ [tableName]: { page: '1', limit: '10' } })

  const { page, limit, count } = useMemo(() => {
    const page = parseInt(get(params, `${tableName}.page`)) || 0
    const limit = parseInt(get(params, `${tableName}.limit`)) || 0

    return {
      page,
      limit,
      count: limit ? Math.ceil(totalItem / limit) : 0,
    }
  }, [JSON.stringify(params)])

  const pageInfos = useMemo(
    () => ({ from: (page - 1) * limit + 1, to: page * limit, totalItem }),
    [page, limit, totalItem]
  )

  const onPageChange = useCallback((_e, nextPage) => {
    setParams({
      [tableName]: {
        page: nextPage,
      },
    })
  }, [])

  const onLimitChange = useCallback((e) => {
    setParams({
      [tableName]: {
        limit: e.target.value,
      },
    })
  }, [])

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
        page={page}
        count={count}
        onChange={onPageChange}
      />

      <Typography component="span">{t('pagination.page_infos', pageInfos)}.</Typography>
      <Typography component="span">{t('pagination.items_per_page')}:</Typography>

      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={limit}
          onChange={onLimitChange}
        >
          {LIMIT_OPTIONS.map((value) => (
            <MenuItem value={value} key={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  )
}

export default React.memo(Pagination)
