import React from 'react'

const About = () => {




  const textWithStrokeStyle = {
    WebkitTextFillColor: "transparent", // Make the text transparent
    WebkitTextStroke: "2px black", // Text stroke (size and color) for WebKit-based browsers
    textStroke: "2px transparent", // Text stroke (size and color) for other browsers
     // Text color
  };

  return (
    <div  className='   md:w-3/4 mx-auto  text-lg md:text-2xl  font-bold   leading-10   space-y-10 capitalize ' >
   {/* <h1 style={textWithStrokeStyle} className=' md:text-9xl  text-4xl uppercase text-center text-transparent  font-serif'>about us</h1> */}
<p  className=''>I am Kislay Verma the owner of SP Photography, based in NCR. My team and I have been working since 2012 and have covered 300 weddings till march 2020.</p>

  <p className=' drop-shadow-2xl'>The SP Photography is a  Delhi based  Wedding Photography Studio that specialises in weddings and all its’ related ceremonies along with pre-wedding shoots. Our professionals practice photography and fine art photography too. We love to travel across the nation capturing the most precious moments from weddings of all the cultures.</p>


  <p>
  We cover all the fun and emotional moments of your pre-wedding, wedding and post-wedding functions and combine them in an album, for you to adore forever. SP Photography owns a good reputation of work and is serving the clients for more than a decade that is why we are the top most demand of every wedding and prewedding shoot lovers.
  </p>
  <p>
  Our studio has a team of professional photographers who have expertise in capturing people in their natural environments, situations and emotions Our vision is to offer quality work on time coz' we know you deserve the best. So the work is so created that you cherish your lifetime moments and enjoy the beautiful stories that are magically crafted with cameras'.
  </p>

 




    </div>
  )
}

export default About