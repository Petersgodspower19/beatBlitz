
import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLinks from './HeaderLinks';
import { IoMenu } from "react-icons/io5";
import { FaHeadphonesAlt, FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';

function Header({ onMenuClick }) {
  const cartItems = useSelector(state => state.cart.cart);

  return (
    <header className='flex items-center justify-between px-3 py-4 lg:px-16 
      lg:py-4 w-full fixed z-1000 bg-backgroundColor text-white shadow-lg'>
      <div className='flex items-center gap-[15px]'>
        <IoMenu color='white' size={32} onClick={onMenuClick} className='md:hidden' />
        <div className='flex items-center gap-[5px]'>
          <FaHeadphonesAlt color='white' size={32} />
          <NavLink to="/" className="no-underline font-bold text-[25px] header">
            <h1>BeatBlitz</h1>
          </NavLink>
        </div>
      </div>
      <div className='flex item-center gap-4'>
      <div className='md:flex items-center gap-5 hidden'>
        <HeaderLinks to="home"><FaHome size={25} color='white' /></HeaderLinks>
        <HeaderLinks to="products"><FaHeadphonesAlt color='white' size={32} /></HeaderLinks>
      </div>
      {Object.keys(cartItems).length > 0  ? 
          <HeaderLinks to="cart"><FaCartShopping size={25} color='red' /></HeaderLinks> :
          <HeaderLinks to="cart"><FaCartShopping size={25} color='white' /></HeaderLinks>
        }
      </div>
    </header>
  );
}

export default Header;
