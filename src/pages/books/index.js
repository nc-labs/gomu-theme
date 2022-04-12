import React from 'react'

import { CoreTable } from 'components'
import MainContainer from 'layouts/MainLayout/libs/MainContainer'

import books from './book_data.json'

const ListBook = () => {
  const columns = ['title', 'author', 'date::date', 'pages']

  return (
    <>
      <MainContainer.Header>Books</MainContainer.Header>
      <CoreTable translation="pages/books" data={books} columns={columns} />
    </>
  )
}

export default React.memo(ListBook)
