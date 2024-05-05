import React from "react";
import Logo from "../assets/Logo.svg";
function Hero(props) {
  return (
    <div>
      <div className="h-fit flex justify-between px-32 p-14 bg-gradient-to-r from-[#F5F7FA] to-[#E0E0E0] h-64 w-full">
        <div className="flex justify-center items-center">
          <div>
            <div>
              <p className="text-5xl font-semibold text-[#4D4D4D]">Lessons and insights</p> <span className="text-5xl font-semibold text-[#4CAF4F]">from 8 years</span>
            </div>
            <div className="mt-2">
              <p className="text-[#717171]">
                Where to grow your business as a photographer: site or social
                media?
              </p>
            </div>
            <div className="mt-5">
                <button className="text-white rounded-md px-8 py-4 text-lg font-semibold bg-[#4CAF4F] hover:bg-[#41a845] transition-all ease-in duration-200">
                    Register
                </button>
            </div>
          </div>
        </div>
        <div>
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
