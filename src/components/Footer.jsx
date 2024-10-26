import React from 'react'
import { FaHeadphonesAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import HeaderLinks from './HeaderLinks';

function Footer() {
  return (
    <div className='bg-backgroundColor  px-3 py-4 lg:px-16 
    lg:py-4 w-full'>
      <div className='flex flex-col md:flex-row gap-4   items-start justify-between'>
      <div className='flex flex-col gap-3'>
      <div className='flex items-center gap-[5px]'>
      <FaHeadphonesAlt color='white' size={32}/>
      <NavLink to="/" className="no-underline font-bold text-[25px] header"><h1>BeatBlitz</h1></NavLink>
    </div>
        <p className='w-full md:w-[300px] text-white'>
          Step into a world of excellence. Our headsets combine sleek design with advanced technology fo a 
          truly immersive auditory journey.
        </p>
      </div>
       <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-white text-xl'>Links</h1>
         <div className='flex flex-col gap-2'>
        <HeaderLinks to="products">Products</HeaderLinks>
        <HeaderLinks to="cart">Cart</HeaderLinks>
         </div>
       </div>
       <div className='flex flex-col gap-3'>
       <h1 className='font-bold text-white text-xl'>Contact Us</h1>
       <div className='flex flex-col gap-2'>
        <HeaderLinks>CoffePulse@gmail.com</HeaderLinks>
        <HeaderLinks>+123- 456- 789</HeaderLinks>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Footer
