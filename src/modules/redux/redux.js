import React from 'react'

import { combineReducers, configureStore, createReducer } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const rootReducers = {}

const store = configureStore({
  reducer: { _: createReducer({ app_name: 'Gomu theme' }, () => {}) },
})

/**
 * @type {(name: string, reducer: import('@reduxjs/toolkit').Reducer) => void}
 */

export const addReducer = (name, reducer) => {
  rootReducers[name] = reducer
  store.replaceReducer(combineReducers(rootReducers))
}

/**
 * @type {<T extends {}>(actions: T) => T}
 */

export const mapActionsToDispatch = (actions) => {
  const dispatchableActions = {}
  Object.keys(actions).forEach((actionName) => {
    dispatchableActions[actionName] = (values) => store.dispatch(actions[actionName](values))
  })

  return dispatchableActions
}

export const ReduxProvider = React.memo(({ children }) => (
  <Provider store={store}>{children}</Provider>
))
