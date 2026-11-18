import { useState } from "react";

function FormSubmissionPractice() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill all fields");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();

      setMessage("Form submitted successfully!");
      setError("");

      setFormData({
        name: "",
        email: "",
      });
    } catch (error) {
      setError(error.message);
      setMessage("");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h2>Form Submission Practice</h2>

      {message && <p style={{ color: "green" }}>{message}</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: e.target.value,
              });
            }}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
            }}
          />
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default FormSubmissionPractice;
