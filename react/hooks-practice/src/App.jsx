import Counter from './practices/useState/Counter.jsx'
import DocumentTitle from './practices/useEffect/DocumentTitle.jsx'
import Timer from './practices/useEffect/Timer.jsx'
import UsersList from './practices/useEffect/UsersList.jsx'
import InputFocus from './practices/useRef/InputFocus.jsx'
import PreviousValue from './practices/useRef/PreviousValue.jsx'
import Dependencies from './practices/useEffect/Dependencies.jsx'
import WindowWidth from './practices/useEffect/WindowWidth.jsx'
import ReactRouterApp from './practices/react-router/ReactRouterApp.jsx'

import './App.css'
import EmployeeStats from './practices/derived-state/EmployeeStats.jsx'






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

      {/* useRef Section */}
      <div className="practice-box">
        <InputFocus/>

        <br />
        <hr />
        <br />

        <PreviousValue/>
      </div>

      {/* Dependencies Section */}
      <div className="practice-box">
        <Dependencies/>
      </div>


      {/* Cleanup Section */}
      <div className="practice-box">
        <WindowWidth/>
      </div>


      {/* Derived Section */}
      <div className="practice-box">
        <EmployeeStats/>
      </div>


      {/* React Router Section */}
      <div className="practice-box">
        <ReactRouterApp/>
      </div>

    </div>
  )
}

export default App