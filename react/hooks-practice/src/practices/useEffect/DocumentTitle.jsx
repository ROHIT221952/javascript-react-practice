import { useState, useEffect } from "react";

function DocumentTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>useEffect Practice</h2>

      <p>
        Click the Increase button to update the counter. The browser tab title
        will also change automatically whenever the counter value changes.
      </p>

      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default DocumentTitle;
