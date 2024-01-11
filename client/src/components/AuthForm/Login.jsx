import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/auth/login",{
        email,
        password,
      })
      .then((res) => {
        alert(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/workspaces");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card-front">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-4 pb-3">Log In</h4>
          <div className="form-group">
            <input
              type="email"
              className="form-style"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="input-icon uil uil-at"></i>
          </div>
          <div className="form-group mt-2">
            <input
              type="password"
              className="form-style"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <button color="primary" className="mt-4"
          onClick={handleLogin}
          >
            Login
          </button>
          <p className="mb-0 mt-4 text-center">
            <NavLink className="link">
              Forgot your password?
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
