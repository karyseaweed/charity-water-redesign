import Image from 'next/image';
import CaptionContent from './CaptionContent';

import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={16}
        loop={true}
        navigation={{
          clickable: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className='mySwiper w-full h-full'>
        <SwiperSlide>
          <img src='/postina-mob.png' alt='Postina' width='300' height='230' />
          <div className='pt-6 pb-12 flex justify-center items-center bg-white'>
            <div className='text-center w-4/5'>
              <CaptionContent
                isMobile
                name='Postina'
                occupation='entrepreneur'
                quote={
                  "People no longer fall sick like they used to. People would bathe with dirty water. They never used to wash their clothes frequently. However these days, I see people washing clothes. They also use it to cook food, and it's delicious."
                }
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/richard-mob.png' alt='Richard' width='300' height='230' />
          <div className='pt-6 pb-12 flex justify-center items-center bg-white'>
            <div className='text-center w-4/5'>
              <CaptionContent
                isMobile
                name='Richard'
                occupation='teacher'
                quote={
                  'The water point came. Building and construction followed. Then electricity came. And now businesses continue to boom. In this community, I teach people to stick together. I also teach about sanitation, hygiene, and cleanliness at home. When you educate someone, they can support themselves.'
                }
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/joyce-mob.png' alt='Joyce' width='300' height='230' />
          <div className='pt-6 pb-12 flex justify-center items-center bg-white'>
            <div className='text-center w-4/5'>
              <CaptionContent
                isMobile
                name='Joyce'
                occupation='store owner'
                quote={
                  'Before, life was not good. The water was not clean. Diseases were so prevalent. When I gave birth to my firstborn, she often fell sick. Now that we have the water point, there are a lot of changes. When you go to fetch water, you fill find clean water.'
                }
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
