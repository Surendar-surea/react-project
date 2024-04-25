import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from"./images/slide1.png"
import slide2 from"./images/slide2.png"
import slide3 from"./images/slide3.png"
import slide4 from"./images/slide4.png"
import slide5 from"./images/slide5.png"
import slide6 from"./images/slide6.png"
import slide7 from"./images/slide7.png"
import slide8 from"./images/slide8.png"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} className='app-logo' alt=''></img></SwiperSlide>
                <SwiperSlide><img src={slide2} className='app-logo' alt=''></img></SwiperSlide>
                <SwiperSlide><img src={slide3} className='app-logo' alt=''></img></SwiperSlide>
                <SwiperSlide><img src={slide4} className='app-logo' alt=''></img></SwiperSlide>
                <SwiperSlide><img src={slide5} className='app-logo' alt=''></img></SwiperSlide>
                <SwiperSlide><img src={slide6} className='app-logo' alt=''></img></SwiperSlide>
                <SwiperSlide><img src={slide7} className='app-logo' alt=''></img></SwiperSlide>
                <SwiperSlide><img src={slide8} className='app-logo' alt=''></img></SwiperSlide>
                </Swiper>
        
      
    </>
  );
}
