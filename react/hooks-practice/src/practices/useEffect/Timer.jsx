import { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) {
      return
    }

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning])

  return (
    <div>
      <h2>Timer Practice</h2>

      <h3>Seconds: {seconds}</h3>

      <button onClick={() => setIsRunning(true)}>
        Start
      </button>

      <button onClick={() => setIsRunning(false)}>
        Pause
      </button>

      <button onClick={() => {
        setIsRunning(false)
        setSeconds(0)
      }}>
        Reset
      </button>
    </div>
  )
}

export default Timer