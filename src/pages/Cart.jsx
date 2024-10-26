import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart } from '../cartSlice';
import Button from '../components/Button';
import { TbMoodEmptyFilled } from "react-icons/tb";

function Cart() {
    const cartItems = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const handleRemove = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7071E8",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "item has been removed from cart",
                icon: "success"
              });
              dispatch(removeFromCart(item));
            }
          });
        
    };
  function handleClearCart() {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#7071E8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Clear Cart"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Cleared",
            text: "Your Cart has been Cleared!",
            icon: "success"
          });
          dispatch(clearCart());
        }
      });
  }


    return (
        <div className="bg-white p-6 rounded-lg max-w-screen-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
            {Object.keys(cartItems).length === 0 ? (
                <div className='text-center text-lg flex items-center gap-3'>
                 <TbMoodEmptyFilled size={32} />
                  <p className="">Your cart is empty.</p>
                </div>

            ) : (
                <div className="space-y-4">
                    {Object.keys(cartItems).map((itemId) => {
                        const item = cartItems[itemId];
                        return (
                            <div
                            key={itemId}
                        className="flex items-center gap-2 flex-col   sm:flex-row justify-between bg-secondaryColor p-4 rounded-md shadow-md"
                            >
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                                    <div>
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                            <p className="text-md">Price: {item.price}</p>
                                        <p className="text-md">Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                                <Button onClick={() => handleRemove(item)}>Remove</Button>
                            </div>
                        );
                    })}
                </div>
            )}
            {Object.keys(cartItems).length > 0 &&
           <div className='mt-8'>
           <Button onClick={() => handleClearCart()}>Clear Cart</Button> 
           </div> }
        </div>
    );
}

export default Cart;
