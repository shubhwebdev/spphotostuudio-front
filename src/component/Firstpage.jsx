import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";


const Firstpage = ({ isToggled, toggleState }) => {
  

 
  return (
    <div className='  fixed  w-screen z-10 top-0 bg-white h-full'>

    <div className=' grid grid-cols-3   lg:grid-cols-5 h-full overflow-hidden '>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div className=' bg-black text-white flex justify-center items-center text-2xl '> <Link className=' border-2 px-5 hover:bg-white hover:text-black' to={'/home'} onClick={toggleState}>Enter</Link></div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
    </div>

  </div>
  )
}

export default Firstpage 