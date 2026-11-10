import { useState, useEffect, useRef } from 'react'

function PreviousValue() {
  const [count, setCount] = useState(0)

  const previousCount = useRef(null)

  useEffect(() => {
    previousCount.current = count
  }, [count])

  return (
    <div>
      <h2>Previous Value Practice</h2>

      <h3>Current Count: {count}</h3>

      <h3>Previous Count: {previousCount.current}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default PreviousValue