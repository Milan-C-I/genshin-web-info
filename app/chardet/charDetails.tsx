'use client'
import "@/styles/charDetails.css"
import { Fredoka, Montserrat } from "next/font/google"    
import React, { useEffect, useRef, useState } from "react";
import FullCharInfo from "./fullcharInfo";
import { Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";


const montserrat_font = Montserrat({
    weight: "400",
    subsets: ["latin"],
})
export default function CharDetails({ region , ind }: { region: any , ind: number}) {
    const index = ind;
    const router = useRouter();
    const [currentChar, setCurrentChar] = useState(region[index]);
    const [activeSlideIndex, setActiveSlideIndex] = useState(index);
    const swiperRef = useRef<any>(null);
    const handleSlideChange = (swiper: any) => {
        setCurrentChar(region[swiper.realIndex]);
        setActiveSlideIndex(swiper.realIndex);
        router.replace(`/chardet?char=${region[swiper.realIndex]?.name}`);
      };

      useEffect(() => {
        if (swiperRef.current && ind !== undefined) {
            swiperRef.current.slideToLoop(ind, 0);
        }
        setCurrentChar(region[index]);
        router.replace(`/chardet?char=${region[index]?.name}`);
    }, [index]);
      
    return (
        <div className="character-Details">
            <div className="topNavBar">
                <a href="/" className={montserrat_font.className}>HOME</a>
                <button className={montserrat_font.className}>SKILLS</button>
                <button className={montserrat_font.className}>CONSTELLATION</button>
                <button className={montserrat_font.className}>PASSIVE</button>
            </div>
            <div className="leftSideBar">
                <div className="scrollSection">
                    <button className="scrollUp">
                        <i className="uil uil-angle-up" style={{fontSize:"30px"}}></i>
                    </button>
                    <span className={montserrat_font.className}>SCROLL</span>
                    <button className="scrollDown">
                        <i className="uil uil-angle-down" style={{fontSize:"30px"}}></i>
                    </button>
                </div>
            </div>
            <Swiper 
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation]}
            direction="vertical"
            spaceBetween={0}
            slidesPerView={5}
            navigation={{prevEl: '.scrollUp', nextEl: '.scrollDown'}}
            loop={true}
            // initialSlide={ind}
            onSlideChange={handleSlideChange}
            className="charGrid"
        >
            {region?.map((c: any, index: number) => (
                <SwiperSlide key={c._id} className={`navChar ${montserrat_font.className} ${index === activeSlideIndex ? 'active-slide' : ''}`}>
                    <h1>{c?.name}</h1>
                </SwiperSlide>
            ))}
        </Swiper>
            <FullCharInfo char={currentChar}/>
            <div className="rightSideBar">
                <button className={montserrat_font.className} onClick={() => router.replace("/chardet?char=Albedo")}>MONDSTADT</button>
                <button className={montserrat_font.className} onClick={() => router.replace("/chardet?char=Baizhu")}>LIYUE</button>
                <button className={montserrat_font.className} onClick={() => router.replace("/chardet?char=Arataki Itto")}>INAZUMA</button>
                <button className={montserrat_font.className} onClick={() => router.replace("/chardet?char=Alhaitham")}>SUMERU</button>
                <button className={montserrat_font.className} onClick={() => router.replace("/chardet?char=Charlotte")}>FONTAINE</button>
                <button className={montserrat_font.className} onClick={() => router.replace("/chardet?char=Chasca")}>NATLAN</button>
            </div>
        </div>
    );
}