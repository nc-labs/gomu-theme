import React, { useState, useContext, useLayoutEffect } from 'react'

const INIT_STATE = {
  sidebarOpen: true,
}

export const MainLayoutContext = React.createContext({})

/**
 * @returns {TMainLayoutContext}
 */
export const useMainLayoutState = () => useContext(MainLayoutContext)

export const useMainLayoutConfigs = ({ headerTitle, cardTitle }) => {
  const {
    setHeaderTitle,
    setCardTitle,
    headerTitle: currentHeaderTitle,
    cardTitle: currentCardTitle,
  } = useContext(MainLayoutContext)

  useLayoutEffect(() => {
    setHeaderTitle(headerTitle || '')
    setCardTitle(cardTitle || '')

    return () => {
      currentHeaderTitle === headerTitle && setHeaderTitle('')
      currentCardTitle === cardTitle && setCardTitle('')
    }
  }, [headerTitle, cardTitle])
}

export const MainLayoutProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(INIT_STATE.sidebarOpen)
  const [headerTitle, setHeaderTitle] = useState('')
  const [cardTitle, setCardTitle] = useState('')

  return (
    <MainLayoutContext.Provider
      value={{ sidebarOpen, setSidebarOpen, headerTitle, cardTitle, setHeaderTitle, setCardTitle }}
    >
      {children}
    </MainLayoutContext.Provider>
  )
}

/**
 * @typedef {import('react').SetStateAction<boolean>} SetBooleanStateAction
 * @typedef {{sidebarOpen: boolean, setSidebarOpen: SetBooleanStateAction, headerTitle: React.ReactNode, cardTitle: React.ReactNode}} TMainLayoutContext
 */
