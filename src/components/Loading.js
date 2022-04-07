import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <>
      <div className='flex flex-wrap justify-center mx-auto mt-4 '>
        <div className=' w-3/12 mr-3 '>
          <Skeleton height={350} />
        </div>
        <div className='  w-3/12 mr-3 '>
          <Skeleton height={350} />
        </div>
        <div className='w-3/12 mr-3'>
          <Skeleton height={350} />
        </div>
      </div>
    </>
  );
};

export default Loading;
