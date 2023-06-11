import homeSlider from "../../../public/homeSlide.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import HomeSliderCard from "../card/homeSlide";

const HomeSlider = () => {
  
  return (
    <>
      <Swiper pagination={{clickable: true}} modules={[Pagination]} className="container mx-auto">
        <SwiperSlide className="flex justify-center"><HomeSliderCard src={homeSlider} name={"Gold big hoops "} price={68.00} path={"/"}/></SwiperSlide>
        <SwiperSlide className="flex justify-center"><HomeSliderCard src={homeSlider} name={"Gold big hoops "} price={68.00} path={"/"}/></SwiperSlide>
        <SwiperSlide className="flex justify-center"><HomeSliderCard src={homeSlider} name={"Gold big hoops "} price={68.00} path={"/"}/></SwiperSlide>
        <SwiperSlide className="flex justify-center"><HomeSliderCard src={homeSlider} name={"Gold big hoops "} price={68.00} path={"/"}/></SwiperSlide>
        <SwiperSlide className="flex justify-center"><HomeSliderCard src={homeSlider} name={"Gold big hoops "} price={68.00} path={"/"}/></SwiperSlide>
        <SwiperSlide className="flex justify-center"><HomeSliderCard src={homeSlider} name={"Gold big hoops "} price={68.00} path={"/"}/></SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
