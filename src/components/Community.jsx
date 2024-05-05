import React from "react";
import Member from "../assets/Member.svg";
import HereSection from "../assets/HeroSection.svg";

function Community(props) {
  return (
    <div>
      <div className="flex flex-col justify-center mt-10 w-full">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <span className="text-4xl w-[35%] text-[#4D4D4D] font-semibold">
            Manage your entire community in a single system
          </span>
          <span className="text-[#717171] mt-2">Who is Nextcent suitable for?</span>
        </div>
        <div className="flex justify-center mt-5">
            <img className="h-[16rem]" src={Member} alt="" />
        </div>
        <div className="flex justify-center">
            <img className="h-[160rem]" src={HereSection} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Community;
