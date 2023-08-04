
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import poster from '../assets/poster.jpg'

const ImagesPage = () => {
  const { categoryName } = useParams();
  const { name } = useParams();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://spstudio.onrender.com/images/person?category=${categoryName}&name=${name}`
        );
        setImages(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch images');
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  if (loading) {
    return <div className=' text-center'>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    {/* <div className=' relative text-center'>
      <img src={poster} alt="" />
      <h1 style={{fontFamily:" 'Satisfy', cursive"}} className=' absolute top-2 md:top-10 lg:top-20 w-full text-center  text-[#C38D4A] text-xl md:text-4xl lg:text-5xl'>{images[0]?.name} </h1>

    </div> */}
    
    <div className="container mx-auto  w-full md:w-4/6  px-10 py-10  space-y-8 ">
      {/* <h1 className="text:lg md:text-3xl font-bold mb-6 text-center"> {images[0]?.name} {categoryName}</h1> */}
      {/* <hr className=' border-black' /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {images.map((image) => (
          <div
            key={image._id}
            className="p-4 border border-gray-200 rounded cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.imageUrl} alt={image.name} className="mb-2" loading="lazy" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed z-10 top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75">
          <img
            src={selectedImage.imageUrl}
            alt={selectedImage.name}
            className="max-w-full max-h-full"
          />
          <button
            className="absolute top-4 right-4 text-white text-xl font-bold bg-red-500 px-4 py-2 rounded"
            onClick={() => setSelectedImage(null)}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default ImagesPage;

