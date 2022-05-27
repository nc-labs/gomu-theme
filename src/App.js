import { memo, useEffect, useState } from 'react'
import Indicator from '@components/Indicator'
import TimeCard from '@components/TimeCard'

const parseTime = () => {
  const time = new Date()
  return {
    h: time.getHours(),
    m: time.getMinutes(),
    s: time.getSeconds(),
  }
}

const App = () => {
  const [time, setTime] = useState(parseTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(parseTime())
    }, 999)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <TimeCard value={time.h} text="hours" />
      <Indicator />
      <TimeCard value={time.m} text="min" />
      <Indicator />
      <TimeCard value={time.s} text="sec" />
    </div>
  )
}

export default memo(App)
