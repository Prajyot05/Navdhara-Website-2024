import React, { useEffect, useRef } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

import * as THREE from 'three';
import RINGS from 'vanta/dist/vanta.rings.min.js';

const Gallery = () => {
    
  // const vantaRef = useRef(null);
  // const swiperRef = useRef(null);

  // useEffect(() => {
  //   const vantaEffect = RINGS({
  //     el: vantaRef.current,
  //     THREE,
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.00,
  //     minWidth: 200.00,
  //     scale: 1.00,
  //     scaleMobile: 1.00,
  //     backgroundColor: 0x111111,
  //     color2: 0xffa400
  //   });

  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, []);
  
    return (
    // <div className='gallery' ref={vantaRef}>
    <div className='gallery'>
        <h1>Gallery</h1>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
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
        <SwiperSlide>
          <img src="../../assets/slider-6.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};
  
export default Gallery;  