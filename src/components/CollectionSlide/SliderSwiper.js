import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SliderBox from "./SliderBox";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

//Import Local Images
import Harry from "../../img/movies/HarryPotter.jpg";
import Fast from "../../img/movies/Fast.jpg";
import Mission from "../../img/movies/Mission.jpg";
import MenInBlack from "../../img/movies/MenInBlack.jpg";
import Habit from "../../img/movies/Habit.jpg";
import Avatar from "../../img/movies/AVT.jpeg";
import KingsMan from "../../img/movies/KingsMan.jpg";
import Maze from "../../img/movies/Maze.jpg";

const SliderSwiper = () => {
  return (
    <div>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
        modules={[Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <SliderBox collIMG={Harry} collTxt="هری پاتر" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={Fast} collTxt="سریع و خشن " />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={Mission} collTxt="ماموریت غیر ممکن" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={MenInBlack} collTxt="مردان سیاه پوش" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={Habit} collTxt="ارباب حلقه ها" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={Avatar} collTxt="آواتار" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={KingsMan} collTxt="کینگز من" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBox collIMG={Maze} collTxt="دونده هزارتو" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
