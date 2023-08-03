import React from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/link2.jpeg";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [state, setstate] = useState(false);
  const navRef = useRef(null);

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //   if(state==true){
  //     setstate(false)
  //   }
  //   else{
  //     setstate(false)
  //   }
  //   }

  //   window.addEventListener("click", handleClickOutside);
    

  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, [state]);

  return (
    <nav className=" flex-col  justify-center items-center     max-w-6xl mx-auto lg:px-10  ">
   
      <div className="max-w-screen  flex-col   justify-between md:flex-col flex-wrap items-center md:justify-center   ">
        <Link to="/home" className="flex items-center justify-center py-5 lg:py-16">
          {/* <img
            src={logo2}
            className=" h-16 w-44 md:h-14  md:w-40 border-white    object-cover object-center   mix-blend-screen"
            alt="Logo"
          /> */}
          sp photograpy
        </Link>
     
        <div
          className={`  w-full `}
        
        >
          <ul className=" lg:first-uppercase   flex text-xs  text md:text-base font-bold   gap-0  justify-around md:justify-center md:gap-10 lg:gap-20 items-center">
            <li>
              <Link
                to="/gallery"
                className="hidden md:block       "
              >
               Home
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block       md:bg-transparent  border-b border-black  md:border-0 "
              >
               Treditional shoot
              </Link>
            </li>
            <li>
              <Link
                to="/wedding"
                className="  block   border-b border-black md:border-0  "
              >
              Wedding
              </Link>
            </li>
            <li>
              <Link
                to="/prewedding"
                className=" block  border-b border-black md:border-0 "
              >
                Pre wedding
              </Link>
            </li>
            <li>
              <Link
                to="/maternity"
                className="  block   border-b border-black md:border-0  "
              >
              Cinmatic shoot
              </Link>
            </li>
            <li>
              <Link
                to="/kids"
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
