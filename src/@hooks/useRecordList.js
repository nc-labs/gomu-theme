import { useCallback, useMemo } from 'react'

import { get, mapValues } from 'lodash'
import { useQuery } from 'react-query'

import { useUrlState } from './useUrlState'

const PLACEHOLDER_DATA = {
  contents: [],
  totalItems: 0,
  totalPages: 1,
  page: 1,
  pageSize: 10,
}

export const useRecordList = (name, service) => {
  const pageKey = ['page', name].join('__')
  const pageSizeKey = ['pageSize', name].join('__')

  const [params, setParams] = useUrlState({
    [pageKey]: PLACEHOLDER_DATA.page.toString(),
    [pageSizeKey]: PLACEHOLDER_DATA.pageSize.toString(),
  })

  const page = useMemo(
    () => parseInt(get(params, pageKey)) || PLACEHOLDER_DATA.page,
    [(pageKey, params?.[pageKey])]
  )

  const pageSize = useMemo(
    () => parseInt(get(params, pageSizeKey)) || PLACEHOLDER_DATA.pageSize,
    [(pageKey, params?.[pageSizeKey])]
  )

  const recordListQuery = useQuery({
    queryKey: [name, 'list', { page, pageSize }],
    queryFn: async () => {
      try {
        const listRecordResponse = await service.list({ page, pageSize })
        return mapValues(PLACEHOLDER_DATA, (val, key) => get(listRecordResponse, key) || val)
      } catch {
        return PLACEHOLDER_DATA
      }
    },
    placeholderData: { ...PLACEHOLDER_DATA, page, pageSize },
    keepPreviousData: true,
  })

  const onPageChange = useCallback(
    (nextPage) => {
      setParams({
        [pageKey]: nextPage,
      })
    },
    [pageKey]
  )

  const onPageSizeChange = useCallback(
    (newPageSize) => {
      setParams({
        [pageKey]: 1,
        [pageSizeKey]: newPageSize,
      })
    },
    [pageKey, pageSizeKey]
  )

  return { ...recordListQuery, onPageChange, onPageSizeChange }
}
