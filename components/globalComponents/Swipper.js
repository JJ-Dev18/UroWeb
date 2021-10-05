import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default function Swipper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="4.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
