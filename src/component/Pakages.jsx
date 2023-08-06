// import React from "react";
// import { useState } from "react";

// const Pakages = () => {
//   const [showDetails, setShowDetails] = useState(false);

//   const handlePackageClick = () => {
//     setShowDetails(!showDetails);
//   };
//   return (
//     <div className=" space-y-10  pb-20 ">
//       <div className="box1">
//         <img src="" alt="" />
//       </div>
//       <div className="box2 lg:text-2xl space-y-8 ">
//         <h1 className=" text-center  text-4xl lg:text-6xl">Packaging</h1>
//         <p className=" capitalize text-center">we have more than 15 packages for each </p>

//         <div className=" flex w-full justify-between text-black font-mono ">
//           <div className="text-black font-mono">CINEMATIC CANDID</div>
//           <div>₹ 50,000 </div>
//         </div>
//         <div className=" flex w-full justify-between text-black font-mono">
//           <div className="text-black font-mono">TRADITIONAL WEDDING </div>
//           <div>₹ 40,000</div>
//         </div>

//         <div>
//           <ul>
//             <li>Will be Covered 2/3 day Function</li>
//             <li>Traditional Video Over all Program</li>
//             <li>Album upto 250 Photos</li>
//             <li>Teaser</li>
//             <li>Save the Date</li>
//             <li>Frame (20x30)</li>
//           </ul>
//         </div>

//         <div

//           className=" flex w-full justify-between text-black font-mono"
//         >
//           <div className=" text-black font-mono">PRE-WEDDING SHOOT</div>
//           <div>₹ 30,000</div>
//         </div>

//       </div>
      // <div className="box3 lg:text-2xl space-y-8">
      //   <h1 className=" text-center text-4xl lg:text-6xl  ">PAYMENT POLICY</h1>
      //   <div className=" flex w-full justify-between">
      //     <div>30% - At the Time of booking</div>
      //   </div>
      //   <div className=" flex w-full justify-between">
      //     <div>50% - On Event date</div>
      //   </div>
      //   <div className=" flex w-full justify-between">
      //     <div>20% - After deliverables are delivered </div>
      //   </div>
      // </div>
      // <div className="box4 lg:text-2xl md:flex  justify-between space-y-10 md:space-y-0">
      //   <div>
      //     <h1 className="text-left text-2xl lg:text-4xl   ">TRAVEL POLICY</h1>
      //     <p>Travel & Stay paid by client</p>
      //   </div>
      //   <div className="box4 lg:text-2xl">
      //     <h1 className="text-left  text-2xl lg:text-4xl ">
      //       CANCELLATION POLICY
      //     </h1>
      //     <p>Free cancellation before 7 days</p>
      //   </div>
      // </div>

//       {showDetails && (
//         <div className="additional-details bg-gray-200 p-4 rounded-md mt-4">
//           <h2 className="text-xl font-semibold">Additional Details</h2>
//           <p>
//             This is some additional information related to the selected package.
//             You can add more content here to show detailed information about the
//             package.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Pakages;

import React, { useState } from "react";

