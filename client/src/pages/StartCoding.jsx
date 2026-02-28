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
    <div className="h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f172a] to-black text-white overflow-hidden">

      {/* Glass Navbar */}
      <nav className="flex h-14 justify-between items-center px-6 font-mono backdrop-blur-md bg-white/5 border-b border-white/10 shadow-lg">
        <img
          src={logo}
          className="w-36 cursor-pointer hover:scale-105 transition"
          onClick={navigateHome}
          alt="Logo"
        />

        {/* Profile */}
        <div className="relative">
          <div
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition"
            onClick={profileDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {isOpen && (
            <div className="absolute right-0 mt-3 w-52 bg-[#0b0b0b]/90 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl">
              <ul className="flex flex-col p-3 gap-3 text-sm">
                <NavLink className="flex items-center hover:text-cyan-400 transition" to="">
                  <img src={account} className="w-5" alt="" />
                  <span className="ml-2">My Account</span>
                </NavLink>
                <NavLink className="flex items-center hover:text-cyan-400 transition" to="">
                  <img src={works} className="w-5" alt="" />
                  <span className="ml-2">My Works</span>
                </NavLink>
                <NavLink className="flex items-center hover:text-cyan-400 transition" to="">
                  <img src={groups} className="w-5" alt="" />
                  <span className="ml-2">Groups</span>
                </NavLink>
                <NavLink className="flex items-center hover:text-cyan-400 transition" to="">
                  <img src={settings} className="w-5" alt="" />
                  <span className="ml-2">Settings</span>
                </NavLink>
                <NavLink className="flex items-center hover:text-red-400 transition" to="/login">
                  <img src={logout} className="w-5" alt="" />
                  <span className="ml-2">Login</span>
                </NavLink>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Editors */}
      <div className="flex h-[52vh] gap-3 p-3">

        {/* Editor Card Component Style */}
        {[
          { label: "HTML", color: "from-orange-500 to-pink-500", lang: "html", value: htmlCode, set: setHtmlCode },
          { label: "CSS", color: "from-blue-500 to-cyan-400", lang: "css", value: cssCode, set: setCssCode },
          { label: "JS", color: "from-yellow-400 to-orange-500", lang: "javascript", value: jsCode, set: setJsCode },
        ].map((editor, i) => (
          <div
            key={i}
            className="flex flex-col flex-1 rounded-xl overflow-hidden bg-[#0b0b0b] border border-white/10 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition"
          >
            <div
              className={`text-xs font-semibold px-3 py-1 bg-gradient-to-r ${editor.color}`}
            >
              {editor.label}
            </div>

            <MonacoEditor
              language={editor.lang}
              value={editor.value}
              onChange={editor.set}
              options={{
                theme: "vs-dark",
                automaticLayout: true,
                fontSize: 14,
                minimap: { enabled: false },
              }}
            />
          </div>
        ))}
      </div>

      {/* Preview */}
      <div className="h-[40vh] px-3 pb-3">
        <div className="rounded-xl overflow-hidden border border-white/10 bg-black shadow-lg">
          <div className="flex items-center justify-between px-3 py-1 text-sm bg-gradient-to-r from-purple-600 to-indigo-600">
            <span>Live Preview</span>
            <span className="text-xs opacity-80">Auto Refresh</span>
          </div>

          <iframe
            title="Code Output"
            srcDoc={combineCode()}
            className="w-full h-[calc(40vh-30px)] bg-white"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
};

export default StartCoding;
