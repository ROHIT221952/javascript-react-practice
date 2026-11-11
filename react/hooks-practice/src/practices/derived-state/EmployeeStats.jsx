import { useState } from 'react'

function EmployeeStats() {
  const [employees] = useState([
    { id: 1, name: 'Utkarsh', department: 'IT' },
    { id: 2, name: 'Amit', department: 'HR' },
    { id: 3, name: 'Suryansh', department: 'IT' },
  ])

  const [search, setSearch] = useState('')

  // Derived State
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  )

  const totalEmployees = employees.length
  const filteredCount = filteredEmployees.length

  return (
    <div>
      <h2>Derived State Practice</h2>

      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Total Employees: {totalEmployees}</h3>
      <h3>Search Results: {filteredCount}</h3>

      {filteredEmployees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>Department: {employee.department}</p>
        </div>
      ))}
    </div>
  )
}

export default EmployeeStats