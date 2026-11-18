import { useState, useEffect } from "react";

const PaginationPractice = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / limit));

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Pagination Practice</h2>

      <select
        value={limit}
        onChange={(e) => {
          setLimit(Number(e.target.value));
          setPage(1);
        }}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>

      <br />

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : paginatedUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        paginatedUsers.map((user) => (
          <div key={user.id}>
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <p>{user.email}</p>
          </div>
        ))
      )}

      {/* Pagination Section START */}

      {paginatedUsers.length > 0 && (
        <>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </button>

          <br />

          {/* Page Number Buttons */}
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              style={{
                backgroundColor: page === pageNumber ? "green" : "white",
                color: page === pageNumber ? "white" : "black",
              }}
            >
              {pageNumber}
            </button>
          ))}

          <p>
            Page {page} of {totalPages}
          </p>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </>
      )}
      {/* Pagination Section END */}
    </div>
  );
};

export default PaginationPractice;
