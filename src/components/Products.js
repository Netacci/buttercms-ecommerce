import React, { useEffect, useState } from 'react';
import butter from '../butter-client';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      var params = {
        page: '1',
        page_size: '10',
      };
      const res = await butter.content.retrieve(['products'], params);
      setData(await res.data.data.products);
      setLoading(false);
    };
    getProducts();
  }, []);
  console.log(data);
  console.log(loading);

  return (
    <>
      <div className='flex flex-wrap flex-row justify-center mx-auto'>
        {data.map((product) => (
          <div
            className='max-w-sm mr-9 mb-5 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'
            key={product.meta.id}
          >
            <img
              className='p-8 rounded-t-lg w-full'
              src={product.image}
              alt={product.name}
            />
            <div className='px-5 pb-5 text-center'>
              <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                {product.title}
              </h5>
            </div>
            <div className='flex justify-around pb-5 items-center'>
              <span className='text-3xl font-bold text-gray-900 dark:text-white'>
                ${product.price}
              </span>
              <button className='text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
