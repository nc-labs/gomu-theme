import React from 'react'

import CoreTable from 'components/organism/libs/CoreTable'
import { useMainLayoutConfigs } from 'layouts/MainLayout/context'

import books from './book_data.json'

const ListBook = () => {
  const columns = ['cover::img', 'title', 'author', 'date::date', 'date::datetime', 'pages']

  useMainLayoutConfigs({
    headerTitle: 'Book management',
    cardTitle: 'Book',
  })

  return <CoreTable data={books} columns={columns} />
}

export default React.memo(ListBook)
