'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "@/styles/style.css";

const photos = [
  "/img/monstad.jpg",
  "/img/genshin_hero.jpg",
  "/img/monstad.jpg",
  "/img/arlechino.png",
  "/img/childe.jpg",
];

const Carousel = () => {
  return (
    <div className="swipper-container">
      <Swiper
        modules={[Pagination,Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        speed={2000}
        grabCursor={true}
        scrollbar
        breakpoints={{
            320: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              1050: {
                slidesPerView: 3,
              },
          }}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
            className='swiper-image'
              src={photo}
              alt={`Photo ${index + 1}`}
              style={{ borderRadius: '20px',objectFit: 'cover',objectPosition: 'center' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
