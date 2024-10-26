import React from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

function ProductCard({ item }) {
    const dispatch = useDispatch();

    function addToCartHandler() {
        dispatch(addToCart(item)); 
    }

    return (
        <div className='flex flex-col gap-2 m-auto p-4 product justify-center text-center card'>
            <img src={item.image} alt={item.name} className='w-[200px] h-[200px] m-auto' />
            <h3 className='text-lg font-semibold'>{item.name}</h3>
            <p className='text-xl md:text-2xl font-bold mb-3 text-center'>{item.price}</p>
            <div className='text-center'>
                <Button onClick={addToCartHandler}>Buy Now</Button>
            </div>
        </div>
    );
}

export default ProductCard;
