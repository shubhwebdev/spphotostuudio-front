import React from "react";
import Banner from "../Banner/Banner";

import { Link } from "react-router-dom";

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
      <img className=" w-full h-full  object-cover" src="https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/b568ecd3-28fb-40e7-ab18-1355533a3ef0/DSC_7323-2-2.jpg?format=1500w" alt="" />
      <div>
        <div className=" text-center py-3 md:py-10  ">
          <h1 className="text-xl md:text-4xl">REAL LOVE STORIES</h1>
          <p className="  py-2 md::py-5 text-center w-[70%] mx-auto space-y-5 text-sm md:text-base">like a river flows surely to the sea, so it goes some things are meant to be.</p>
        </div>
        <div className="  grid grid-cols-3  border-2 md:h-80 lg:h-96 gap-2 md:gap-5 lg:gap-10 object-cover px-0 md:px-10 ">
         <div  className=" w-full h-full overflow-hidden">
          
          <img className=" w-full h-full  object-cover" src="https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/b568ecd3-28fb-40e7-ab18-1355533a3ef0/DSC_7323-2-2.jpg?format=1500w" alt="" />
          </div>
          <div className=" w-full h-full overflow-hidden">
        <img className="  w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1560078190489-57YR27IWNV0ZLCZU6TN9/ashnabrett.jpg?format=1500w  " alt="" />
            </div> 
            <div className=" w-full h-full overflow-hidden ">
        <img className="w-full h-full object-cover " src="https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1560078414127-Q07FY2XD2PPEA3VR388F/03_NVP_PIYACYRUS_RECEPTION-4143-side.jpg?format=1500w" alt="" />

            </div>

    
        </div>
      </div>
      <img className=" mt-14 w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1560078190489-57YR27IWNV0ZLCZU6TN9/ashnabrett.jpg?format=1500w  " alt="" />
      <div className="box4">
        <div className=" text-center py-3 md:py-10   ">
          <h1 className="text-xl md:text-4xl">PACKAGES

 </h1>
          <p className="  py-2 md::py-5 text-center w-[70%] mx-auto space-y-5 text-sm md:text-base">like a river flows surely to the sea, so it goes some things are meant to be.</p>
        </div>
        <div className="  grid  grid-cols-3  border-2 md:h-80 lg:h-96 gap-2 md:gap-5 lg:gap-10 object-cover px-0 md:px-10 ">
         <Link  to="/package" className=" w-full h-full overflow-hidden">
          
          <img className=" w-full h-[90%]  object-cover" src="https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/b568ecd3-28fb-40e7-ab18-1355533a3ef0/DSC_7323-2-2.jpg?format=1500w" alt="" />
          <h1 className=" text-center">wedding</h1>
          </Link>
          <Link to="/package" className=" w-full h-full overflow-hidden">
        <img className="  w-full h-[90%] object-cover" src="https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1560078190489-57YR27IWNV0ZLCZU6TN9/ashnabrett.jpg?format=1500w  " alt="" />
        <h1 className=" text-center">pre wedding</h1>
            </Link> 
            <Link to="/package" className=" w-full h-full overflow-hidden ">
        <img className="w-full h-[90%] object-cover " src="https://images.squarespace-cdn.com/content/v1/56a74ebd1c121044e144939b/1560078414127-Q07FY2XD2PPEA3VR388F/03_NVP_PIYACYRUS_RECEPTION-4143-side.jpg?format=1500w" alt="" />
        <h1 className=" text-center">cinamatic shoot</h1>
            </Link>

    
        </div>
      </div>

     
      
 
 



 
        

      
      </>
    
  );
};

export default Home;
