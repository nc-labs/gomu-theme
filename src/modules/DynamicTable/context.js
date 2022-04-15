import React, { useState, useContext } from 'react'

const DynamicTableContext = React.createContext({})

/**
 * @type {React.FC<DynamicTableProps>}
 */
export const DynamicTableProvider = ({ children, ...props }) => {
  const [selected, setSelected] = useState([])

  return (
    <DynamicTableContext.Provider value={{ ...props, selected, setSelected }}>
      {children}
    </DynamicTableContext.Provider>
  )
}

/**
 * @returns {UseDynamicTableStateReturn}
 */
export const useDynamicTableState = () => useContext(DynamicTableContext)

/**
 * @typedef {import('./index').DynamicTableProps} DynamicTableProps
 * @typedef {DynamicTableProps & {selected: number[], setSelected: (newState: number[]) => void}} UseDynamicTableStateReturn
 */
