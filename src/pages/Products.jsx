import React from 'react';
import ProductCard from '../components/ProductCard';
import randomProducts from './products';

function Products() {
  return (
    <div className='products p-3 rounded-lg max-w-screen-lg mx-auto mt-20'>
      {randomProducts.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Products;
