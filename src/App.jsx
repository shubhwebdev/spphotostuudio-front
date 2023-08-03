import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 

import Navbar from './component/Navbar';
import Home from './component/Home/Home';
import Footer from './component/Footer';
import ImagesPage from './component/ImagesPage';
import Kids from './pages/Kids';
import Admin from './component/admin/Admin';
import NotFound from './component/NotFound';
import Uplode from './component/admin/Uplode';
import RandomImage from './component/RandomImage';
import Firstpage from './component/Firstpage';
import Pakages from "./component/Pakages";

function App() {



  return (
    <>
    
    <Router>
      <div className="flex flex-col justify-between min-h-screen bg-[#F5F1EB] overflow-hidden  relative">
           

      
     
         <div className=""> 
      
        <Navbar/> 
        </div> 
        <Routes>

          <Route exact path="/" element={<Firstpage />} />
        </Routes>
        <div className=' min-h-screen w-11/12 md:w-10/12 mx-auto mt-10 overflow-hidden '>
      
          <Routes>



          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/uplode" element={ <Uplode />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/gallery" element={<RandomImage category="gallery" />} />
            <Route path="/maternity" element={<RandomImage category="maternity" />} />
            <Route path="/kids" element={<RandomImage category="kids" />} />
            <Route path="/:categoryName" element={<Kids />} />
            <Route path="/:categoryName/:name" element={<ImagesPage />} />
            <Route path="/package" element={<Pakages/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
         <div className="mt-4"> 
         <Footer/>
      
         </div> 
        <a
          href="https://wa.me/9718510001"
          className="whatsapp_float fixed right-10 bottom-10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon text-3xl text-white bg-green-400 rounded-full h-12 w-12 text-center flex items-center justify-center"></i>
        </a>
      </div>
    </Router>
    </>
  );
}

export default App;
