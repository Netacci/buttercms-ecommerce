import React, { useEffect, useState } from 'react';
import butter from '../butter-client';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navList, setNavList] = useState([]);
  useEffect(() => {
    var params = {
      page: '1',
      page_size: '10',
    };

    butter.content
      .retrieve(['navigation'], params)
      .then((res) => {
        setNavList(res.data.data.navigation);
      })
      .catch((err) => err.message);
  }, []);
  console.log(navList);
  return (
    <>
      <div className='container px-36'>
        <nav className='bg-white border-gray-200 px-2 sm:px-4 py-6 rounded dark:bg-gray-800'>
          <div className=' flex justify-between items-center flex-wrap mx-auto '>
            <NavLink to='/' className='text-3xl font-bold text-teal-700'>
              NetFashion
            </NavLink>
            <div className='flex w-5/12 justify-between items-center flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium'>
              {navList.map((nav) => (
                <NavLink
                  key={nav.meta.id}
                  to={nav.url}
                  className=' py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  {nav.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
