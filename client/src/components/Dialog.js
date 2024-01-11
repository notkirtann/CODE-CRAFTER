import React, { useState , useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SettingsDialog = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleDialogBox = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:8080/api/v1/auth/codedetails", {
         title,
         description
        })
        .then((res) => {
          alert(res.data.message);
          navigate("/main");
        })
        .catch((error) => {
          console.log(error);
        });
    };

  const dialogStyle = {
    display: isOpen ? "flex" : "none",
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("code details", JSON.stringify({ title,description}));
    }, 250);
    return () => clearTimeout(timeout);
  }, [title,description]);
  useEffect(() => {
    const { title,description } = JSON.parse(
      localStorage.getItem("code details")
    ) || {
      title:"Code Title",
      description:"Code Description"
    };
    setTitle(title);
    setDescription(description);
  }, []);
  return (
    <div className="settings-dialog" style={dialogStyle}>
      <div className="flex flex-col bg-black w-96 h-96 p-5 gap-2 rounded-lg shadow-xl shadow-grey">
        <h2 className="text-center ">Settings</h2>
        <label htmlFor="title">Project Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          className="bg-black text-white py-1 px-2 border-2 border-white rounded-md"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Project Description:</label>
        <textarea
          id="description"
          value={description}
          className="bg-black text-white py-1 px-2 border-2 border-white rounded-md"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex items-center justify-center gap-3 mt-3">
          <button className="border-2 border-lightgreen hover:border-white transition duration-500 p-2 rounded-lg w-20 "
          onClick={handleDialogBox}
          >
            Save
          </button>
          <button className="border-2 border-[rgb(112,110,196)] hover:border-white transition duration-500 p-2 rounded-lg w-20 "
           onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsDialog;
