import Counter from "./practices/useState/Counter.jsx";
import DocumentTitle from "./practices/useEffect/DocumentTitle.jsx";
import Timer from "./practices/useEffect/Timer.jsx";
import UsersList from "./practices/useEffect/UsersList.jsx";
import InputFocus from "./practices/useRef/InputFocus.jsx";
import PreviousValue from "./practices/useRef/PreviousValue.jsx";
import Dependencies from "./practices/useEffect/Dependencies.jsx";
import WindowWidth from "./practices/useEffect/WindowWidth.jsx";
import ReactRouterApp from "./practices/react-router/ReactRouterApp.jsx";
import EmployeeList from "./practices/api-practice/EmployeeList.jsx";
import EmployeeListAsyncAwait from "./practices/api-practice/EmployeeListAsyncAwait.jsx";
import EmployeeListAxios from "./practices/api-practice/axios-practice/EmployeeListAxios";
import EmployeeCreateAxios from "./practices/api-practice/axios-practice/EmployeeCreateAxios";
import EmployeeUpdateAxios from "./practices/api-practice/axios-practice/EmployeeUpdateAxios.jsx";
import EmployeePatchAxios from "./practices/api-practice/axios-practice/EmployeePatchAxios.jsx";
import EmployeeDeleteAxios from "./practices/api-practice/axios-practice/EmployeeDeleteAxios.jsx";

import EmployeeListCentralized from "./practices/api-practice/centralized-error/EmployeeListCentralized.jsx";

import "./App.css";
import EmployeeStats from "./practices/derived-state/EmployeeStats.jsx";
import EmployeeCreateService from "./practices/api-practice/axios-practice/EmployeeCreateService.jsx";
import EmployeeUpdateService from "./practices/api-practice/axios-practice/EmployeeUpdateService.jsx";
import EmployeePatchService from "./practices/api-practice/axios-practice/EmployeePatchService.jsx";
import EmployeeDeleteService from "./practices/api-practice/axios-practice/EmployeeDeleteService.jsx";
import EmployeeListIntegrated from "./practices/api-practice/axios-practice/EmployeeListIntegrated.jsx";
import EmployeeFinalPractice from "./practices/api-practice/final-practice/EmployeeFinalPractice.jsx";
import LoadingPractice from "./practices/api-practice/LoadingPractice.jsx";
import PaginationPractice from "./practices/api-practice/PaginationPractice.jsx";
import FormSubmissionPractice from "./practices/api-practice/FormSubmissionPractice.jsx";
import ApiMockingPractice from "./practices/api-practice/ApiMockingPractice.jsx";



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
        <InputFocus />

        <br />
        <hr />
        <br />

        <PreviousValue />
      </div>

      {/* Dependencies Section */}
      <div className="practice-box">
        <Dependencies />
      </div>

      {/* Cleanup Section */}
      <div className="practice-box">
        <WindowWidth />
      </div>

      {/* Derived Section */}
      <div className="practice-box">
        <EmployeeStats />
      </div>

      {/* React Router Section */}
      <div className="practice-box">
        <ReactRouterApp />
      </div>

      {/* API Practice Section */}
      <div className="practice-box">
        <EmployeeList />
      </div>

      {/* Async/Await API Practice */}
      <div className="practice-box">
        <EmployeeListAsyncAwait />
      </div>

      {/* Axios GET API Practice */}
      <div className="practice-box">
        <EmployeeListAxios />
      </div>

      {/* Axios POST API Practice */}
      <div className="practice-box">
        <EmployeeCreateAxios />
      </div>

      {/* Axios PUT API Practice */}
      <div className="practice-box">
        <EmployeeUpdateAxios />
      </div>

      {/* Axios PATCH API Practice */}
      <div className="practice-box">
        <EmployeePatchAxios />
      </div>

      {/* Axios DELETE API Practice */}
      <div className="practice-box">
        <EmployeeDeleteAxios/>
      </div>

      {/* Axios Centralized Error Handling/Mapping */}
      <div className="practice-box">
        <EmployeeListCentralized/>
      </div>

      {/* Axios Service Module*/}
      <div className="practice-box">
        <EmployeeCreateService/>
      </div>

      {/* Axios UPDATE Service Module*/}
      <div className="practice-box">
        <EmployeeUpdateService/>
      </div>

      {/* Axios PATCH Service Module*/}
      <div className="practice-box">
        <EmployeePatchService/>
      </div>

      {/* Axios DELETE Service Module*/}
      <div className="practice-box">
        <EmployeeDeleteService/>
      </div>

      {/* Axios- React Component + Service Module + Centralized Error Handling*/}
      <div className="practice-box">
        <EmployeeListIntegrated/>
      </div>

      {/* Employee API Management */}
      <div className="practice-box">
        <EmployeeFinalPractice/>
      </div>

      {/* Loading */}
      <div className="practice-box">
        <LoadingPractice/>
      </div>

      {/* Pagination Practice */}
      <div className="practice-box">
        <PaginationPractice/>
      </div>

      {/* Form Submission Practice */}
      <div className="practice-box">
        <FormSubmissionPractice/>
      </div>

      {/* API Mocking Practice */}
      <div className="practice-box">
        <ApiMockingPractice/>
      </div>
    </div>
  );
}

export default App;
