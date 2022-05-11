import { ROUTE_PATHS } from 'routes/constants'
import { createPage } from 'routes/helpers'

export const BookListPage = createPage(() => import('./libs/BookList'), {
  path: ROUTE_PATHS.BOOK_LIST,
  translation: 'book_list',
  icon: 'info',
})

export const BookDetailsPage = createPage(() => import('./libs/BookDetails'), {
  path: ROUTE_PATHS.BOOK_DETAILS,
})
