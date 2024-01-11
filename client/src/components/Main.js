import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog";
const Main = () => {
  const initialHtml = "<h1>Hello People</h1>";
  const initialCss = "";
  const initialJs = "";
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [srcDoc, setSrcDoc] = useState("");
  const [dialogBox, ShowDialogBox] = useState(false);
  const resetCode = () => {
    setHtml(initialHtml);
    setCss(initialCss);
    setJs(initialJs);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `);
      localStorage.setItem("playground", JSON.stringify({ html, css, js }));
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);
  useEffect(() => {
    const { html, css, js } = JSON.parse(
      localStorage.getItem("playground")
    ) || {
      html: "<h1>Hello People </h1>",
      css: "",
      js: "",
    };
    setHtml(html);
    setCss(css);
    setJs(js);
  }, []);
  return (
    <main className="overflow-y-hidden min-h-96">
      <nav className="flex p-3 text-white justify-between items-center font-bold font-mono bg-black">
        <div className="flex items-center text-lg">
          <h1>Sample Workspace</h1>
        </div>
        <div className="flex items-center justify-end gap-3 text-md">
          <button className="border-2 border-white transition duration-500 p-2 rounded-lg w-20">
            <NavLink to="/">Back</NavLink>
          </button>
          <button className="border-2 border-lightgreen hover:border-white transition duration-500 p-2 rounded-lg w-20">
            <NavLink>Save</NavLink>
          </button>
          <button
            className="border-2 border-[rgb(112,110,196)] hover:border-white transition duration-500 p-2 rounded-lg w-20"
            onClick={() => ShowDialogBox(true)}
          >
            <NavLink>Settings</NavLink>
          </button>
          <button
            className="border-2 border-[#FFFB73] hover:border-white transition duration-500 p-2 rounded-lg w-20"
            onClick={resetCode}
          >
            Reset
          </button>
      <Dialog isOpen={dialogBox}  onClose={() => ShowDialogBox(false)} />
        </div>
      </nav>
      <div className="pane top-pane">
        <Editor
          language={"html"}
          displayName="HTML"
          value={html}
          onChange={setHtml}
          className=""
        />
        <Editor
          language={"css"}
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor language={"js"} displayName="JS" value={js} onChange={setJs} />
      </div>
      <div className="pane h-screen">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width={"100%"}
          height=""
        ></iframe>
      </div>
    </main>
  );
};

export default Main;
