import React, { useState, useContext } from 'react'

const INIT_STATE = {
  sidebarOpen: true,
}

export const MainLayoutContext = React.createContext({})

/**
 * @returns {TMainLayoutContext}
 */
export const useMainLayoutState = () => useContext(MainLayoutContext)

export const MainLayoutProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(INIT_STATE.sidebarOpen)

  return (
    <MainLayoutContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </MainLayoutContext.Provider>
  )
}

export const MainLayoutConsumer = MainLayoutContext.Consumer

/**
 * @typedef {import('react').SetStateAction<boolean>} SetBooleanStateAction
 * @typedef {{sidebarOpen: boolean, setSidebarOpen: SetBooleanStateAction}} TMainLayoutContext
 */
