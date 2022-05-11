import React from 'react'

import { Table, TableBody, TableCell, TableHead, TableRow, Checkbox } from '@mui/material'

const crudConfigs = {
  table: {
    components: {
      Table,
      Thead: TableHead,
      Tbody: TableBody,
      Tr: TableRow,
      Th: TableCell,
      Td: TableCell,
      Checkbox: React.forwardRef((props, ref) => <Checkbox {...props} ref={ref} className="p-1" />),
    },
    defaultSelections: false,
    defaultPagination: true,
  },
}

export default crudConfigs
