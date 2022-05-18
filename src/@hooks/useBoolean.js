import { useCallback, useState } from 'react'

/**
 * @param {boolean} initialState
 * @returns {[boolean, {toggle: TAction; set: TSet, setTrue: TAction, setFalse: TAction}]}
 */
export const useBoolean = (initialState) => {
  const [state, setBoolean] = useState(initialState || false)

  const toggle = useCallback(() => setBoolean((prev) => !prev), [])
  const setTrue = useCallback(() => setBoolean(true), [])
  const setFalse = useCallback(() => setBoolean(false), [])

  return [state, { toggle, set: setBoolean, setTrue, setFalse }]
}

/** @typedef {() => void} TAction */
/** @typedef {(state: boolean | (prev: boolean) => boolean) => void} TSet */
