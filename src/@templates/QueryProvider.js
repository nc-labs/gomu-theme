import { memo } from 'react'
import { minutesToMilliseconds } from 'date-fns'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: minutesToMilliseconds(10),
      staleTime: minutesToMilliseconds(1),
      refetchInterval: minutesToMilliseconds(1),
      refetchOnWindowFocus: true,
    },
  },
})

const QueryProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    {children}
  </QueryClientProvider>
)

export default memo(QueryProvider)
