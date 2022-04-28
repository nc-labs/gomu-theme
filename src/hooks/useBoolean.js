import { useCallback, useState } from 'react'

/** @type {UseBooleanHooks} */
export const useBoolean = (defaultState) => {
  const [state, setState] = useState(defaultState)
  const toggle = useCallback(() => setState((prev) => !prev), [])
  const setTrue = useCallback(() => setState(true), [])
  const setFalse = useCallback(() => setState(false), [])

  return [state, { toggle, setTrue, setFalse }]
}

/** @typedef {boolean | () => boolean} UseBooleanDefaultState */
/** @typedef {[state: boolean, actions: UseBooleanActions]} UseBooleanReturns */

/**
 * @typedef UseBooleanActions
 * @type {object}
 * @property {() => void} toggle
 * @property {() => void} setTrue
 * @property {() => void} setFalse
 */

/**
 * @callback UseBooleanHooks
 * @param {UseBooleanDefaultState} defaultState
 * @returns {UseBooleanReturns}
 */
