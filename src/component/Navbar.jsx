import React from "react";
import logo from "../assets/logo.png";
// import logo2 from "../assets/link2.jpeg";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [state, setstate] = useState(false);
  const navRef = useRef(null);



  return (
    <nav className=" flex-col  justify-center items-center     max-w-6xl mx-auto lg:px-10  ">
   
      <div className="max-w-screen  flex-col   justify-between md:flex-col flex-wrap items-center md:justify-center   ">
        <Link to="/" className="hidden md:flex items-center justify-center py-5 lg:py-16">
          <img
          // style={{filter:backdrop}}
            src={logo}
            className=" h-16 w-44 md:h-14  md:w-40 border-white    object-cover object-center    "
            alt="Logo"
          />
        
        </Link>
        <Link to="/home" className="     flex md:hidden  items-center justify-center py-5 lg:py-16">
          <img
          // style={{filter:backdrop}}
            src={logo}
            className=" h-16 w-44 md:h-14  md:w-40 border-white    object-cover object-center    "
            alt="Logo"
          />
        
        </Link>
     
        <div
          className={`  w-full `}
        
        >
          <ul className=" lg:first-uppercase   flex text-xs  text md:text-base font-bold   gap-0  justify-around md:justify-center md:gap-10 lg:gap-20 items-center">
            <li>
              <Link
                to="/home"
                className="hidden md:block       "
              >
               Home
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block       md:bg-transparent    md:border-0 "
              >
               Treditional shoot
              </Link>
            </li>
            <li>
              <Link
                to="/wedding"
                className="  block    md:border-0  "
              >
              Wedding
              </Link>
            </li>
            <li>
              <Link
                to="/prewedding"
                className=" block   md:border-0 "
              >
                Pre wedding
              </Link>
            </li>
            <li>
              <Link
                to="/maternity"
                className="  block    md:border-0  "
              >
              Cinmatic shoot
              </Link>
            </li>
            <li>
              <Link
                to="/package"
                className=" hidden  md:block   rounded "
              >
               Packages
              </Link>
            </li>
          </ul>
        </div>
      </div>
   
    </nav>
  
  );
};

export default Navbar;
