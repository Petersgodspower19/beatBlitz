import React from 'react'

function FeatureCard({ img, heading }) {
  return (
    <div className='flex flex-col w-[70%] gap-2 lg:w-1/4 p-5 justify-center text-center card'>
      <div className='flex justify-center'>{img}</div>
      <h1 className='text-xl md:text-2xl font-bold mb-3 text-center'>{heading}</h1>
      <p className='text-[13px]'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Debitis ab voluptatum nulla velit iusto eius adipisci rerum! Laboriosam quae,
        atque soluta facere, sint dignissimos nesciunt ipsa quasi consequuntur et ab!
        Quas velit itaque est maxime blandi
      </p>
    </div>
  )
}

export default FeatureCard
