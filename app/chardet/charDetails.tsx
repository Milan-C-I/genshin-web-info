'use client'
import "@/styles/charDetails.css"
import { Fredoka, Montserrat } from "next/font/google"    
import React, { useEffect, useState } from "react";
import FullCharInfo from "./fullcharInfo";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from "swiper/modules";
import { useRouter, useSearchParams } from "next/navigation";


const montserrat_font = Montserrat({
    weight: "400",
    subsets: ["latin"],
})
export default function CharDetails({ region , ind }: { region: any , ind: number}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentChar, setCurrentChar] = useState(region[ind]);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const handleSlideChange = (swiper: any) => {
        setCurrentChar(region[swiper.realIndex]);
        setActiveSlideIndex(swiper.realIndex);

        router.push(`/chardet?char=${region[swiper.realIndex]?.name}`);
    };

    useEffect(() => {
        const charName = searchParams.get("char");
        if (charName) {
            const index = region.findIndex((char: any) => char.name === charName);
            if (index !== -1 && index !== activeSlideIndex) {
                setActiveSlideIndex(index);
                setCurrentChar(region[index]);
            }
        }
    }, [searchParams, region, activeSlideIndex]);

    return (
        <div className="character-Details">
            <div className="topNavBar">
                <button className={montserrat_font.className} onClick={() => router.push("/")}>HOME</button>
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
            modules={[Navigation]}
            direction="vertical"
            spaceBetween={0}
            slidesPerView={5}
            navigation={{prevEl: '.scrollUp', nextEl: '.scrollDown'}}
            loop={true}
            onSlideChange={handleSlideChange}
            className="charGrid"
            initialSlide={ind}
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