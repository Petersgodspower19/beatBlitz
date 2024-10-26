import React from 'react'
import products from '../pages/homeProducts'
import ProductCard from './ProductCard'

function HomeProducts() {
  return (
    <div className='mt-10 mb-10 text-center flex flex-col justify-center'>
      <h1 className='text-2xl md:text-4xl font-bold mb-3'>Our Products</h1>
      <p className='mb-3 text-[14px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora exercitationem assumenda aperiam recusandae perspiciatis.
      </p>
      <div className='flex justify-center w-fit m-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg'>
          {products.map((product, index) => (
            <ProductCard key={index} img={product.image} name={product.name} price={product.price} item={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeProducts
