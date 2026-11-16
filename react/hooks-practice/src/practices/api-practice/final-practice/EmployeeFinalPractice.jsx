import { useState } from "react";
import { createEmployee, getEmployees } from "../services/axiosUserService";
import { getErrorMessage } from "../centralized-error/errorHandler";

function EmployeeFinalPractice() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleGetUsers = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await getEmployees(limit, skip);

      setUsers(response.data.users);
      setMessage("Employees fetched successfully!");
    } catch (error) {
      const message = getErrorMessage(error);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateEmployee = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const employeeData = {
        firstName: name,
        email: email,
      };

      const response = await createEmployee(employeeData);
      console.log("Status Code:", response.status);

      console.log("Created Employee:", response);

      setMessage("Employee created successfully!");

      setName("");
      setEmail("");
    } catch (error) {
      const message = getErrorMessage(error);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Employee API - Final Practice</h2>

      <label>
        Number of Employees:
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
      </label>

      <label>
        Skip Employees:
        <input
          type="number"
          value={skip}
          onChange={(e) => setSkip(e.target.value)}
        />
      </label>

      <button type="button" onClick={handleGetUsers}>
        Get Employees
      </button>

      {users.map((user) => (
        <div key={user.id}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>{user.email}</p>
        </div>
      ))}

      <h3>Create Employee</h3>

      <form onSubmit={handleCreateEmployee}>
        <label>
          Employee Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Employee Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Employee"}
        </button>

        {loading && <p>Please wait...</p>}

        {error && <p>Error: {error}</p>}

        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default EmployeeFinalPractice;
