import React, { useEffect, useState } from 'react';
import butter from '../butter-client';
import Tabs from './Tabs';
import Loading from './Loading';
import { NavLink } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      var params = {
        page: '1',
        page_size: '10',
      };
      const res = await butter.content.retrieve(['products'], params);
      setData(await res.data.data.products);
      setFilter(await res.data.data.products);
      setLoading(false);
    };
    getProducts();
  }, []);
  console.log(data);
  console.log(loading);

  const filterProducts = (pr) => {
    const filterProduct = data.filter(
      (product) => product.category.category === pr
    );
    setFilter(filterProduct);
  };
  console.log(filter);
  return (
    <>
      <Tabs filterProducts={filterProducts} data={data} setFilter={setFilter} />
      {loading ? (
        <Loading />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 place-items-center mx-auto transition-all mt-5 duration-700 ease-out '>
          {filter.map((product) => (
            <NavLink
              key={product.meta.id}
              to={`/products/${product.meta.id}`}
              className='transition-all ease duration-300 '
            >
              <div className='max-w-sm md:mr-9 mb-5 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
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
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
