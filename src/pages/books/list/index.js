import { ROUTE_PATHS } from 'routes/constants'
import { generatePageConfigs } from 'routes/helpers'

const BookListPage = generatePageConfigs(() => import('./BookList'), {
  path: ROUTE_PATHS.BOOK_LIST,
  translation: 'book_list',
  icon: 'info',
})

export default BookListPage
