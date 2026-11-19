import { createContext, useState } from "react";
export const EmployeesContext = createContext(null);
const seed = [
  {
    id: 1,
    name: "Aarav Mehta",
    email: "aarav@teamhub.dev",
    department: "Engineering",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@teamhub.dev",
    department: "Design",
    role: "UI Designer",
    status: "Active",
  },
  {
    id: 3,
    name: "Kabir Verma",
    email: "kabir@teamhub.dev",
    department: "Engineering",
    role: "Backend Developer",
    status: "On Leave",
  },
];
export function EmployeesProvider({ children }) {
  const [employees, setEmployees] = useState(seed);
  function addEmployee(data) {
    setEmployees((old) => [{ ...data, id: Date.now() }, ...old]);
  }
  function removeEmployee(id) {
    setEmployees((old) => old.filter((x) => x.id !== id));
  }
  return (
    <EmployeesContext.Provider
      value={{ employees, addEmployee, removeEmployee }}
    >
      {children}
    </EmployeesContext.Provider>
  );
}
