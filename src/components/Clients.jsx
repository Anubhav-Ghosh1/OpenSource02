import React from "react";
import Clientlogo from "../assets/ClientsLogo.svg"

function Clients(props) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex gap-y-2 flex-col justify-center items-center">
          <div>
            <span className="text-5xl text-[#4D4D4D] font-semibold">Our Clients</span>
          </div>
          <div>
            <span className="text-[#717171]">We have been working with some Fortune 500+ clients</span>
          </div>
        </div>
        <div className="mt-5">
            <img src={Clientlogo} className="h-[6rem]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Clients;
