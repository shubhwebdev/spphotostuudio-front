import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className=" w-11/12 mx-auto space-y-10 pb-5">

      <div className=" border-y  py-2 md:py-5 border-black ">
      <h1 className=" text-center text-2xl md:text-6xl">sp photograpy</h1>
      </div>
      <div className="box2  md:flex  justify-around items-center   text-xl md:font-bold">
        <div>Sec-34, Faridabad, Haryana, 121003</div>
        
        <div>Telefon: +91 98 - 911 365 56</div>
        <div>support@spphotography.in</div>
      </div>
      <div className="box3 flex  justify-center items-center text-4xl  space-x-8">
        <div> 
        <a className="" href="https://www.facebook.com/thephotojunction/">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
        </div>
        <div>
        <a className="" href="https://www.instagram.com/thephotojunction/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
        </div>
      </div>
      <div className=" box4 flex  justify-center items-center  text-lg  md:text-2xl  font-bold">
      
          Site By :{" "}
          <span>
            {" "}
            <a href="https://www.linkedin.com/in/shubhamweb/">
              Shubham Chaudhari
            </a>
          </span>
     
      </div>

    </div>
  );
};

export default Footer;
