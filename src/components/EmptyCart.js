import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const EmptyCart = () => {
  return (
    <>
      <div className='md:p-20 p-7 text-center'>
        <div className='flex flex-col md:flex-row place-items-center justify-center text-3xl font-bold'>
          Cart is empty!
          <Icon
            className='text-rose-800 ml-3 mr-3 hidden md:block'
            icon='el:arrow-right'
          />
          <Icon
            className='text-rose-800 ml-3 mr-3 mt-4 mb-4 text-4xl md:hidden'
            icon='entypo:arrow-down'
          />
          <Link
            to='/products'
            className=' text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium transition-all ease-in duration-300  rounded-lg text-sm px-5 py-2.5 text-center'
          >
            Add Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
