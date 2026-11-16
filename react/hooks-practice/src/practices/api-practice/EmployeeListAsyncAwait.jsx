import { useEffect, useState } from "react";
import { getUsers } from "./services/userService";

function EmployeeListAsyncAwait() {
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
        setError(error.message);
        setLoading(false);
      }
    }

    loadEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List - async/await + try/catch</h2>

      {loading && <p>Loading users...</p>}

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

export default EmployeeListAsyncAwait;
