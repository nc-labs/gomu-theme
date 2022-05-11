import { CrudPages } from 'modules/Crud'

const todoPages = new CrudPages('todos')
  .setTranslation('pages.books')
  .setListAttributes([
    { name: 'id', width: 1, className: 'whitespace-nowrap' },
    { name: 'userId', width: 1, className: 'whitespace-nowrap' },
    'title',
  ])

export default todoPages
