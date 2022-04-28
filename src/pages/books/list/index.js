import { ROUTE_PATHS } from 'routes/constants'
import { createPage } from 'routes/helpers'

const BookListPage = createPage(() => import('./BookList'), {
  path: ROUTE_PATHS.BOOK_LIST,
  translation: 'book_list',
  icon: 'info',
})

export default BookListPage
