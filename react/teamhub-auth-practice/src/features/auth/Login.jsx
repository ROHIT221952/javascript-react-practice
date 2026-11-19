import { useState } from "react";
import { useAuth } from "./useAuth";
export default function Login() {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("admin@teamhub.dev");
  const [password, setPassword] = useState("Admin123!");
  const [error, setError] = useState("");
  async function submit(e) {
    e.preventDefault();
    setError("");
    try {
      await login({ email, password });
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className="login">
      <form onSubmit={submit}>
        <span className="tag">TEAMHUB WORKSPACE</span>
        <h1>Welcome back</h1>
        <p className="muted">Sign in to continue to your team.</p>
        {error && <p className="error">{error}</p>}
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button disabled={loading}>
          {loading ? "Signing in…" : "Sign in →"}
        </button>
        <small>Admin: admin@teamhub.dev / Admin123!</small>
        <small>Employee: employee@teamhub.dev / Employee123!</small>
      </form>
    </div>
  );
}
