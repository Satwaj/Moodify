import "../style/login.scss";
import FormGroup from "../components/FormGroup";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const { loading, login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await login({ email, password });
    navigate("/");
  }

  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <FormGroup
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="Email"
            placeholder="Enter Email"
          />

          <FormGroup
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="Password"
            placeholder="Enter password"
          />
          <button className="button" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
