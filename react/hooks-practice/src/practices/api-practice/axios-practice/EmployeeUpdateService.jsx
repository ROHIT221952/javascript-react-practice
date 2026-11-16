import { useState } from "react";
import { updateUser } from "../services/axiosUserService";

function EmployeeUpdateService() {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateUser(userId, {
        firstName: name,
        email: email,
      });

      console.log("Updated User:", response);

      setMessage("Employee updated successfully!");
      setUserId("");
      setName("");
      setEmail("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Employee Update - Service Module</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID:</label>
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>

        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Update Employee</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default EmployeeUpdateService;
