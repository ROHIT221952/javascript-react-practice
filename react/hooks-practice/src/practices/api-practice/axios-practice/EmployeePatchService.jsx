import { useState } from "react";
import { patchUser } from "../services/axiosUserService";

function EmployeePatchService() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await patchUser(userId, {
      email: email
    });

    console.log("Patched User:", response);

    setMessage("Employee email updated successfully!");
    setUserId("");
    setEmail("");

  } catch (error) {
    setMessage(error.message);
  }
};

  return (
    <div>
      <h2>Employee Patch - Service Module</h2>

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
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Update Email</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default EmployeePatchService;
