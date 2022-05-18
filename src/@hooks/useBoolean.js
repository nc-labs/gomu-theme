import { useCallback, useState } from 'react'

/**
 * @param {boolean} initialState
 * @returns {[boolean, (state?: boolean) => void]}
 */
export const useBoolean = (initialState) => {
  const [state, setBoolean] = useState(initialState || false)

  const toggle = useCallback((state = undefined) => {
    setBoolean([true, false].includes(state) ? state : (prev) => !prev)
  }, [])

  return [state, toggle]
}
