import React, { useMemo } from 'react'

import MainContainer from 'layouts/MainLayout/libs/MainContainer'
import CoreTable from 'templates/CoreTable'

import books from './book_data.json'

const ListBook = () => {
  const columns = useMemo(() => ['title', 'author', 'date::date', 'pages'], [])

  return (
    <>
      <MainContainer.Header>Books</MainContainer.Header>
      <CoreTable name="books" translation="pages/books" data={books} columns={columns} />
    </>
  )
}

export default React.memo(ListBook)
