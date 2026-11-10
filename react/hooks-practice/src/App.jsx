import Counter from './practices/useState/Counter.jsx'
import DocumentTitle from './practices/useEffect/DocumentTitle.jsx'
import Timer from './practices/useEffect/Timer.jsx'
import UsersList from './practices/useEffect/UsersList.jsx'

import './App.css'


function App() {
  return (
    <div className="app-container">
      <h1>React Hooks Practice</h1>

      {/* useState Section */}
      <div className="practice-box">
        <Counter />
      </div>

      {/* useEffect Section */}
      <div className="practice-box">

        <DocumentTitle />

        <br />
        <hr />
        <br />

        <Timer />

        <br />
        <hr />
        <br />

        <UsersList />
      </div>
    </div>
  )
}

export default App