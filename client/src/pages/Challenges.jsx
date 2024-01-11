import React from "react";
import Navbar from "../components/Navbar";
import challenges from "../components/utils/imgs/challenges.jpg";
import Footer from "../components/Footer";
const Challenges = () => {
  const divStyle = {
    backgroundImage: `url(${challenges})`,
    backgroundSize: "cover",
  };
  return (
    <main className="h-screen bg-black justify-between flex flex-col">
      <Navbar />
      <div className="flex text-white justify-end h-2/3" style={divStyle}>
        <div className="flex flex-col gap-4 p-4 w-1/2">
          <span className="text-4xl text-lightgreen">Challenges : Overcoming the Unthinkable</span>
          <p>
            In the face of adversity, we thrive. Get inspired by the triumphs and transformations that
            arise from life's most daunting obstacles. Join us on a journey
            where challenges are merely stepping stones to greatness.
          </p>
          <button className="text-lg px-4 py-2 border-2 rounded-lg hover:border-white transition duration-500 w-fit border-lightgreen">
            Coming soon..
          </button>
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default Challenges;
