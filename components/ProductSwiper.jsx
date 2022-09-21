import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import PropTypes from "prop-types";
import "swiper/css";
import { useState } from "react";

const ProductSwiper = () => {
  const images = [
    "./product1.png",
    "./product2.png",
    "./product3.png",
    "./product1.png",
    "./product2.png",
  ];
  const [activeThumb, setActiveThumb] = useState(null);

  return (
    <>
    <div className=" ">
      <div className=" w-[553px]">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb  && !activeThumb.destroyed ? activeThumb : null }}
        className=""
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} className="h-[400px]  rounded" alt="product images" />
          </SwiperSlide>
        ))}
      </Swiper>

      </div>
      
      <div className=" w-[553px]">
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        modules={[Navigation, Thumbs]}
        className=""
        onSwiper={setActiveThumb}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} >
            <div className="mt-2">
              <img src={item} alt="product images"  className="h-[80px] object-cover hover:cursor-pointer rounded"/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      </div>
    </>
  );
};

ProductSwiper.propTypes = {
  images: PropTypes.array.isRequired,
};
export default ProductSwiper;
