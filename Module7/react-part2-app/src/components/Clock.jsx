import { useState, useEffect } from 'react'

// Renders a digital time that updates every second
function Clock () {
  const [date, setDate] = useState(new Date())
  const [tickCount, setTickCount] = useState(0)

  useEffect(() => {
    const clockInterval = setInterval(() => tick(), 1000)
    console.log('Clock component mounted')

    return () => {
      clearInterval(clockInterval)
      setTickCount(0)
      console.log('Clock component unmounted')
    }
  }, []) // second arg is an array of dependencies

  const tick = () => {
    setDate(new Date())
    setTickCount(pendingTickCount => pendingTickCount + 1)
    console.log('tick') // track the effect frequency
  }

  return (
    <div className='Clock'>
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}({tickCount} ticks)
    </div>
  )
}

function ClockDisplay () {
  const [showClock, setShowClock] = useState(false)

  const toggleClock = () => {
    setShowClock(!showClock)
  }

  return (
    <div className='ClockDisplay componentBox'>
      {showClock && <Clock />}
      <button onClick={toggleClock}>Toggle Clock</button>
    </div>
  )
}
export default ClockDisplay
