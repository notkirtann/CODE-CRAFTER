import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MonacoEditor from "react-monaco-editor";
import account from "../components/utils/imgs/account.png";
import works from "../components/utils/imgs/works.png";
import groups from "../components/utils/imgs/groups.png";
import settings from "../components/utils/imgs/settings.png";
import logout from "../components/utils/imgs/logout.png";
import logo from "../components/utils/imgs/Main.png";

const StartCoding = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [cssCode, setCssCode] = useState("");
  const navigateHome = () => {
    navigate("/");
  };
  const [jsCode, setJsCode] = useState("");
  const profileDropdown = () => {
    setIsOpen(!isOpen);
  };
  const combineCode = () => {
    return `
      <style>${cssCode}</style>
      <script>${jsCode}</script>
      ${htmlCode}
    `;
  };

  return (
    <>
      <nav className="flex h-onehalf bg-black justify-evenly items-center font-bold font-mono border-1">
        <div className="logo flex justify-center items-center cursor-pointer">
          <div className="flex justify-center items-center m-4">
            <span className="text-light-green text-xl font-extrabold">
              <img src={logo} className="flex w-48" onClick={navigateHome} alt="Logo" />
            </span>
          </div>
        </div>
        <div className="nav-items w-108 flex justify-center items-center cursor-pointer text-white"></div>
        <div className="justify-center items-center m-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            onClick={profileDropdown}
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
          {isOpen && (
            <div className="dropdown-menu border-2 border-black flex flex-col mt-2 w-48 p-inh">
              <ul className="flex flex-col p-2 gap-3 bg-transparent">
                <NavLink className="flex items-center" to="">
                  <img src={account} className="w-6" alt="Account" />
                  <span className="hover:underline text-xm ml-2">My Account</span>
                </NavLink>
                <NavLink className="flex items-center" to="">
                  <img src={works} className="w-6" alt="Works" />
                  <span className="hover:underline text-xm ml-2">My Works</span>
                </NavLink>
                <NavLink className="flex items-center" to="">
                  <img src={groups} className="w-6" alt="Groups" />
                  <span className="hover:underline text-xm ml-2">Groups</span>
                </NavLink>
                <NavLink className="flex items-center" to="">
                  <img src={settings} className="w-6" alt="Settings" />
                  <span className="hover:underline text-xm ml-2">Settings</span>
                </NavLink>
                <NavLink className="flex items-center" to="/login">
                  <img src={logout} className="w-6" alt="Logout" />
                  <span className="hover:underline text-xm ml-2">Login</span>
                </NavLink>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <div className="flex h-72 w-full">
        <MonacoEditor
          language="html"
          value={htmlCode}
          onChange={setHtmlCode}
          className="editor"
          options={{ theme: "vs-dark"}}
        />
        <MonacoEditor
          language="css"
          value={cssCode}
          onChange={setCssCode}
          className="editor bg-black"
          options={{ theme: "vs-dark"}}
        />
        <MonacoEditor
          language="javascript"
          value={jsCode}
          onChange={setJsCode}
          className="editor bg-black"
          options={{ theme: "vs-dark"}}
        />
      </div>
      <div className="h-max">
        <iframe
          title="Code Output"
          srcDoc={combineCode()}
          width="100%"
          height="400"
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </>
  );
};

export default StartCoding;
