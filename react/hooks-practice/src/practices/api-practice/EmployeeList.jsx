import { useEffect, useState } from "react";

function EmployeeList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Employee List - then/catch</h2>

      {loading && <p>Loading users...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error &&
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

export default EmployeeList;
