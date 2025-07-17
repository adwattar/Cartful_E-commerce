import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from '../img/boBPwYW.jpeg'
import slide2 from '../img/eYtvXS1.jpeg'
import slide3 from '../img/kc0Dj9S.jpg'
import slide4 from '../img/p5NdI6n.jpeg'

export default function Home() {
  return (
    <div className="home h-[80vh] bg-gradient-to-r from-purple-500 to-pink-500 text-white p-10 text-center pt-20 ">
      <h1 className="text-4xl font-bold mt-5">
        Welcome in Cartf<span className="text-blue-700">u</span>i Store
      </h1>
      <p className="mt-7 ">استكشف تشكيلتنا الأحدث</p>

      {/* Swiper Carousel */}
      <div className="mt-10 max-w-5xl max-h-full mx-auto rounded-lg overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide3}
              alt="Slide 3"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide4}
              alt="Slide 3"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>

        </Swiper>
      </div>

    </div>
  );
}
