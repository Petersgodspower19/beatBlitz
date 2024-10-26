import React from 'react'
import Button from '../components/Button'
import image from "../assets/img/hero (1).png"
import About from '../components/About'
import Features from '../components/Features'
import HomeProducts from '../components/HomeProducts'

function Home() {
  return (
    <div className='md:px-13 px-30 md:py-13 pt-20'>
    <div className='bg-white  flex flex-col md:flex-row 
    items-center justify-around gap-5' id='home'>
     <div className='w-full md:w-[500px] px-5'>
     <h1 className='text-2xl md:text-4xl font-bold h1 mb-3'>
          Discover Next-Level Audio Experiences
        </h1>
        <p>
          Boost your productivity and build your mood with a glass of coffee in the morning
        </p>
        <div className='flex items-center gap-2 uppercase mt-4'>
          <Button>Add to Cart</Button>
          <Button>More Menu</Button>
        </div>
     </div>
     <img src={image} alt=''  />
    </div>
    <About />
    <Features />
    <HomeProducts />
    </div>
  )
}

export default Home
