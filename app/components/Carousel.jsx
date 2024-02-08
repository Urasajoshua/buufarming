"use client"
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import ImageSlider from './ImageSlider';

const Carousel = () => {
  return (
<div className=''>
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay: 3000}}
      pagination
    
    >
      <SwiperSlide>
        <ImageSlider image={'/buu.jpg'} message=" Without a customer,
there is no one to serve and
will not exist in the market."/>
      </SwiperSlide>
      <SwiperSlide>
        <ImageSlider image={'/buu1.jpg'} message={'HEALTH,SAFETY AND ENVIRONMENT'} description='MTCL has always had an excellent health and safety record, with
incident rates way below the national average for this industry and
we will continue to invest a great deal of time and effort in ensuring
that our sites are safe places to work'/>
      </SwiperSlide>

      <SwiperSlide>
        <ImageSlider message={' We Believe The Best Way to Solve The Problem is To Build a Sustainable Business Around it'}image={'/buu2.jpg'} />
      </SwiperSlide>
     
    
    </Swiper>
</div>
  );
};

export default Carousel