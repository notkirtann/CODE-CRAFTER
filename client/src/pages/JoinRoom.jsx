import React, { useState } from "react";
import loginImage from "../components/utils/imgs/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Layout/Navbar";
const JoinRoom = () => {
  const navigate = useNavigate();
  const [room,setRoom] = useState({
    roomid: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setRoom({
      ...room,
      [name] : value
    })
  }

  const createRoom = async () => {
      axios.post("http://localhost:8080/api/v1/rooms/create", room)
      .then((res)=> {
        alert(res.data.message);
        navigate("/rooms")
      })
      .catch((error) => {
        console.log(error);
      })
    }
  return (
    <>
    <Navbar/>
      <div className="login flex justify-evenly mt-10 h-full bg-light-green">
        <div className="mt-5 w-1/3 items-center">
          <img src={loginImage}></img>
        </div>
        <div className="flex flex-col border-2 border-black m-4 bg-white-green h-80">
          <h1 className="flex text-black font-extrabold text-xl mt-2 items-center justify-center">
            JOIN ROOM
          </h1>
          <div className="flex flex-col w-96 h-full items-center m-auto mt-2 ">
          <div className="flex items-center justify-center w-80 border-black border-2 mt-2">
              <input
                type="text"
                name="username"
                value={room.username}
                onChange={handleChange}
                className="flex justify-center items-center w-full h-12 font-bold p-3"
                placeholder="YOUR NAME"
              ></input>
            </div>
            <div className="flex items-center justify-center w-80 border-black border-2 mt-2">
              <input
                type="text"
                name="roomid"
                value={room.roomid}
                onChange={handleChange}
                className="flex justify-center items-center w-full h-12 font-bold p-3"
                placeholder="ROOM ID"
              ></input>
            </div>
            <div className="flex items-center justify-center w-80 border-2 border-black mt-2">
              <input
                type="password"
                name="password"
                value={room.password}
                onChange={handleChange}
                className="flex justify-center items-center w-full h-12 font-bold p-3"
                placeholder="ROOM PASSWORD"
              ></input>
            </div>
            <div className="flex w-80 mt-4 justify-center items-center hover:bg-black hover:text-white border-2 border-black">
              <NavLink
                className="flex text-white-green items-center justify-center font-extrabold text-xl h-10"
                onClick={createRoom}
              >
                JOIN NOW
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinRoom;
