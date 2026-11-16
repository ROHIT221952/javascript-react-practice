import { useState } from "react";
import axios from "axios";

function EmployeeCreateAxios() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);

    try {
      const response = await axios.post("https://dummyjson.com/users/add", {
        firstName: name,
        email: email,
      });

      console.log("Created User:", response.data);
      setMessage("Employee created successfully!");
      setName("");
      setEmail("");
    } catch (error) {
      console.log("Error:", error.message);
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Create Employee - Axios POST</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter employee name"
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter employee email"
          />
        </div>

        <button type="submit">Create Employee</button>
      </form>
    </div>
  );
}

export default EmployeeCreateAxios;
