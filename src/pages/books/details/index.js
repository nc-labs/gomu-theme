import { ROUTE_PATHS } from 'routes/constants'
import { generatePageConfigs } from 'routes/helpers'

const BookDetailsPage = generatePageConfigs(() => import('./BookDetails'), {
  path: ROUTE_PATHS.BOOK_DETAILS,
})

export default BookDetailsPage
