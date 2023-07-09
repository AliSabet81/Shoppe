import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation,Pagination,Scrollbar } from 'swiper';
interface IProductSwiper {
    imgs:string[]
}
export const ProductSwiper = (i:IProductSwiper) => {

    return (
        <>
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            scrollbar={true}
            navigation={true}
            modules={[ Scrollbar, Navigation]}
            className="w-full h-productslide"
          >
            {i.imgs.map(i=>
                <SwiperSlide >
                    <img className='h-productslide' src={i} />
                </SwiperSlide>
            )}
          </Swiper>
        </>
      );
}

export default ProductSwiper;
