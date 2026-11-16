import { useState } from "react";
import { createUser } from "../services/axiosUserService";

function EmployeeCreateService() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createUser({
        firstName: name,
        email: email,
      });

      console.log("Created User:", response);

      setMessage("Employee created successfully!");
      setName("");
      setEmail("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Employee Create - Service Module</h2>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Create Employee</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default EmployeeCreateService;
