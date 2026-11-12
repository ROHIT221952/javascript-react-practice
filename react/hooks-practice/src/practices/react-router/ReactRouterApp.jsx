import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";

import Dashboard from "./nested-routes/Dashboard";
import Profile from "./nested-routes/Profile";
import Settings from "./nested-routes/Settings";

import EmployeeDetails from "./route-parameters/EmployeeDetails";

import EmployeeSearch from "./query-strings/EmployeeSearch";

import NotFound from "./NotFound";

function ReactRouterApp() {
  return (
    <div>
      <h1>React Router Practice</h1>
      <p>
        <p>
          You can check different routes by entering the URL in your browser.
          Try /router and /router/about to explore different pages.
        </p>
      </p>

      <nav>
        <NavLink
          to="/router"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        {" | "}
        <NavLink
          to="/router/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        {" | "}
        <NavLink
          to="/router/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        {" | "}
        <NavLink
          to="/router/dashboard/profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Profile
        </NavLink>
        {" | "}
        <NavLink
          to="/router/dashboard/settings"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Settings
        </NavLink>
      </nav>

      <nav>
        <Link to="/router">Home</Link>
        {" | "}
        <Link to="/router/about">About</Link>
        {" | "}
        <Link to="/router/dashboard">Dashboard</Link>
        {" | "}
        <Link to="/router/dashboard/profile">Profile</Link>
        {" | "}
        <Link to="/router/dashboard/settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="/router" element={<Home />} />
        <Route path="/router/about" element={<About />} />

        <Route path="/router/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Employee Details Route */}
        <Route path="/router/employees/:id" element={<EmployeeDetails />} />

        {/* Employee Search Route */}
        <Route path="/router/employees" element={<EmployeeSearch />} />

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default ReactRouterApp;
