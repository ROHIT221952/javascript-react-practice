import { useState } from "react";
import axios from "axios";

function EmployeeUpdateAxios() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Updated Name:", name);
    console.log("Updated Email:", email);

    const response = await axios.put("https://dummyjson.com/users/1", {
      firstName: name,
      email: email,
    });

    console.log("Updated User:", response.data);
  };

  return (
    <div>
      <h2>Update Employee - Axios PUT</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter updated name"
          />
        </div>

        <div>
          <label>Employee Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter updated email"
          />
        </div>

        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

export default EmployeeUpdateAxios;
