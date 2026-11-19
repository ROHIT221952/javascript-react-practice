# TeamHub – React State & Authentication Practice

## Run

```bash
npm install
npm run dev
```

## Demo accounts

- Admin: `admin@teamhub.dev` / `Admin123!`
- Employee: `employee@teamhub.dev` / `Employee123!`

## Learning map

- **Local State:** Login inputs, employee search, add-employee form fields.
- **Shared State:** Current user and employee list are shared across routes.
- **Context API:** `AuthContext` and `EmployeesContext`, mounted in `src/main.jsx`.
- **Custom Hooks:** `useAuth()`, `useEmployees()`, `useLocalStorage()`.
- **Feature-based structure:** `src/features/auth` and `src/features/employees`; shared utility in `src/shared`.
- **Authentication flow:** mock login, persistent demo session, protected routes, Admin-only route, logout.

## Mentor demo

1. Login as Admin; show Dashboard.
2. Add an employee on Employees page; Dashboard count changes because employee data is shared.
3. Explain search and form inputs are local state.
4. Open Admin Area as Admin.
5. Log out, then try `/dashboard`; it redirects to Login.
6. Login as Employee and try `/admin`; it redirects to Dashboard.

## Security note

This is a frontend-only educational mock. The token is a fake string and credentials are demo data. It is NOT production authentication and does not use a real JWT or secure backend. Production apps must authenticate on the server, hash passwords server-side, and enforce permissions on the server.
