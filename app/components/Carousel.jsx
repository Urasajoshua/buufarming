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
        <ImageSlider image={'/buu.jpg'} message="Buu Farm aim to bring up suitainable and innovative farming practises in Africa and Waste management."/>
      </SwiperSlide>
      <SwiperSlide>
        <ImageSlider image={'/buu1.jpg'} message={'Remember, it`s not just the environment that benefits from our teamwork it`s also our own well-being and the well-being of future generations. '} description=''/>
      </SwiperSlide>

      <SwiperSlide>
        <ImageSlider message={'We achieved developing different green techlologies for waste management, including rectors and agricultural products'}image={'/buu2.jpg'} />
      </SwiperSlide>
     
    
    </Swiper>
</div>
  );
};

export default Carousel