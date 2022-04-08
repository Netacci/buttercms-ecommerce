import React, { useEffect, useState } from 'react';
import butter from '../butter-client';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [navList, setNavList] = useState([]);
  const [loading, setLoading] = useState(false);
  const state = useSelector((state) => state.handleCart);
  console.log(state);
  useEffect(() => {
    const getNav = async () => {
      setLoading(true);
      var params = {
        page: '1',
        page_size: '10',
      };

      const res = await butter.content.retrieve(['navigation'], params);

      setNavList(res.data.data.navigation);
      setLoading(false);
    };
    getNav();
  }, []);

  const Loading = () => {
    return (
      <div className='flex  md:justify-between items-center  mt-4 flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium'>
        <Skeleton width={50} />
        <Skeleton width={50} />
        <Skeleton width={50} />
        <Skeleton width={50} />
      </div>
    );
  };

  return (
    <>
      <div className='container md:px-36'>
        <nav className='bg-white border-gray-200 px-2 sm:px-4 py-6 rounded dark:bg-gray-800'>
          <div className=' flex justify-between items-center flex-wrap mx-auto md:flex-row flex-col '>
            <NavLink to='/' className='text-3xl font-bold text-pink-700'>
              NetFashion
            </NavLink>
            {loading ? (
              <Loading />
            ) : (
              <div className='flex  md:justify-between items-center  mt-4 flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium'>
                {navList.map((nav) => (
                  <NavLink
                    key={nav.meta.id}
                    to={nav.url}
                    className=' py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    {nav.label}
                  </NavLink>
                ))}
              </div>
            )}
            <NavLink
              to='/cart'
              className='cursor-pointer relative mt-7 md:mt-0'
            >
              <Icon icon='el:shopping-cart' className='text-gray-700 ' />
              <p className=' bg-rose-300 p-1 px-2 text-white rounded-full text-xs absolute -top-4 left-3'>
                {state.length}
              </p>
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
