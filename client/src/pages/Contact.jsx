import React, { useState } from "react";
import contactImage from "../components/utils/imgs/contact.svg";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import backImage from "../components/utils/imgs/backgr.jpg"
const Contact = () => {
  const navigate = useNavigate();
  const [contact,setContact] = useState({
    name: "",
    subject: "",
    email:"",
    query:""
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setContact({
      ...contact,
      [name] : value
    })
  }

  const contacts = async () => {
      axios.post("http://localhost:8080/api/v1/contact/contactform", contact)
      .then((res)=> {
        alert(res.data.message);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      })
    }
    const divStyle = {
      backgroundImage: `url(${backImage})`,
      backgroundSize: "cover",
      minHeight: "100vh",
    };
  return (
    <main style={divStyle}>
    <Navbar/>
      <div className="login flex justify-evenly h-[90vh] bg-light-green">
        <div className="flex w-1/2 ml-5 h-full items-center justify-center">
          <img src={contactImage} alt="" className="flex h-96 m-auto p-auto"></img>
        </div>
        <div className="flex w-1/2 h-full items-center justify-center">
        <div className="flex flex-col border-2 border-white m-4 bg-white-green h-96">
          <h1 className="flex text-white font-extrabold text-xl mt-2 items-center justify-center">
            CONTACT US
          </h1>
          <div className="flex flex-col w-96 h-full items-center m-auto mt-2 ">
            <div className="flex items-center justify-center w-80 border-white border-1 mt-2">
              <input
                type="text"
                name="name"
                value={contact.name}
                onChange={handleChange}
                className="flex justify-center items-center text-white w-full h-8 font-bold p-3 bg-transparent"
                placeholder="NAME"
              ></input>
            </div>
            <div className="flex items-center justify-center w-80 border-white border-1 mt-2">
              <input
                type="text"
                name="email"
                value={contact.email}
                onChange={handleChange}
                className="flex justify-center items-center text-white w-full h-8 font-bold p-3 bg-transparent"
                placeholder="EMAIL ID"
              ></input>
            </div>
            <div className="flex items-center justify-center w-80 border-1 border-white mt-2">
              <input
                type="text"
                name="subject"
                value={contact.subject}
                onChange={handleChange}
                className="flex justify-center items-center text-white w-full h-8 font-bold p-3 bg-transparent"
                placeholder="SUBJECT"
              ></input>
            </div>
            <div className="flex items-center justify-center w-80 border-1 border-white mt-2">
              <textarea
                type="text"
                name="query"
                value={contact.query}
                onChange={handleChange}
                className="flex justify-center items-center text-white w-full h-28 font-bold p-3 bg-transparent"
                placeholder="QUERY"
              ></textarea>
            </div>
            <div className="flex mt-4 justify-center items-center hover:text-white border-1 border-white">
              <NavLink
                className="flex text-white-green items-center m-auto p-2 justify-center text-white font-extrabold text-xl h-10"
                onClick={contacts}
              >
                SUBMIT
              </NavLink>
            </div>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
