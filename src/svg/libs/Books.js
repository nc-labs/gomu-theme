import * as React from 'react'

import { SvgIcon } from '@mui/material'

function Books(props) {
  return (
    <SvgIcon width={512} height={512} viewBox="0 0 64 64" {...props}>
      <g xmlns="http://www.w3.org/2000/svg" data-name="Bookshelves-book-books-education-book store">
        <path
          d="M61 54h-1V5a1 1 0 00-1-1H48V3a1 1 0 00-1-1H35a1 1 0 00-1 1v5h-9a1 1 0 00-1 1v.29l-8.5-2.28a.988.988 0 00-.75.1 1.026 1.026 0 00-.47.61L2.38 52.15a1 1 0 00.7 1.23l2.33.62H3a1 1 0 00-1 1v4a1 1 0 001 1h58a1 1 0 001-1v-4a1 1 0 00-1-1zM48 6h10v5H48zm0 7h10v34H48zm0 36h10v5H48zM36 4h10v4H36zm0 6h10v38H36zm0 40h10v4H36zM26 10h8v6h-8zm0 8h8v24h-8zm0 26h8v2h-8zm0 4h8v6h-8zM4.57 51.7L15.95 9.2l7.73 2.07-11.39 42.51zM24 17.81V54h-9.7zM60 58H4v-2h56z"
          data-original="#000000"
        />
        <path
          d="M39 44h4a1 1 0 001-1V15a1 1 0 00-1-1h-4a1 1 0 00-1 1v28a1 1 0 001 1zm1-28h2v26h-2zM8.504 48.626l1.036-3.864 1.932.518-1.036 3.864zM10.313 41.86l6.216-23.183 1.932.518-6.216 23.184zM17.303 15.777l.777-2.898 1.932.518-.777 2.898z"
          data-original="#000000"
        />
      </g>
    </SvgIcon>
  )
}

export default React.memo(Books)
