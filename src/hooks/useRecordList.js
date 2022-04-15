import { useCallback, useMemo } from 'react'

import { useUrlState } from 'hooks/useUrlState'
import { get, mapValues } from 'lodash'
import { useQuery } from 'react-query'

const PLACEHOLDER_DATA = {
  content: [],
  totalItems: 0,
  totalPages: 1,
  page: 1,
  limit: 10,
}

export const useRecordList = (service) => {
  const pageKey = ['page', service.name].join('__')
  const limitKey = ['limit', service.name].join('__')

  const [params, setParams] = useUrlState({
    [pageKey]: PLACEHOLDER_DATA.page.toString(),
    [limitKey]: PLACEHOLDER_DATA.limit.toString(),
  })

  const page = useMemo(
    () => parseInt(get(params, pageKey)) || PLACEHOLDER_DATA.page,
    [(pageKey, JSON.stringify(params))]
  )

  const limit = useMemo(
    () => parseInt(get(params, limitKey)) || PLACEHOLDER_DATA.limit,
    [(pageKey, JSON.stringify(params))]
  )

  const recordListQuery = useQuery({
    queryKey: [service.name, 'list', { page, limit }],
    queryFn: async () => {
      try {
        const listRecordResponse = await service.list({ page, limit })
        return mapValues(PLACEHOLDER_DATA, (val, key) => get(listRecordResponse, key) || val)
      } catch {
        return PLACEHOLDER_DATA
      }
    },
    placeholderData: { ...PLACEHOLDER_DATA, page, limit },
    keepPreviousData: true,
  })

  const onPageChange = useCallback(
    (_e, nextPage) => {
      setParams({
        [pageKey]: nextPage,
      })
    },
    [pageKey]
  )

  const onLimitChange = useCallback(
    (e) => {
      setParams({
        [pageKey]: 1,
        [limitKey]: e.target.value,
      })
    },
    [pageKey, limitKey]
  )

  return { ...recordListQuery, onPageChange, onLimitChange }
}
