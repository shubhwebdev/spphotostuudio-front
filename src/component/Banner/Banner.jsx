import React, { useState, useEffect } from 'react';
import one from '../../assets/images/one.jpg'
import two from '../../assets/images/two.jpg'
import three from '../../assets/images/three.jpg'
import four from '../../assets/images/four.jpg'
import five from '../../assets/images/five.jpg'
import six from '../../assets/images/six.jpg'
import seven from '../../assets/images/seven.jpg'
// import eight from '../../assets/images/eight.jpg'
// import nine from '../../assets/images/nine.jpg'
// import ten from '../../assets/images/ten.jpg'
// import eleven from '../../assets/images/eleven.jpg'
// import tweleve from '../../assets/images/tweleve.jpg'

const Banner = () => {
  const images = [
 one ,two,three ,four,five,six,seven];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Autoplay interval: 3 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative px-0 lg:px-0">
      <img src={images[currentIndex]} alt="Slider" className="object-cover w-full h-64 md:h-[60vh] lg:h-[85vh]  " />

      <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-2 p-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-0 h-0 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      <div className="absolute  top-1/2 w-full  justify-between transform-translate-y-1/2 flex   ">
        <button
          className="w-10 h-10 text-4xl text-white flex items-center justify-center"
          onClick={goToPreviousSlide}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <button
          className="w-10 h-10  text-4xl     text-white flex items-center justify-center"
          onClick={goToNextSlide}
        >
          
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
            
    </div>
  );
};

export default Banner;
