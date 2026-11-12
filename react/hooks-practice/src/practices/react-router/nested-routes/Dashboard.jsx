// Parent Component Dashboard

import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h2>Dashboard Page</h2>
      <p>Welcome to your dashboard!</p>

      <hr />

      <Outlet />
    </div>
  )
}

export default Dashboard