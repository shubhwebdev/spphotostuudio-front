import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className=" w-11/12 mx-auto space-y-10 pb-5">

      <div className=" border-y  py-2 md:py-5 border-black ">
      <h1 className=" text-center text-2xl md:text-6xl text-black"> 
      <span className=" text-red-600">

      S.P P
      </span>
       hotograpy</h1>
      </div>
      <div className="box2  md:flex  justify-around items-center   text-xl md:font-bold">
        <div>Sec-34, Faridabad, Haryana, 121003</div>
        
        <div><span  className=" text-red-700"><ion-icon name="call-outline"></ion-icon></span> <a href=" tel:9891136556"> Kislay Verma +91 98 - 911 365 56</a></div>
        <div><span className=" text-red-700" ><ion-icon name="call-outline"></ion-icon></span> <a href="tel:9911722126">Komal Verma  +91  99 - 117 221 26</a> </div>
        <div>admin@spphotography.in</div>
      </div>
      <div className="box3 flex  justify-center items-center text-4xl  space-x-8">
        <div> 
        <a className="" href="https://www.facebook.com/profile.php?id=100090772556152&mibextid=ZbWKwL">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
        </div>
        <div>
        <a className="" href="https://www.instagram.com/s.pphotography7/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
        </div>
        <div>
        <a className="" href="https://www.youtube.com/@s.pphotographyfbd1979">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
        </div>
      </div>
      <div className=" box4 flex  justify-center items-center  text-lg  md:text-2xl  font-bold">
      
            <a href="https://www.linkedin.com/in/shubhamweb/">
          Site By :{" "}
          <span>
            {" "}
              Shubham Chaudhari
          </span>
            </a>
     
      </div>

    </div>
  );
};

export default Footer;
