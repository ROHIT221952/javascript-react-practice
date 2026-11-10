import { useRef, useEffect } from 'react'

function InputFocus() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <h2>useRef Practice</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />
    </div>
  )
}

export default InputFocus