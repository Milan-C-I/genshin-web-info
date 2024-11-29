'use client'
import "@/styles/charDetails.css"
import { Fredoka, Montserrat } from "next/font/google"    
import React, { useState } from "react";
import FullCharInfo from "./fullcharInfo";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from "swiper/modules";


const montserrat_font = Montserrat({
    weight: "400",
    subsets: ["latin"],
})
export default function CharDetails({ inazumachar }: { inazumachar: any }) {
    const [currentChar, setCurrentChar] = useState(inazumachar[0]);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const handleSlideChange = (swiper: any) => {
        setCurrentChar(inazumachar[swiper.realIndex]);
        setActiveSlideIndex(swiper.realIndex);
    };
    return (
        <div className="character-Details">
            <div className="topNavBar">
                <span className={montserrat_font.className}>HOME</span>
                <span className={montserrat_font.className}>SKILLS</span>
                <span className={montserrat_font.className}>CONSTELLATION</span>
                <span className={montserrat_font.className}>PASSIVE</span>
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
            modules={[Navigation]}
            direction="vertical"
            spaceBetween={0}
            slidesPerView={5}
            navigation={{prevEl: '.scrollUp', nextEl: '.scrollDown'}}
            loop={true}
            onSlideChange={handleSlideChange}
            className="charGrid"
        >
            {inazumachar?.map((c: any, index: number) => (
                <SwiperSlide key={c._id} className={`navChar ${montserrat_font.className} ${index === activeSlideIndex ? 'active-slide' : ''}`}>
                    <h1>{c?.name}</h1>
                </SwiperSlide>
            ))}
        </Swiper>
            <FullCharInfo char={currentChar}/>
            <div className="rightSideBar">
                <span className={montserrat_font.className}>MONDSTADT</span>
                <span className={montserrat_font.className}>LIYUE</span>
                <span className={montserrat_font.className}>INAZUMA</span>
                <span className={montserrat_font.className}>SUMERU</span>
                <span className={montserrat_font.className}>FONTAINE</span>
                <span className={montserrat_font.className}>NATLAN</span>
            </div>
        </div>
    );
}