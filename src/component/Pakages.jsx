import React from 'react'

const Pakages = () => {
  return (
    <div className=' space-y-10  pb-20'>
      <div className="box1">
        <img src="" alt="" />
      </div>
      <div className="box2 lg:text-2xl space-y-8 ">
        <h1  className=' text-center  text-4xl lg:text-6xl'>Pricing</h1>
      
        <div className=' flex w-full justify-between '>
          <div>CINEMATIC CANDID</div>
          <div>₹ 55,000 </div>
        </div>
        <div className=' flex w-full justify-between'>
          <div>TRADITIONAL WEDDING </div>
          <div>₹ 35,000</div>
        </div>
        <div className=' flex w-full justify-between'>
          <div>PRE-WEDDING SHOOT</div>
          <div>₹ 30,000</div>
        </div>
      
       
      </div>
      <div className="box3 lg:text-2xl space-y-8">
        <h1  className=' text-center text-4xl lg:text-6xl  '>PAYMENT POLICY</h1>
        <div className=' flex w-full justify-between'>
          <div>30% - At the Time of booking</div>
    
        </div>
        <div className=' flex w-full justify-between'>
          <div>50% - On Event date</div>

        </div>
        <div className=' flex w-full justify-between'>
          <div>20% - After deliverables are delivered </div>
       
        </div>
      
       
      </div>
      <div className="box4 lg:text-2xl md:flex  justify-between space-y-10 md:space-y-0">
       <div>

        <h1 className='text-left text-2xl lg:text-4xl   '>TRAVEL POLICY</h1>
        <p>Travel & Stay paid by client</p>
       </div>
       <div className="box4 lg:text-2xl">
        <h1 className='text-left  text-2xl lg:text-4xl '>CANCELLATION POLICY</h1>
        <p>Free cancellation before 7 days</p>
      </div>
      </div>
  
   
    </div>
  )
}

export default Pakages