import React, { useMemo } from 'react'

import { Table, TableCell, TableHead, TableRow, TableBody, Paper, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { FlatList, BackdropLoading } from 'components'
import MAIN_LAYOUT_CONFIGS from 'layouts/MainLayout/configs'
import Pagination from 'modules/DynamicTable/libs/Pagination'

import { DynamicTableProvider } from './context'
import DynamicRow from './libs/DynamicRow'
import HeaderCheckbox from './libs/HeaderCheckbox'
import HeaderTitles from './libs/HeaderTitles'

const { toolbarHeight, headerHeight, footerHeight } = MAIN_LAYOUT_CONFIGS

/**
 * @type {React.FC<DynamicTableProps>}
 */
const DynamicTable = ({ service, columns, translation, selectable = false }) => {
  const { data, isFetching, isPreviousData, isPlaceholderData } = service.useRecordList()

  const renderAttributes = useMemo(
    () => columns || service.listAttributes,
    [columns, service.listAttributes]
  )

  return (
    <DynamicTableProvider {...{ service, columns: renderAttributes, translation, selectable }}>
      <Paper className="overflow-hidden">
        <Paper className="overflow-auto">
          <Stack position="relative">
            <BackdropLoading loading={isFetching && (isPreviousData || isPlaceholderData)} />

            <Box
              height={`calc(100vh - ${headerHeight + footerHeight + toolbarHeight + 56}px)`}
              className="relative overflow-auto"
            >
              <Table stickyHeader>
                <TableHead sx={{ height: toolbarHeight }}>
                  <TableRow>
                    <HeaderCheckbox />
                    <HeaderTitles />
                    <TableCell />
                  </TableRow>
                </TableHead>

                <TableBody>
                  <FlatList
                    data={data.content}
                    renderItems={(record) => <DynamicRow record={record} />}
                  />
                </TableBody>
              </Table>
            </Box>

            <Box>
              <Pagination />
            </Box>
          </Stack>
        </Paper>
      </Paper>
    </DynamicTableProvider>
  )
}

export default React.memo(DynamicTable)

/**
 * @typedef {import('services/CrudServices').default} CrudServices
 * @typedef {{service: CrudServices, columns: any[], translation: string, selectable: boolean}} DynamicTableProps
 */
