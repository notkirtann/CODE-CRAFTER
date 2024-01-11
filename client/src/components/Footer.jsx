import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex h-36 w-full bg-black text-white items-center px-5 justify-between pt-10">
        <div className="flex gap-4 items-center">
          <span className="text-sm mr-3">
            Copyright © 2023 Codecrafters Inc. All rights reserved.
          </span>
        </div>
        <div className="flex gap-4">
          <NavLink className="hover:text-[#FFFB73]">Documentation</NavLink>
          <NavLink className="hover:text-[#FFFB73]">Support</NavLink>
          <NavLink className="hover:text-[#FFFB73]">Privacy Policy</NavLink>
          <NavLink className="hover:text-[#FFFB73]">Terms of Use</NavLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
