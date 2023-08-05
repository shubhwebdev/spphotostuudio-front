import React from "react";
import Banner from "../Banner/Banner";

import { Link } from "react-router-dom";
import one from "../../assets/home/one.avif"
import two from "../../assets/home/two.avif"
import three from "../../assets/home/three.avif"
import one1 from "../../assets/services/one.jpg"
import two1 from "../../assets/services/two.jpg"
import three1 from "../../assets/services/three.jpg"
import four1 from "../../assets/services/four.jpg"
import five1 from "../../assets/services/five.jpg"
import { lazy } from "react";

const Home = () => {
  return (
    <>
    <div className=" md:px-24">

      <Banner />
    </div>


      <div className=" max-w-screen-md mx-auto text-center space-y-5 py-10">
        <h1 className="  text-xl md:text-4xl">"YOU FEEL. I FOCUS. WE FRAME”</h1>
        <div className=" text-center w-[70%] mx-auto space-y-5 text-sm md:text-base"> 
          <h1 className="">A wedding is a validation coupled with the showcase of Love inclusive of 
various events with exotic venues, food, guests, dresses, jewellery and so on- 
What if it could never be recorded?</h1>
<h1>A chronology of a couple’s journey where they vow together to be One.</h1>
<h2>we are creating fiction out of reality.</h2>
        </div>
      </div>
      {/* <Banner/> */}
      <img className=" w-full h-full  object-cover" src={one} alt="" />
      <div>
        <div className=" text-center py-3 md:py-10  ">
          <h1 className="text-xl md:text-4xl uppercase">You focus on the big day,</h1>
          <p className="  py-2 md:py-5  text-center w-[70%] mx-auto space-y-5 text-sm md:text-base uppercase">leave us to focus on you...</p>
        </div>
        <div className="  grid grid-cols-3    md:h-80 lg:h-96 gap-2 md:gap-5 lg:gap-10 object-cover px-0 md:px-10 ">
         <div  className=" w-full h-full overflow-hidden">
          
          <img className=" w-full h-full  object-cover" src={three} alt="" loading="lazy" />
          </div>
          <div className=" w-full h-full overflow-hidden">
        <img className="  w-full h-full object-cover" src={four1} alt="" loading="lazy" />
            </div> 
            <div className=" w-full h-full overflow-hidden ">
        <img className="w-full h-full object-cover " src={five1} alt="" loading="lazy" />

            </div>

    
        </div>
      </div>
      <img className=" mt-14 w-full h-full object-cover" src={two} alt="" loading="lazy" />
      <div className="box4">
        <div className=" text-center py-3 md:py-10   ">
          <h1 className="text-xl md:text-4xl">PACKAGES

 </h1>

        </div>
        <div className="  grid  grid-cols-3   md:h-80 lg:h-96 gap-2 md:gap-5 lg:gap-10 object-cover px-0 md:px-10 ">
         <Link  to="/package" className=" w-full h-full overflow-hidden">
          
          <img className=" w-full h-full  object-cover" src={one1} alt="" loading="lazy" />
          {/* <h1 className=" text-center">wedding</h1> */}
          </Link>
          <Link to="/package" className=" w-full h-full overflow-hidden">
        <img className="  w-full h-full object-cover" src={two1} alt="" loading="lazy" />
        {/* <h1 className=" text-center">pre wedding</h1> */}
            </Link> 
            <Link to="/package" className=" w-full h-full overflow-hidden ">
        <img className="w-full h-full object-cover " src={three1} alt="" loading="lazy" />
        {/* <h1 className=" text-center">cinamatic shoot</h1> */}
            </Link>

    
        </div>
      </div>

     
      
 
 



 
        

      
      </>
    
  );
};

export default Home;
