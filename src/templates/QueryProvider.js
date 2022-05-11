import React from 'react'

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
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      {children}
    </QueryClientProvider>
  </React.StrictMode>
)

export default React.memo(QueryProvider)
