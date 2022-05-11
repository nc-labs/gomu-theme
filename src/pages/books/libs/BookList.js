import React from 'react'

import { CrudTable } from 'modules/Crud'

import todoPages from '../todoPages'

const BookList = () => <CrudTable page={todoPages} />

export default React.memo(BookList)
