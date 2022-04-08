import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const EmptyCart = () => {
  return (
    <>
      <div className='px-20 py-20 text-center'>
        <div className=' flex place-items-center justify-center text-3xl font-bold'>
          Cart is empty!
          <Icon className='text-rose-800 ml-3 mr-3' icon='el:arrow-right' />
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
