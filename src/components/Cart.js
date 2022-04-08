import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delProduct } from '../redux/action/index.js';
import { NavLink } from 'react-router-dom';
import { addProduct } from '../redux/action/index.js';
import { Icon } from '@iconify/react';
import EmptyCart from './EmptyCart.js';

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const delCart = (product) => {
    dispatch(delProduct(product));
  };
  const increaseItem = (product) => {
    dispatch(addProduct(product));
  };

  const totalPrice = state.reduce((acc, curr) => {
    return acc + curr.newPrice;
  }, 0);

  return (
    <>
      {state.length !== 0 && (
        <div className=' p-10 md:p-20'>
          {state.map((cartItem) => (
            <div
              className='p-4 max-w-[670px] mx-auto mb-5 md:py-10 relative  text-center bg-white rounded-lg border shadow-md sm:p-8'
              key={cartItem.meta.id}
            >
              <div className='grid grid-cols-1 md:grid-cols-2 mt-4 '>
                <div>
                  <h3 className='text-2xl mb-4 font-semibold'>
                    {cartItem.title}
                  </h3>
                  <div className='md:w-4/12 mx-auto'>
                    <img
                      src={cartItem.image}
                      alt='cart'
                      className='mt-4 md:mt-0'
                    />
                  </div>
                </div>

                <div className='md:ml-10 flex flex-col items-center  '>
                  <div className='absolute  right-0 top-0 cursor-pointer'>
                    <Icon
                      icon='eva:close-circle-fill'
                      className='text-rose-500 text-3xl font-bold'
                      onClick={() => delCart(cartItem)}
                    />
                  </div>
                  <div className='flex mt-5 items-center'>
                    <p className='text-xl font-bold mr-5'>
                      Qty: {cartItem.qty}
                    </p>

                    <p className='ml-5 text-xl font-bold'>
                      ${cartItem.newPrice}
                    </p>
                  </div>

                  <div className='text-center flex mt-4'>
                    <button
                      onClick={() => delCart(cartItem)}
                      className='text-3xl  mr-5 bg-rose-500 text-white rounded px-3'
                    >
                      -
                    </button>
                    <button
                      onClick={() => increaseItem(cartItem)}
                      className='text-3xl ml-5 bg-rose-500 text-white rounded px-3'
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className=' flex px-20 py-10 justify-center items-center'>
            <h3 className='text-xl font-semibold mr-3'>Total Price:</h3>
            <h1 className='font-bold ml-3 text-3xl'>${totalPrice}</h1>
          </div>

          <div className='px-20 text-center mx-auto'>
            <NavLink
              to='/cart'
              className='text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium transition-all ease-in duration-300  rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Proceed to checkout
            </NavLink>
          </div>
        </div>
      )}
      {state.length === 0 && <EmptyCart />}
    </>
  );
};

export default Cart;
