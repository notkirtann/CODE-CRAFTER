import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
const Workspace = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  console.log(auth);
  useEffect(() => {
    if (!auth?.token) {
      navigate("/login")
    }
  }, [auth?.token, navigate]);
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f172a] to-black text-white">

      {/* Navbar */}
      <nav className="flex px-6 py-3 justify-between items-center font-mono backdrop-blur-md bg-white/5 border-b border-white/10 shadow-lg">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 shadow hover:bg-white/20 transition">
            <span className="text-sm">
              {auth?.user?.name
                ? `${auth.user.name}'s Workspace`
                : "Workspace"}
            </span>
          </div>

          <NavLink
            to="/main"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-sm shadow-md hover:scale-105 hover:shadow-[0_0_10px_rgba(34,197,94,0.6)] transition"
          >
            + Create New
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </NavLink>

          <button
            onClick={() => {
              handleLogout();
              navigate("/");
            }}
            className="px-4 py-2 rounded-lg border border-red-400 text-red-400 hover:bg-red-500 hover:text-white hover:shadow-[0_0_10px_rgba(239,68,68,0.6)] transition"
          >
            Logout
          </button>
        </div>
      </nav>

    </div>
  );
};
export default Workspace;
