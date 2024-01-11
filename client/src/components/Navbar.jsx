import { React} from "react";
import { NavLink} from "react-router-dom";
import logo from "../components/utils/imgs/Main.png"
const Navbar = () => {
  return (
    <nav className="flex p-3 text-white justify-between items-center font-bold font-mono bg-black">
      <div className="flex items-center cursor-pointer w-1/4"> 
        <img src={logo} className="flex w-44" alt="Logo" />
      </div>
      <div className="flex items-center justify-end gap-5 text-md w-1/2">
        <NavLink className="text-xm hover:text-lightgreen" to="/">
          Home
        </NavLink>
        <NavLink className=" text-xm hover:text-lightgreen" to="/main">
          Start Coding
        </NavLink>
        <NavLink className=" text-xm hover:text-lightgreen" to="/challenges">
          Challenges
        </NavLink>
        <NavLink className=" text-xm hover:text-lightgreen" to="/workspaces">
          Workspaces
        </NavLink>
        <button className="border-2 border-lightgreen hover:border-white transition duration-500 p-2 rounded-lg w-20">
          <NavLink className="" to="/login">
            Login
          </NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
