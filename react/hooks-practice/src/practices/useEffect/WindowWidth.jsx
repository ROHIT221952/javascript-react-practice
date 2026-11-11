import { useState, useEffect } from 'react'

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <h2>Cleanup Practice</h2>
      <p>Window Width Tracker</p>
      <h3>Window Width: {width}px</h3>
    </div>
  )
}

export default WindowWidth