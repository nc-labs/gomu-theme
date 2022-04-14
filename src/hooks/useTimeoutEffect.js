import { useEffect } from 'react'

export const useTimeoutEffect = (effect, dep, delayMs) =>
  useEffect(() => {
    const timeout = setTimeout(effect, delayMs)

    return () => {
      clearTimeout(timeout)
    }
  }, dep)
