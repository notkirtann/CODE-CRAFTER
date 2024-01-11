import React from "react";
import Navbar from "../components/Navbar";
import html from "../components/utils/imgs/html.png";
import css from "../components/utils/imgs/css.png";
import rooms from "../components/utils/imgs/rooms.png"
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full px-5 py-2 bg-black">
        <div className="flex flex-col text-white mt-12 w-2/5 gap-8">
          <h1 className="text-5xl">Code, Collaborate and Create</h1>
          <p className="text-4xl text-slate-400">
            <span className="text-[#B15EFF] ">
              "Unleash Your Creativity with our Cutting-Edge Online Code Editor:{" "}
            </span>
            <span className="">Your Canvas for Digital Masterpieces!"</span>
          </p>
          <button className="text-lg px-4 py-2 border-2 rounded-lg hover:border-white transition duration-500 w-fit border-[rgb(112,110,196)]">
            <NavLink to="/main">Get Started</NavLink>
          </button>
        </div>
        <div className="flex w-3/5 h-screen relative">
          <img
            src={html}
            alt=""
            className="border-1 border-grey rounded-xl w-1/2 absolute top-[220px] right-[300px] z-0 shadow-xl shadow-[#B15EFF]"
          />
          <img
            src={css}
            alt=""
            className="border-1 border-grey rounded-xl w-1/2 absolute top-12 right-12 z-1 shadow-xl shadow-[rgb(112,110,196)]"
          />
        </div>
      </div>
      <div className="flex w-full px-5 py-20 bg-black justify-between">
        <div className="flex w-2/5">
          <img
            src={rooms}
            alt=""
            className="rounded-xl shadow-xl shadow-lightgreen"
          />
        </div>
        <div className="flex flex-col text-white w-2/5 items-center">
          <div className="flex flex-col text-white mt-6 gap-8">
            <p className="text-5xl text-lightgreen">
              <span>Collaborative Coding Anywhere: </span>
              <span className="text-white">
              Empower Your Editor for Seamless Teamwork!{" "}
              </span>
            </p>
            <button className="text-lg px-4 py-2 border-2 rounded-lg hover:border-white transition duration-500 w-fit border-lightgreen">
              <NavLink>Explore Rooms</NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-5 py-20 bg-black">
        <div className="flex text-white">
          <p className="text-5xl text-[#FFFB73] text-center">
            <span>"Empower Collaboration with Ease: </span>
            <span className="text-white">
              Create, Manage, and Code Together in Custom Rooms with Our Code
              Editor!"{" "}
            </span>
          </p>
        </div>
        <div className="flex justify-between p-6">
          <img
            src={html}
            alt=""
            className="border-1 border-grey rounded-xl w-1/3 shadow-xl shadow-grey"
          />
          <img
            src={css}
            alt=""
            className="border-1 border-grey rounded-xl w-1/3 shadow-xl shadow-grey"
          />
        </div>
      </div>
      <div className="flex w-full px-5 py-20 bg-black justify-between">
        <div className="flex flex-col text-white w-4/5 items-center">
          <div className="flex flex-col text-white mt-12 gap-8">
            <p className="text-5xl text-[#FF9209]">
              <span>"Unlock Your Potential: </span>
              <span className="text-white">
                Conquer Coding Challenges and Ignite Your Creativity! 🚀"{" "}
              </span>
              <p className="text-xl mt-4 text-gray">
                From conquering the tallest mountains to solving complex
                problems, our community never shies away from the extraordinary.
                Get inspired by the triumphs and transformations that arise from
                life's most daunting obstacles.
              </p>
            </p>
            <button className="text-lg px-4 py-2 border-2 rounded-lg hover:border-white transition duration-500 w-fit border-[#FF9209]">
              <NavLink to="/challenges">Explore Challenges</NavLink>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
