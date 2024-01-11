import * as React from 'react';
import Navbar from "../components/Navbar";
import backImage from "../components/utils/imgs/rooms.png";
const Rooms = () => {
  const divStyle = {
    backgroundImage: `url(${backImage})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <main style={divStyle}>
      <Navbar />
      <div className="flex flex-col m-4 w-1/2 justify-center items-center">
      </div>
    </main>
  );
};

export default Rooms;