const Pakages = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handlePackageClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="space-y-10 pb-20 capitalize">
      <div className="box1">
        <img src="" alt="" />
      </div>
      <div className="box2 lg:text-2xl space-y-8 ">
        <h1 className="text-center text-4xl lg:text-6xl">Packaging</h1>
        <div
          className="flex w-full justify-between"
          onClick={handlePackageClick}
        >
          <div>CINEMATIC CANDID</div>
          <div>₹ 45,000</div>
          
        </div>
        {showDetails && (
           <div className=" additional-details bg-gray-200 ">
           <div className="additional-details bg-gray-200 p-4 rounded-md mt-4">
             <h2 className="text-xl font-semibold">Basic </h2>
             <p>
               <div>
                 <ul>
                         <li>2 ritual function</li>
                        <li>1 cinematic story upto 10 min</li>
                        <li>1 traditional video over all program
</li>
                        <li>1 album  upto 200 photos</li>
                        <li>20 candid photos</li>
                        <li>1 save the date</li>
                        <li>instagram reel 2-3</li>
                        <li>1 frame (12x18)</li>
                 
                 </ul>
               </div>
             </p>
           </div>
           <div className="additional-details bg-gray-200 p-4 rounded-md mt-4">
            <div className=" flex  justify-between ">

             <h2 className="text-xl font-semibold">Silver </h2>
             <h1>60,000</h1>
            </div>
             <p>
               <div>
                 <ul>
                         <li>3 ritual function</li>
                        <li>1 cinematic story upto 10-15 min</li>
                    
                        <li>1 traditional video over all program</li>
                        <li>1 album  upto 250 photos</li>
                        <li>50 candid photos</li>
                        <li>1 Teaser 2-3 Min</li>
                        <li> instagram reel 3-5</li>
                        <li>1 save the date</li>
                        <li>1 day drone</li>
                        <li>1 frame (24x36)</li>
                 
                 </ul>
               </div>
             </p>
           </div>
           <div className="additional-details bg-gray-200 p-4 rounded-md mt-4">
           <div className=" flex  justify-between ">

<h2 className="text-xl font-semibold">Gold </h2>
<h1>85,000</h1>
</div>
             <p>
               <div>
                 <ul>
                 <li>3 ritual function</li>
                        <li>1 cinematic story upto 10-15 min</li>
                    
                        <li>1 traditional video over all program</li>
                        <li>1 album  upto 250 photos</li>
                        <li>1 candid album  upto 120 photos</li>
                        
                        <li>2 Teaser 2-3 Min</li>
                        <li> instagram reel 3-5</li>
                        <li>2 save the date</li>
                        <li>1 day drone</li>
                        <li>2 frame (24x36)</li>
                 
                 </ul>
               </div>
             </p>
           </div>
         
         </div>
        )}
        
        
      
        
      
        <div
          className="flex w-full justify-between"
          onClick={handlePackageClick}
        >
          <div>TRADITIONAL WEDDING</div>
          <div>₹ 30,000</div>
        </div>
        {showDetails && (
          <div className=" additional-details bg-gray-200 ">
            <div className="additional-details bg-gray-200 p-4 rounded-md mt-4">
              <h2 className="text-xl font-semibold">Basic </h2>
              <p>
                <div>
                  <ul>
                    <li>2-3  Ritual Function</li>
                    <li>1 Traditional Video Over all Program</li>
                    <li>1 Album upto 200 Photos</li>
                    <li>1 Save the Date</li>
                    <li>1 Frame (12x18)</li>
                  </ul>
                </div>
              </p>
            </div>
            <div className="additional-details bg-gray-200 p-4 rounded-md mt-4">
              <div className=" flex justify-between">
                <h2 className="text-xl font-semibold">Silver</h2>
                <h2>40,000</h2>
              </div>

              <ul>
                <li>2-3  Ritual Function</li>
                <li>1 Traditional Video Over all Program</li>
                <li>1 Album upto 250 Photos</li>
                <li>1 Teaser</li>
                <li>1 Save the Date</li>
                <li>1 Frame (20x30)</li>
              </ul>
            </div>
            <div className="additional-details bg-gray-200 p-4 rounded-md mt-4">
              <div className=" flex justify-between">
                <h2 className="text-xl font-semibold">Gold</h2>
                <h2>50,000</h2>
              </div>
              <ul>
                <li>2-3  Ritual Function</li>
                <li>1 Traditional Video Over all Program</li>
                <li>1 Album upto 250 Photos</li>
                <li>1 Teaser</li>
                <li>1 highlight song</li>
                <li>1  day drone</li>
                <li>1 Save the Date</li>

                <li>instagram reel 2-3</li>
                <li>Frame (12x18) & (20x30)</li>
              </ul>
            </div>
          </div>
        )}
           <div
          className="flex w-full justify-between"
          onClick={handlePackageClick}
        >
          <div>PRE-WEDDING SHOOT OUTDOOR</div>
          <div>₹ 45,000</div>
        </div>
        {showDetails && (
           <div className=" additional-details bg-gray-200 ">
           <div className="additional-details bg-gray-200 p-4 rounded-md mt-4">
             <h2 className="text-xl font-semibold">Basic </h2>
             <p>
               <div>
                 <ul>
                   <li>all raw images</li>
                   <li>50 60 edited pics</li>
                   <li>day night 6 hour shoot</li>
                   <li>5 minutes cinamatic video</li>
    
                   <li>drone shoot</li>
                 
                 </ul>
               </div>
             </p>
           </div>
         
         </div>
        )}
       
        <div
          className="flex w-full justify-between"
          onClick={handlePackageClick}
        >
          <div>PRE-WEDDING SHOOT INDOOR</div>
          <div>₹ 25,000</div>
        </div>
        {showDetails && (
           <div className=" additional-details bg-gray-200 ">
           <div className="additional-details bg-gray-200 p-4 rounded-md mt-4">
             <h2 className="text-xl font-semibold">Basic </h2>
             <p>
               <div>
                 <ul>
                   <li>15 20 edited pics</li>
                   <li>2-3 minutes cinamatic video</li>
                   <li>50 plus bollywood sets</li>
                   <li>4 hour shoot</li>
                   <li>vanity room</li>
                 </ul>
               </div>
             </p>
           </div>
           <div className="additional-details bg-gray-200 p-4 rounded-md mt-4">
             <div className=" flex justify-between">
               <h2 className="text-xl font-semibold">Silver</h2>
               <h2>35,000</h2>
             </div>

             <ul>
                   <li>all raw images</li>
                   <li>30 40 edited pics</li>
                   <li>3-4 minutes cinamatic video</li>
                   <li>50 plus bollywood sets</li>
                   <li>4 hour shoot</li>
                   <li>1 save the date</li>
                   <li>vanity room , makeup artist</li>
                 </ul>
           </div>
           <div className="additional-details bg-gray-200 p-4 rounded-md mt-4">
             <div className=" flex justify-between">
               <h2 className="text-xl font-semibold">Gold</h2>
               <h2>45,000</h2>
             </div>
             <ul>
                   <li>all raw images</li>
                   <li>50 60 edited pics</li>
                   <li>5-7 minutes cinamatic video</li>
                   <li>50 plus bollywood sets</li>
                   <li>day & night 6 hour shoot</li>
                   <li>drone shoot</li>
                   <li>1 save the date</li>
                   <li>ac vanity room , makeup artist</li>
                 </ul>
           </div>
         </div>
        )}
      </div>
      <div className="box3 lg:text-2xl space-y-8">
        <h1 className=" text-center text-4xl lg:text-6xl  ">PAYMENT POLICY</h1>
        <div className=" flex w-full justify-between">
          <div>30% - At the Time of booking</div>
        </div>
        <div className=" flex w-full justify-between">
          <div>50% - On Event date</div>
        </div>
        <div className=" flex w-full justify-between">
          <div>20% - After deliverables are delivered </div>
        </div>
      </div>
      <div className="box4 lg:text-2xl md:flex  justify-between space-y-10 md:space-y-0">
        <div>
          <h1 className="text-left text-2xl lg:text-4xl   ">TRAVEL POLICY</h1>
          <p>Travel & Stay paid by client</p>
        </div>
        <div className="box4 lg:text-2xl">
          <h1 className="text-left  text-2xl lg:text-4xl ">
            CANCELLATION POLICY
          </h1>
          <p>Free cancellation before 5 days</p>
        </div>
      </div>
    </div>
  );
};

export default Pakages;
