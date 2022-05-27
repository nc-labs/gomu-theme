import { memo, useCallback, useEffect, useState } from 'react'
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

const openFullscreen = () => {
  const elem = document.documentElement

  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen()
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen()
  }
}

/* Close fullscreen */
const closeFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen()
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen()
  }
}

const App = () => {
  const [time, setTime] = useState(parseTime())
  const [isFullScreen, setIsFullScreen] = useState(false)

  const toggle = useCallback(() => {
    const handler = isFullScreen ? closeFullscreen : openFullscreen
    setIsFullScreen(!isFullScreen)
    handler()
  }, [isFullScreen])

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(parseTime())
    }, 999)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <label className="fixed top-4 right-4 btn btn-square swap swap-rotate">
        <input type="checkbox" checked={isFullScreen} onChange={toggle} />

        <svg
          className="fill-current swap-off"
          height="32"
          width="32"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Solid">
            <path d="m104 72h48a24 24 0 0 0 24-24 24 24 0 0 0 -24-24h-104a24 24 0 0 0 -24 24v104a24 24 0 0 0 48 0v-48l116 116a22.627 22.627 0 0 0 32 0 22.627 22.627 0 0 0 0-32z" />
            <path d="m220 292a22.627 22.627 0 0 0 -32 0l-116 116v-48a24 24 0 0 0 -48 0v104a24 24 0 0 0 24 24h104a24 24 0 0 0 24-24 24 24 0 0 0 -24-24h-48l116-116a22.627 22.627 0 0 0 0-32z" />
            <path d="m464 24h-104a24 24 0 0 0 -24 24 24 24 0 0 0 24 24h48l-116 116a22.627 22.627 0 0 0 0 32 22.627 22.627 0 0 0 32 0l116-116v48a24 24 0 0 0 48 0v-104a24 24 0 0 0 -24-24z" />
            <path d="m464 336a24 24 0 0 0 -24 24v48l-116-116a22.627 22.627 0 0 0 -32 0 22.627 22.627 0 0 0 0 32l116 116h-48a24 24 0 0 0 -24 24 24 24 0 0 0 24 24h104a24 24 0 0 0 24-24v-104a24 24 0 0 0 -24-24z" />
          </g>
        </svg>

        <svg
          className="fill-current swap-on"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 469.333 469.333"
        >
          <g>
            <g>
              <g>
                <path d="M160,0h-21.333C132.771,0,128,4.771,128,10.667V128H10.667C4.771,128,0,132.771,0,138.667V160 c0,5.896,4.771,10.667,10.667,10.667H160c5.896,0,10.667-4.771,10.667-10.667V10.667C170.667,4.771,165.896,0,160,0z" />
                <path d="M458.667,128H341.333V10.667C341.333,4.771,336.563,0,330.667,0h-21.333c-5.896,0-10.667,4.771-10.667,10.667V160 c0,5.896,4.771,10.667,10.667,10.667h149.333c5.896,0,10.667-4.771,10.667-10.667v-21.333 C469.333,132.771,464.563,128,458.667,128z" />
                <path d="M458.667,298.667H309.333c-5.896,0-10.667,4.771-10.667,10.667v149.333c0,5.896,4.771,10.667,10.667,10.667h21.333 c5.896,0,10.667-4.771,10.667-10.667V341.333h117.333c5.896,0,10.667-4.771,10.667-10.667v-21.333 C469.333,303.437,464.563,298.667,458.667,298.667z" />
                <path d="M160,298.667H10.667C4.771,298.667,0,303.437,0,309.333v21.333c0,5.896,4.771,10.667,10.667,10.667H128v117.333 c0,5.896,4.771,10.667,10.667,10.667H160c5.896,0,10.667-4.771,10.667-10.667V309.333 C170.667,303.437,165.896,298.667,160,298.667z" />
              </g>
            </g>
          </g>
        </svg>
      </label>

      <div className="flex items-center justify-center w-screen h-screen">
        <TimeCard value={time.h} text="hours" />
        <Indicator />
        <TimeCard value={time.m} text="min" />
        <Indicator />
        <TimeCard value={time.s} text="sec" />
      </div>
    </>
  )
}

export default memo(App)
