import { useCallback, useState } from 'react'

/**
 * @param {boolean} initialState
 * @returns {[boolean, (state?: boolean) => void]}
 */
export const useBoolean = (initialState) => {
  const [boolean, setBoolean] = useState(initialState || false)
  const toggle = useCallback((prev) => !prev, [])

  const toggleBoolean = useCallback((state = undefined) => {
    setBoolean([true, false].includes(state) ? state : toggle)
  }, [])

  return [boolean, toggleBoolean]
}
