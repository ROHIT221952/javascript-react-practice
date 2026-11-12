import { useSearchParams } from "react-router-dom";

function EmployeeSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const department = searchParams.get("department");
  return (
    <div>
      <h2>Employee Search</h2>
      <p>Department: {department || "All Departments"}</p>

      <select
        value={department || ""}
        onChange={(e) => setSearchParams({ department: e.target.value })}
      >
        <option value="">Select Department</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>
    </div>
  );
}

export default EmployeeSearch;
