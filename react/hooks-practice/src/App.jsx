import {useState} from 'react';
import './App.jsx';

function App(){
  const[count, setCount] = useState(0);


  return(
    <div>
      <h1>React Hooks Practice</h1>

      <h2>Counter:{count}</h2>

      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default App