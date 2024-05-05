import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import {NavLink, Link, Route, Routes } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <div className="flex mb-5 justify-between px-10 mt-2">
        <div>
          <p className="text-2xl font-semibold">Nexcent</p>
        </div>
        <div>
          <ul className="flex items-center text-lg gap-x-4">
            <li className="link link-underline link-underline-black text-black"><NavLink to="/">Home</NavLink></li>
            <li className="link link-underline link-underline-black text-black"><NavLink to="/">Features</NavLink></li>
            <li className="link link-underline link-underline-black text-black"><NavLink to="/contact">Contact</NavLink></li>
            <li className="link link-underline link-underline-black text-black"><NavLink to="/">Blog</NavLink></li>
            <li className="link link-underline link-underline-black text-black"><NavLink to="/">Pricing</NavLink></li>
            <li className="bg-[#28CB8B] hover:bg-[#388E3B] transition-all ease-in duration-200 flex items-center gap-x-2 rounded-md px-4 py-2 text-white">
              Register Now <span><FaLongArrowAltRight /></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
