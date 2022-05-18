import { useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'

export const useRecordDetails = (name, fetcher) => {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const recordDetailsQuery = useQuery({
    queryKey: [name, 'details', id],
    queryFn: () => fetcher(id),
    initialData: () => {
      const queriesData = queryClient.getQueriesData()

      const recordList =
        queriesData.reduce((returnData, [cacheKey, cacheData]) => {
          const [firstKey, secondKey] = cacheKey
          const isValidData = firstKey === name && secondKey === 'list'

          return [...returnData, ...(isValidData ? cacheData.content : [])]
        }, []) || []

      const cachedRecord = recordList.find((record) => record.id === parseInt(id)) || undefined
      return cachedRecord
    },
    enabled: id !== 'new',
  })

  return recordDetailsQuery
}
