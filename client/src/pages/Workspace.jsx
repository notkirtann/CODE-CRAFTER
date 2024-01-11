import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
const Workspace = () => {
  const navigate = useNavigate();
  const [auth,setAuth] = useAuth();
  console.log(auth);
  useEffect(() => {
    if (!auth?.token) {
      navigate("/login")
    }
  }, [auth?.token,navigate]);
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  }
  return (
    <>
      <nav className="flex p-3 text-white justify-between items-center font-bold font-mono bg-black">
        <div className="flex items-center cursor-pointer w-1/3 gap-3 ">
          <span className="border-2 border-lightgreen hover:border-white transition duration-500 p-2 rounded-lg">
          {auth?.user ? `${auth.user.name}'s Workspace` : navigate("/login")}
          </span>
          <button className="border-2 border-lightgreen hover:border-white transition duration-500 p-2 rounded-lg">
            <NavLink className="flex text-center items-center gap-2" to="/main">
              <span>Create New </span>
              <span>+</span>
            </NavLink>
          </button>
        </div>
        <div className="flex items-center justify-end gap-5 text-md w-1/3">
          <NavLink className="text-xm hover:text-lightgreen" to="/">
            Home
          </NavLink>
          <button className="border-2 border-lightgreen hover:border-white transition duration-500 p-2 rounded-lg w-20">
            <NavLink className="" to="/" onClick={handleLogout}>
              Logout
            </NavLink>
          </button>
        </div>
      </nav>
    </>
  );
};
export default Workspace;
