import React, { useEffect, useRef, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

import * as THREE from 'three';
import RINGS from 'vanta/dist/vanta.rings.min.js';

const Gallery = () => {
    
  const [isNavigationEnabled, setIsNavigationEnabled] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsNavigationEnabled(false);
    } else {
      setIsNavigationEnabled(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
    return (
    // <div className='gallery' ref={vantaRef}>
    <div className='gallery'>
        <h1>Gallery</h1>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={isNavigationEnabled}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../../assets/slider-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/slider-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/slider-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/slider-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/slider-5.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};
  
export default Gallery;  