import React, { useEffect, useState } from 'react';
import butter from '../butter-client';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Hero = () => {
  const [hero, setHero] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getHero = async () => {
      setLoading(true);
      const res = await butter.page.retrieve('*', 'home');

      setHero(res.data.data.fields.slider);
      setLoading(false);
    };

    getHero();
  }, []);
  console.log(hero);
  return (
    <>
      <div>
        {loading ? (
          <Skeleton width={'100%'} height={645} />
        ) : (
          <Swiper
            slidesPerView={1}
            loop={true}
            slideNextClass='swiper-slide-next'
            slidePrevClass='swiper-slide-prev'
            autoplay={{
              delay: 2500,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
          >
            <div>
              {hero.map((x) => (
                <SwiperSlide key={x.title}>
                  <div className='  border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative '>
                    <img className='w-full ' src={x.image} alt='' />

                    <div className='p-5 absolute top-10 right-10 pr-20'>
                      <a href='#f'>
                        <h5 className='mb-2 lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white '>
                          {x.title}
                        </h5>
                      </a>
                      <p className='mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400'>
                        {x.description}
                      </p>
                      <a
                        href='#f'
                        className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 mt-3 transition-all ease-in duration-400'
                      >
                        {x.btn_label}
                        <svg
                          className='ml-2 -mr-1 w-4 h-4'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}{' '}
            </div>
          </Swiper>
        )}
      </div>
    </>
  );
};

export default Hero;
