import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";
  const DASHBOARD_URL =
    import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${BASE_URL}/api/auth/signup`,
        { username, email, password },
        { withCredentials: true }
      );

      if (res.data.success) {
        window.location.href = DASHBOARD_URL; // AUTO LOGIN
      }
    } catch (error) {
      console.error(error);
      alert("Signup failed");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-sm p-4">
            <h3 className="text-center mb-4">Signup</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

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

              <button className="btn btn-primary w-100 mt-3">
                Signup
              </button>
            </form>

            <p className="text-center mt-3">
              Already have an account? <Link to="/userlogin">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
