'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/pagination';
import "@/styles/style.css";

const photos = [
  "/CarouselImages/ei.jpg",
  "/CarouselImages/natlan.jpg",
  "/CarouselImages/yae.jpg",
  "/CarouselImages/arc.jpg",
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <div className="swipper-container" style={{backgroundImage: `url(${(windowWidth !== null && windowWidth > 1024) ? photos[(activeSlide+1)%photos.length]:photos[activeSlide]})`,
      transition: 'background-image 0.5s ease-in-out',
    }}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        speed={2000}
        grabCursor={true}
        scrollbar
        breakpoints={
          {
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }
        }
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
