import { useState } from "react";
import { deleteUser } from "../services/axiosUserService";

function EmployeeDeleteService() {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await deleteUser(userId);

      console.log("Deleted User:", response);

      setMessage("Employee deleted successfully!");
      setUserId("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Employee Delete - Service Module</h2>

      <form onSubmit={handleDelete}>
        <input
          type="number"
          placeholder="Enter Employee ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <button type="submit">Delete Employee</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default EmployeeDeleteService;
