import { ROUTE_PATHS } from 'routes/constants'
import { createPage } from 'routes/helpers'

const BookDetailsPage = createPage(() => import('./BookDetails'), {
  path: ROUTE_PATHS.BOOK_DETAILS,
})

export default BookDetailsPage
