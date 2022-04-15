import React from 'react'

import MainContainer from 'layouts/MainLayout/libs/MainContainer'
import DynamicTable from 'modules/DynamicTable'
import todoServices from 'services/todoServices'

const BookList = () => (
  <>
    <MainContainer.Header>Books</MainContainer.Header>
    <DynamicTable service={todoServices} translation="pages/books" />
  </>
)

export default React.memo(BookList)
