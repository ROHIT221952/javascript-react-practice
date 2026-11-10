import { useState, useEffect } from 'react'

function Dependencies() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Rohit')

  useEffect(() => {
    console.log('Count Effect:', count)
  }, [count])

  useEffect(() => {
    console.log('Name Effect:', name)
  }, [name])

  return (
    <div>
      <h2>Dependencies Practice</h2>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <h3>Name: {name}</h3>
      <button onClick={() => setName('Developer')}>
        Change Name
      </button>
    </div>
  )
}

export default Dependencies