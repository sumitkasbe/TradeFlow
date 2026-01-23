import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";
  const DASHBOARD_URL =
    import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${BASE_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true },
      );

      if (res.data.success) {
        // Redirect to dashboard
        window.location.href = DASHBOARD_URL;
      }
    } catch (error) {
      console.error(error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-sm p-4">
            <h3 className="text-center mb-4">Login</h3>

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button className="btn btn-primary w-100 mt-3">Login</button>
            </form>

            <p className="text-center mt-3">
              Don’t have an account? <Link to="/usersignup">Signup here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
