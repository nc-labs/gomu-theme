import { addReducer, mapActionsToDispatch } from '@modules/redux'
import { createSlice } from '@reduxjs/toolkit'

const mainLayoutSlice = createSlice({
  name: 'sideBarVisibility',
  initialState: true,
  reducers: {
    showSideBar: (sideBarVisibility) => (sideBarVisibility = true),
    hideSideBar: (sideBarVisibility) => (sideBarVisibility = false),
    toggleSideBar: (sideBarVisibility) => !sideBarVisibility,
  },
})

addReducer('sideBarVisibility', mainLayoutSlice.reducer)

const mainLayoutSliceActions = mapActionsToDispatch(mainLayoutSlice.actions)

export default mainLayoutSliceActions
