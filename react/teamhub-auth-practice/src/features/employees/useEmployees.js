import { useContext } from "react";
import { EmployeesContext } from "./EmployeesContext";
export function useEmployees() {
  const value = useContext(EmployeesContext);
  if (!value) throw Error("useEmployees must be used inside EmployeesProvider");
  return value;
}
