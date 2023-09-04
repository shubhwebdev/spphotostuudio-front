import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import LazyImage from './LazyImage';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
// import './Home/blur.css'


const Firstpage = ({ isToggled, toggleState }) => {
  

 
  return (
    <div className='  fixed  w-screen z-10 top-0 bg-white h-[100vh]'>

    <div className=' grid grid-cols-3   lg:grid-cols-5 h-full grid-rows-3 overflow-hidden '>
        <div className=' overflow-hidden h-full w-full'><LazyLoadImage   src="https://res.cloudinary.com/dmhzsmx4p/image/upload/v1688558449/k7l5mzsbwus7p5i0btsp.jpg"  className=" object-cover w-full h-full object-center " /></div>
        <div className=' overflow-hidden h-full w-full'><LazyLoadImage src="https://res.cloudinary.com/dmhzsmx4p/image/upload/v1693391924/yxh3nx6busspojuhssf1.jpg"  className=" object-cover w-full h-full object-center " /></div>
        <div className=' overflow-hidden h-full w-full'><LazyLoadImage src="https://res.cloudinary.com/dmhzsmx4p/image/upload/v1693379961/avsxobvkouznbboeqk4o.jpg"  className=" object-cover w-full h-full object-center " /></div>
        <div className=' overflow-hidden h-full w-full'><LazyLoadImage src="https://res.cloudinary.com/de0baexee/image/upload/v1691156974/lozkvsppeyvc4g8jrzz0.jpg"  className=" object-cover w-full h-full object-center " /></div>
        <div className=' overflow-hidden h-[100%] w-full'><LazyLoadImage src="https://res.cloudinary.com/de0baexee/image/upload/v1691157226/pcuph4x83glyppkrxpql.jpg" className=" object-cover w-full h-full object-center " /></div>
     
    
       
        <div className=' overflow-hidden h-full w-full'><LazyLoadImage   src="https://res.cloudinary.com/dmhzsmx4p/image/upload/v1693382651/iptt9zxzts9e1l8scsvv.jpg"  className=" object-cover w-full h-full object-top " /></div>
        <div className=' overflow-hidden h-full w-full'><LazyLoadImage   src="https://res.cloudinary.com/de0baexee/image/upload/v1691295937/ftto9m6ebjarpivks3vi.jpg"  className=" object-cover w-full h-full object-top " /></div>
      
        <div className=' bg-black text-white flex justify-center items-center text-2xl '> <Link className=' border-2 px-5 hover:bg-white hover:text-black' to={'/home'} onClick={toggleState}>Enter</Link></div>
        <div className=' overflow-hidden h-full w-full'><LazyLoadImage   src="https://res.cloudinary.com/de0baexee/image/upload/v1691156604/ypggmwkynfx3hsfvnmyn.jpg"  className=" object-cover w-full h-full object-bottom " /></div>
        <div className=' overflow-hidden h-full w-full'><LazyLoadImage   src="https://res.cloudinary.com/de0baexee/image/upload/v1691156718/mzepawlpry66gjemfya7.jpg"  className=" object-cover w-full h-full object-bottom " /></div>
       
        <div className=' overflow-hidden h-full w-full'><LazyLoadImage   src="https://res.cloudinary.com/de0baexee/image/upload/v1691156724/njwf5rkxzcgyx0kvzpoj.jpg"  className=" object-cover w-full h-full object-center " /></div>
        <div className=' overflow-hidden h-full w-full'><LazyLoadImage src="https://res.cloudinary.com/dmhzsmx4p/image/upload/v1693391924/yxh3nx6busspojuhssf1.jpg"  className=" object-cover w-full h-full object-center " /></div>
        <div className=' overflow-hidden h-full w-full'><LazyLoadImage src="https://res.cloudinary.com/dmhzsmx4p/image/upload/v1693379961/avsxobvkouznbboeqk4o.jpg"  className=" object-cover w-full h-full object-center " /></div>
        <div className=' overflow-hidden h-full w-full'><LazyLoadImage src="https://res.cloudinary.com/de0baexee/image/upload/v1691156974/lozkvsppeyvc4g8jrzz0.jpg"  className=" object-cover w-full h-full object-center " /></div>
        <div className=' overflow-hidden h-[100%] w-full'><LazyLoadImage src="https://res.cloudinary.com/de0baexee/image/upload/v1691157226/pcuph4x83glyppkrxpql.jpg" className=" object-cover w-full h-full object-center " /></div>
    </div>

  </div>
  )
}

export default Firstpage 