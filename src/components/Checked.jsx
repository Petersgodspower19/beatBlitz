import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

function Checked({text}) {
  return (
    <div className='flex items-center gap-2'>
      <FaCheckCircle color='#7071E8' />
      <p className='text-[14px] font-bold'>{text}</p>
    </div>
  )
}

export default Checked
