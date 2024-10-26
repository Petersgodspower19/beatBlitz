import React from 'react'
import image from "../assets/img/about.png"
import Checked from './Checked'

function About() {
  return (
    <div className='bg-white md:px-13 px-30 md:py-13  flex flex-col md:flex-row 
    items-center justify-around gap-3'>
      <img src={image} alt="" />
      <div className='w-full md:w-[500px] px-5'>
      <h1 className='text-2xl md:text-4xl font-bold h1 mb-3'>
          About Products
        </h1>
        <p>Experience audio redefined. Our headsets deliver quality, comfort, and style in every note.</p>
        <p className='text-[12px] mt-3 mb-2 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Repellendus debitis repellat inventore, harum non et quasi veniam, quae in eaque a! 
        Cum nemo vero eaque error voluptatem autem, praesentium earum?</p>
        <div className='mt-3 flex flex-col gap-3'>
            <Checked text="Wireless Headphones" />
            <Checked text="High Quality Sounds" />
            <Checked text="Voice Call Facility" />
            <Checked text="Nice and Soft Design" />
        </div>
      </div>
    </div>
  )
}

export default About
