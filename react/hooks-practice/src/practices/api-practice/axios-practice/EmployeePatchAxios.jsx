import { useState } from "react";
import axios from "axios";

function EmployeePatchAxios() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("New Email:", email);

    const response = await axios.patch("https://dummyjson.com/users/1", {
      email: email,
    });

    console.log("Updated User:", response.data);
    setEmail("");
  };

  return (
    <div>
      <h2>Update Employee Email - Axios PATCH</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>New Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter new email"
          />
        </div>

        <button type="submit">Update Email</button>
      </form>
    </div>
  );
}

export default EmployeePatchAxios;
