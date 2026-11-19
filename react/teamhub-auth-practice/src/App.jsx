import {
  Routes,
  Route,
  Navigate,
  Outlet,
  Link,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "./features/auth/useAuth";
import { useEmployees } from "./features/employees/useEmployees";
import Login from "./features/auth/Login";
import Employees from "./features/employees/Employees";
function Guard({ roles }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role))
    return <Navigate to="/dashboard" replace />;
  return <Outlet />;
}
function Layout() {
  const { user, logout } = useAuth();
  return (
    <div className="shell">
      <aside>
        <h2>◈ TeamHub</h2>
        <p>PEOPLE WORKSPACE</p>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/profile">My Profile</Link>
        {user.role === "Admin" && <Link to="/admin">Admin Area</Link>}
        <button onClick={logout}>Log out</button>
      </aside>
      <main>
        <header>
          <span>Employee workspace</span>
          <b>
            {user.name} · {user.role}
          </b>
        </header>
        <Outlet />
      </main>
    </div>
  );
}
function Dashboard() {
  const { user } = useAuth();
  const { employees } = useEmployees();
  return (
    <>
      <h1>Welcome, {user.name.split(" ")[0]}</h1>
      <p className="muted">Your team's workspace overview.</p>
      <div className="stats">
        <article>
          <small>Total employees</small>
          <strong>{employees.length}</strong>
        </article>
        <article>
          <small>Active employees</small>
          <strong>
            {employees.filter((x) => x.status === "Active").length}
          </strong>
        </article>
        <article>
          <small>Departments</small>
          <strong>{new Set(employees.map((x) => x.department)).size}</strong>
        </article>
      </div>
      <section>
        <h3>Learning concepts in this app</h3>
        <ul>
          <li>Local State: form values and employee filters</li>
          <li>Shared State: auth user and employee records</li>
          <li>Context API: AuthContext and EmployeesContext</li>
          <li>Custom Hooks: useAuth, useEmployees, useLocalStorage</li>
          <li>Feature-based folders: auth, employees, dashboard</li>
        </ul>
      </section>
    </>
  );
}
function Profile() {
  const { user } = useAuth();
  return (
    <section>
      <h1>My Profile</h1>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Role: {user.role}</p>
      <p>Data source: AuthContext via useAuth()</p>
    </section>
  );
}
function Admin() {
  return (
    <section>
      <h1>Admin Area</h1>
      <p>Only Admin role can access this route.</p>
    </section>
  );
}
function LoginPage() {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" /> : <Login />;
}
export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<Guard />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/profile" element={<Profile />} />
          <Route element={<Guard roles={["Admin"]} />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
