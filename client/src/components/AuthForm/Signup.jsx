import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/auth/register", {
        name,
        email,
        password,
        confirmpassword,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        alert("Error in Registration!");
        console.log(error);
      });
  };

  return (
    <div className="card-back">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-3 pb-3">Sign Up</h4>
          <div className="form-group">
            <input
              type="text"
              className="form-style"
              placeholder="Full Name"
              aria-label="Full Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <i className="input-icon uil uil-user"></i>
          </div>
          <div className="form-group mt-2 flex gap-2 items-center">
            <input
              type="email"
              className="form-style"
              placeholder="Email"
              aria-label="Email"
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
              aria-label="Password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <div className="form-group mt-2">
            <input
              type="password"
              className="form-style"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              name="confirmpassword"
              value={confirmpassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <button
            color="primary"
            type="submit"
            className="mt-4"
            onClick={handleSignup}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
