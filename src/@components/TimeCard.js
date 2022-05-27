import { memo } from 'react'

const TimeCard = ({ value, text }) => (
  <div className="relative">
    <div className="flex items-center justify-center aspect-[6/9] w-[20vw] bg-neutral rounded-box text-neutral-content">
      <span className="font-mono text-[calc(10vw*9/6)] countdown">
        <span style={{ '--value': value }} />
      </span>

      <span className="absolute bottom-2 text-[calc(2vw*9/6)]">{text}</span>
    </div>
  </div>
)

export default memo(TimeCard)
