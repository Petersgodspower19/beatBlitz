import React from 'react'

function Button({children, onClick}) {

  if(onClick) return <button onClick={onClick}  className='bg-backgroundColor text-white rounded-[5px]  button  px-[10px] button'>
  {children}
</button>
  return (
    <button  className='bg-backgroundColor text-white rounded-[5px]  button  px-[10px] button'>
      {children}
    </button>
  )
}

export default Button
