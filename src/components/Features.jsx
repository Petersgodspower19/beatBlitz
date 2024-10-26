import React from 'react'
import { FaUsers } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa6";
import { FaXbox } from "react-icons/fa";
import { LuBoxes } from "react-icons/lu";
import FeatureCard from './FeatureCard';

const icon1 = <FaUsers size={65} color='#7071E8' />
const icon2 = <FaDropbox size={65} color='#7071E8' />
const icon3 = <FaXbox size={65} color='#7071E8' />
const icon4 = <LuBoxes size={65} color='#7071E8' />

function Features() {
  return (
    <div className='mt-3 px-5 mb-4'>
        <h1 className='text-2xl md:text-4xl font-bold h1 mb-3 text-center'>Product Features</h1>
        <p className='text-center mb-3 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora exercitationem assumenda aperiam recusandae perspiciatis </p>
    <div className='flex items-center justify-center gap-3 flex-wrap'>
      <FeatureCard img={icon1} heading="User Friendly" />
      <FeatureCard img={icon2} heading="Latest Technology" />
      <FeatureCard img={icon3} heading="High Quality" />
      <FeatureCard img={icon4} heading="Awesome Design" />
    </div>
    </div>
  )
}

export default Features
