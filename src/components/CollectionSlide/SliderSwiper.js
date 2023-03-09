import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SliderBox from "./SliderBox";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper";

//Import Local Images
import Harry from "../../img/movies/HarryPotter.jpg";

const SliderSwiper = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <SliderBox collIMG={Harry} collTxt="هری پاتر" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={Harry} collTxt="هری پاتر" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={Harry} collTxt="هری پاتر" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={Harry} collTxt="هری پاتر" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={Harry} collTxt="هری پاتر" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={Harry} collTxt="هری پاتر" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={Harry} collTxt="هری پاتر" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={Harry} collTxt="هری پاتر" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
