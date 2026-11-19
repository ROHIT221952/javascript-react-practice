import { useState } from "react";
import { useEmployees } from "./useEmployees";
export default function Employees() {
  const { employees, addEmployee, removeEmployee } = useEmployees();
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("Engineering");
  const shown = employees.filter((x) =>
    (x.name + " " + x.email + " " + x.department)
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  function submit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    addEmployee({
      name,
      email,
      department,
      role: "Team Member",
      status: "Active",
    });
    setName("");
    setEmail("");
  }
  return (
    <>
      <h1>Employees</h1>
      <p className="muted">
        Search, filter and add team members. Changes also update Dashboard.
      </p>
      <section>
        <input
          placeholder="Search employees…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="table">
          {shown.map((x) => (
            <div className="person" key={x.id}>
              <div>
                <b>{x.name}</b>
                <small>
                  {x.email} · {x.department} · {x.status}
                </small>
              </div>
              <button className="danger" onClick={() => removeEmployee(x.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        {shown.length === 0 && <p>No employees found.</p>}
      </section>
      <section>
        <h3>Add employee</h3>
        <form className="inline-form" onSubmit={submit}>
          <input
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option>Engineering</option>
            <option>Design</option>
            <option>Marketing</option>
            <option>HR</option>
          </select>
          <button>Add employee</button>
        </form>
      </section>
    </>
  );
}
