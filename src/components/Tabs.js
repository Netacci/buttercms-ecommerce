import React from 'react';

const Tabs = ({ filterProducts, data, setFilter }) => {
  return (
    <>
      <div className='flex flex-wrap mt-5 border-b border-gray-200 dark:border-gray-700 justify-center'>
        <button
          className='mr-2  inline-block py-4 px-4 text-sm font-medium text-center transition duration-700 ease-out  hover:text-teal-600 hover:bg-gray-50 dark:hover:text-gray-300  dark:hover:bg-gray-800 dark:text-gray-500'
          onClick={(e) => {
            e.preventDefault();
            setFilter(data);
          }}
        >
          All
        </button>

        <button
          className='mr-2 inline-block py-4 px-4 text-sm font-medium transition duration-700 ease-out  text-center text-gray-500 rounded-t-lg hover:text-teal-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
          onClick={(e) => {
            e.preventDefault();
            filterProducts("men's clothing");
          }}
        >
          Men's Clothing
        </button>
        <button
          className='mr-2 inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-teal-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
          onClick={(e) => {
            e.preventDefault();
            filterProducts("women's clothing");
          }}
        >
          Women's Clothing
        </button>
        <button
          className='mr-2 inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-teal-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
          onClick={(e) => {
            e.preventDefault();
            filterProducts("children's clothing");
          }}
          data-tab='3'
        >
          Children's clothing
        </button>
        <button
          className={`mr-2 inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-teal-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300 
            }`}
          onClick={(e) => {
            e.preventDefault();
            filterProducts('jewelry');
          }}
        >
          Jewelry
        </button>
      </div>
    </>
  );
};

export default Tabs;
