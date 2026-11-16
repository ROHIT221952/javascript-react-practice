import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeListAxios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get("https://dummyjson.com/users");

        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  return (
    <div>
      <h2>Employee List - Axios</h2>

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

export default EmployeeListAxios;
