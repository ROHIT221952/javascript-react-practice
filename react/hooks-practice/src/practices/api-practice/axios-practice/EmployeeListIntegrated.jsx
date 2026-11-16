import { useEffect, useState } from "react";
import { getUsers } from "../services/axiosUserService";
import { getErrorMessage } from "../centralized-error/errorHandler";

function EmployeeListIntegrated() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEmployees() {
      try {
        const users = await getUsers();

        setUsers(users);
        setLoading(false);
      } catch (error) {
        const message = getErrorMessage(error);

        setError(message);
        setLoading(false);
      }
    }

    loadEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List - Integrated API Handling</h2>
      <p>Axios- React Component + Service Module + Centralized Error Handling</p>

      {loading && <p>Loading employees...</p>}

      {error && <p>Error: {error}</p>}

      {!loading &&
        !error &&
        users.map((user) => (
          <div key={user.id}>
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
}

export default EmployeeListIntegrated;
