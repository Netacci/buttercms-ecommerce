import React, { useEffect, useState } from 'react';
import butter from '../butter-client';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from './../redux/action';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notifyMessage, setNotifyMessage] = useState(null);

  const dispatch = useDispatch();
  const addCart = (product) => {
    dispatch(addProduct(product));
    setNotifyMessage(`${product.title} has been added to the cart`);
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      var params = {
        page: '1',
        page_size: '10',
      };
      const res = await butter.content.retrieve(['products'], params);
      setProduct(res.data.data.products);
      setLoading(false);
    };
    getProduct();
  }, []);
  const singleProduct = product.filter((pro) => pro.meta.id === Number(id));

  const Loading = () => {
    return (
      <>
        <div className='flex justify-around'>
          <div className='w-4/12'>
            <Skeleton height={400} />
          </div>
          <div className='w-5/12'>
            <Skeleton height={50} width={300} />
            <Skeleton height={125} />
            <Skeleton height={50} width={150} />
            <Skeleton height={50} />
            <Skeleton height={50} />
          </div>
        </div>
        <div className='text-left pl-10 mt-5'>
          <Skeleton height={50} width={300} />
        </div>
      </>
    );
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {notifyMessage != null && (
            <div className='md:px-20 px-7 py-5 md:py-10 text-center md:w-6/12 mx-auto'>
              <p class='  p-4 md:mb-4 font-medium text-sm text-green-700 bg-green-100 rounded-lg'>
                {notifyMessage}
              </p>
            </div>
          )}

          {singleProduct.map((prod) => (
            <div key={prod.meta.id} className='mx-auto'>
              <div className='flex flex-col md:flex-row justify-center text-center  md:justify-around px-20 py-10'>
                <div className='md:w-5/12'>
                  <img
                    src={prod.image}
                    alt='product'
                    className=' rounded-t-lg '
                  />
                  <h1 className=' mt-5 font-semibold text-2xl'>{prod.title}</h1>
                </div>
                <div className='md:w-5/12'>
                  <h1 className='uppercase text-base md:text-4xl font-light'>
                    {prod.category && prod.category.category}
                  </h1>
                  <p className='mt-4'>{prod.description}</p>
                  <p className='font-bold text-xl mt-5 mb-5'>${prod.price}</p>
                  <div className='flex flex-cols justify-center md:flex-row'>
                    <button
                      onClick={() => addCart(prod)}
                      className='mt-5 text-rose-800 border border-rose-700 hover:bg-rose-800 hover:text-white transition-all ease-in duration-300 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-1 md:mr-4'
                    >
                      Add to cart
                    </button>
                    <NavLink
                      to='/cart'
                      className='mt-5 text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium transition-all ease-in duration-300  rounded-lg text-sm px-5 py-2.5 text-center '
                    >
                      Go to cart
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Product;
