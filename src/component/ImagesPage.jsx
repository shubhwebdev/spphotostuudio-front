
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
    return <div  className=" h-[50vh] w-full  flex justify-center items-center" role="status">
    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    <span class="sr-only text-black">Loading...</span>
    </svg>
</div>
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
    
    <div className="container mx-auto  w-full md:w-4/6  px-10   space-y-8 ">
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

