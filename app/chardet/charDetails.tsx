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
    const [dataDisplay,setdataDisplay] = useState("INFO");
    const swiperRef = useRef<any>(null);
    const handleSlideChange = (swiper: any) => {
        setCurrentChar(region[swiper.realIndex]);
        setActiveSlideIndex(swiper.realIndex);
        router.replace(`/chardet?char=${region[swiper.realIndex]?.name}`);
      };

      useEffect(() => {
        if (swiperRef.current && index !== undefined) {
            swiperRef.current.slideToLoop(index, 0,true);
        }
        setCurrentChar(region[index]);
    }, [index]);
      
    return (
        <div className="character-Details"
         style={{backgroundImage: `linear-gradient(90deg,rgb(0, 0, 0,0.75),rgb(0, 0, 0,0.5), rgb(0, 0, 0,0.75)), url('/${currentChar.region}_Slide_Image/${currentChar.name.split(" ").join("_")}_Birthday_2024.webp')`,
        //   style={{backgroundImage: `linear-gradient(90deg,rgb(0, 0, 0,0), rgb(0, 0, 0,0.25)), url('/Archons/Nahida_namecard.png')`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",}}
          >
            <div className="topNavBar">
                <a href="/" className={montserrat_font.className} style={{padding:"15px",border:"1px solid rgba(105, 0, 109, 1"}}>HOME</a>
                <button className={montserrat_font.className} onClick={()=>setdataDisplay("INFO")} style={{background: dataDisplay === "INFO" ? "rgba(105, 0, 109, 0.5)" : "none"}}>INFO</button>
                <button className={montserrat_font.className} onClick={()=>setdataDisplay("SKILLS")} style={{background: dataDisplay === "SKILLS" ? "rgba(105, 0, 109, 0.5)" : "none"}}>SKILLS</button>
                <button className={montserrat_font.className} onClick={()=>setdataDisplay("CONSTELLATION")} style={{background: dataDisplay === "CONSTELLATION" ? "rgba(105, 0, 109, 0.5)" : "none"}}>CONSTELLATION</button>
                <button className={montserrat_font.className} onClick={()=>setdataDisplay("PASSIVE")} style={{background: dataDisplay === "PASSIVE" ? "rgba(105, 0, 109, 0.5)" : "none"}}>PASSIVE</button>
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
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={4}
            breakpoints={{
                1300: {
                    slidesPerView: 4,
                },
                720: {
                    slidesPerView: 5,
                }
            }}
            navigation={{prevEl: '.scrollUp', nextEl: '.scrollDown'}}
            loop={true}
            onSlideChange={handleSlideChange}
            className="charGrid"
        >
            {region?.map((c: any, index: number) => (
                <SwiperSlide key={c._id} className={`navChar ${montserrat_font.className} ${index === activeSlideIndex ? 'active-slide' : ''}`}
                style={{backgroundImage: `linear-gradient(90deg,rgb(0, 0, 0,0.75), rgba(255, 255, 255, 0)), url('/${c.region}_Slide_Image/${c.name.split(" ").join("_")}_Birthday_2024.webp')`}}
                >
                    <h1>{c?.name}</h1>
                </SwiperSlide>
            ))}
        </Swiper>
            <FullCharInfo char={currentChar} display={dataDisplay}/>
            <div className="rightSideBar">
                <button className={montserrat_font.className} onClick={() => router.replace("/chardet?char=Albedo")}>MONDSTADT</button>
                <button className={montserrat_font.className} onClick={() => router.replace("/chardet?char=Baizhu")}>LIYUE</button>
                <button className={montserrat_font.className} onClick={() => router.replace("/chardet?char=Arataki Itto")}>INAZUMA</button>
                <button className={montserrat_font.className} onClick={() => router.replace("/chardet?char=Alhaitham")}>SUMERU</button>
                <button className={montserrat_font.className} onClick={() => router.replace("/chardet?char=Charlotte")}>FONTAINE</button>
                <button className={montserrat_font.className} onClick={() => router.replace("/chardet?char=Chasca")}>NATLAN</button>
                {/* <button className={montserrat_font.className} onClick={() => router.replace("/chardet?char=Arlecchino")}>SNEZHNAYA</button> */}
            </div>
        </div>
    );
}