import React, { useState, useContext, useCallback } from 'react'

const INIT_STATE = { sidebarOpen: true }
export const MainLayoutContext = React.createContext({})

export const MainLayoutConsumer = MainLayoutContext.Consumer

/** @returns {{sidebarOpen: boolean, toggleSidebar: (state: boolean | undefined) => void}} */
export const useMainLayoutState = () => useContext(MainLayoutContext)

export const MainLayoutProvider = React.memo(({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(INIT_STATE.sidebarOpen)

  const toggleSidebar = useCallback((state) => {
    const newState = [true, false].includes(state) ? state : (prev) => !prev
    setSidebarOpen(newState)
  }, [])

  return (
    <MainLayoutContext.Provider value={{ sidebarOpen, toggleSidebar }}>
      {children}
    </MainLayoutContext.Provider>
  )
})
