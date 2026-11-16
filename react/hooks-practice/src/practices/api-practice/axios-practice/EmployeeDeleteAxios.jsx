import { useState } from "react";
import axios from "axios";

function EmployeeDeleteAxios() {
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    try {
      const response = await axios.delete("https://dummyjson.com/users/1");

      console.log("Deleted User:", response.data);
      setMessage("Employee deleted successfully!");
    } catch (error) {
      console.log("Error:", error.message);
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Delete Employee - Axios DELETE</h2>

      {message && <p>{message}</p>}

      <button type="button" onClick={handleDelete}>
        Delete Employee
      </button>
    </div>
  );
}

export default EmployeeDeleteAxios;
