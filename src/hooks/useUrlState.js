import { useCallback, useEffect, useMemo } from 'react'

import { mapValues, merge } from 'lodash'
import { useSearchParams } from 'react-router-dom'

export const objectToParams = (object) => {
  try {
    return new URLSearchParams(
      mapValues(object, (val) => (typeof val === 'object' ? JSON.stringify(val) : val))
    ).toString()
  } catch {
    return ''
  }
}

const searchStringToParams = (string) => {
  const searchParams = new URLSearchParams(string)
  const result = {}

  searchParams.forEach((val, key) => {
    try {
      result[key] = JSON.parse(val)
    } catch {
      result[key] = val
    }
  })

  return result
}

export const useUrlState = (initParams = {}) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useMemo(() => {
    const params = searchStringToParams(searchParams.toString())
    const initParamsKeys = Object.keys(initParams)
    if (typeof initParams === 'object' && initParamsKeys.length === 0) return params

    return mapValues(initParams, (_val, key) => params[key] || initParams[key])
  }, [searchParams.toString(), JSON.stringify(initParams)])

  const setParams = useCallback((paramsObject) => {
    const currentParams = searchStringToParams(window.location.search)

    setSearchParams(objectToParams(merge({}, currentParams, paramsObject)), { replace: true })
  }, [])

  useEffect(() => {
    setParams(params)
  }, [])

  return [params, setParams]
}
