"use client";
import { Montserrat } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

const montserrat_font = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function FullCharInfo({
  char,
  display,
}: {
  char?: any;
  display?: string;
}) {
  const [currentChar, setCurrentChar] = useState(char);
  const [isSliding, setIsSliding] = useState(false);
  const skillRef = useRef<any>(null);

  useEffect(() => {
    if (char?.name !== currentChar?.name) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentChar(char);
        setIsSliding(false);
      }, 300);
    }
    if(skillRef.current?.slideTo){
      skillRef?.current?.swiper.slideTo(0);
    }
  }, [char,display]);

  useEffect(() => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentChar(char);
      setIsSliding(false);
    }, 300);
  },[display]);

  return (
    <div className="characterDetailsContainer">
      {display === "INFO" && (
        <div className={`${montserrat_font.className} characterDetailsContent`} >
          <h1
            className={`characterTitle ${
              isSliding ? "sliding-out-Text" : "sliding-in-Text"
            }`}
            style={{
              transform: isSliding ? "translateX(-100px)" : "translateX(0)",
            }}
          >
            {currentChar?.name.split(" ").map((word: any, index: number) => (
              <span key={index}>
                {word}
                <br />
              </span>
            ))}
          </h1>
          <p
            className={`characterDescription ${
              isSliding ? "sliding-out-Text" : "sliding-in-Text"
            }`}
            style={{
              transition: isSliding
                ? "transform 0.5s ease, opacity 0s ease"
                : "transform 0.5s 0.2s ease, opacity 0.5s 0.2s ease",
            }}
          >
            {currentChar?.description}
          </p>
          <p
            className={`characterLabel ${
              isSliding ? "sliding-out-Text" : "sliding-in-Text"
            }`}
            style={{
              transition: isSliding
                ? "transform 0.5s ease, opacity 0s ease"
                : "transform 0.5s 0.3s ease, opacity 0.5s 0.3s ease",
            }}
          >
            Title{" "}
            <span
              style={{ fontWeight: "bold", textShadow: "1px 1px 1px black" }}
            >
              : {currentChar?.title}
            </span>
          </p>
          <div
            className={`characterAttributes ${
              isSliding ? "sliding-out-Text" : "sliding-in-Text"
            }`}
            style={{
              transition: isSliding
                ? "transform 0.5s ease, opacity 0s ease"
                : "transform 0.5s 0.4s ease, opacity 0.5s 0.4s ease",
            }}
          >
            <span className="characterLabel">
              Affiliation{" "}
              <span style={{ fontWeight: "bold" }}>
                : {currentChar?.affiliation}
              </span>
            </span>
            <span className="characterLabel" style={{ position: "relative" }}>
              Element{" "}
              <span style={{ fontWeight: "bold"}}>
                : {currentChar?.element}
              </span>
              <img
                  style={{
                    width: "10%",
                    display: "inline-block",
                    transform: "translate(0, -20%)",
                  }}
                  src={`/elements/Element_${currentChar?.element}.webp`}
                ></img>
            </span>
            <span className="characterLabel">
              Weapon{" "}
              <span style={{ fontWeight: "bold" }}>
                : {currentChar?.weapon_type}
              </span>
            </span>
            <span className="characterLabel">
              Birthday{" "}
              <span style={{ fontWeight: "bold" }}>
                : {currentChar?.birthday[0]}/{currentChar?.birthday[1]}
              </span>
            </span>
            <span className="characterLabel">
              Domain{" "}
              <span style={{ fontWeight: "bold" }}>
                : {currentChar?.domain}
              </span>
            </span>
            <span className="characterLabel">
              Gender{" "}
              <span style={{ fontWeight: "bold" }}>
                : {currentChar?.gender}
              </span>
            </span>
          </div>
          <div
            className={`characterLanguages ${
              isSliding ? "sliding-out-Text" : "sliding-in-Text"
            }`}
            style={{
              transition: isSliding
                ? "transform 0.5s ease, opacity 0s ease"
                : "transform 0.5s 0.5s ease, opacity 0.5s 0.5s ease",
            }}
          >
            <span className="characterLabel">English</span>
            <span className="characterLabel">Chinese</span>
            <span className="characterLabel">Japanese</span>
            <span className="characterLabel">Korean</span>
            <span className="characterLabel">{currentChar?.cv?.english}</span>
            <span className="characterLabel">{currentChar?.cv?.chinese}</span>
            <span className="characterLabel">{currentChar?.cv?.japanese}</span>
            <span className="characterLabel">{currentChar?.cv?.korean}</span>
          </div>
          <div style={{ color: "white" }}>video button</div>
        </div>
      )}
      {display === "SKILLS" && (
        <div className={`${montserrat_font.className} characterDetailsContent`}>
        <h1
          className={`characterTitle ${
            isSliding ? "sliding-out-Text" : "sliding-in-Text"
          }`}
          style={{
            transform: isSliding ? "translateX(-100px)" : "translateX(0)",
          }}
        >
          {currentChar?.name.split(" ").map((word: any, index: number) => (
            <span key={index}>
              {word}
              <br />
            </span>
          ))}
        </h1>
        <Swiper
        ref={skillRef}
        modules={[Navigation]}
        navigation={{
          nextEl: ".skill-next",
          prevEl: ".skill-prev",
        }}
        spaceBetween={50}
        style={{color:"white",width: "35vw",maxHeight:"400px",paddingRight:"20px",overflowY:"scroll"}}>
            {char?.skills.map((skill:any) =>
                <SwiperSlide key={skill._id}>
                <h1  style={{marginBlock:"20px",width:"25vw"}}>{skill?.name}</h1>
                <p dangerouslySetInnerHTML={{ __html: skill?.description }} />
                </SwiperSlide>)}
        </Swiper>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px"}}>
          <button className="skill-prev"
           style={{color:"white",
            background:"transparent",
            border:"1px solid white",
           }}
          >
          <i className="uil uil-angle-left" style={{fontSize:"30px"}}></i>
          </button>
          <button className="skill-next"
          style={{color:"white",
            background:"transparent",
            border:"1px solid white",
           }}
          >
          <i className="uil uil-angle-right" style={{fontSize:"30px"}}></i>
          </button>
          </div>
        </div>
      )}
      {display === "CONSTELLATION" && (
        <div className={`${montserrat_font.className} characterDetailsContent`}>
        <h1
          className={`characterTitle ${
            isSliding ? "sliding-out-Text" : "sliding-in-Text"
          }`}
          style={{
            transform: isSliding ? "translateX(-100px)" : "translateX(0)",
          }}
        >
          {currentChar?.name.split(" ").map((word: any, index: number) => (
            <span key={index}>
              {word}
              <br />
            </span>
          ))}
        </h1>
        </div>
      )}
      {display === "PASSIVE" && (
        <div className={`${montserrat_font.className} characterDetailsContent`}>
        <h1
          className={`characterTitle ${
            isSliding ? "sliding-out-Text" : "sliding-in-Text"
          }`}
          style={{
            transform: isSliding ? "translateX(-100px)" : "translateX(0)",
          }}
        >
          {currentChar?.name.split(" ").map((word: any, index: number) => (
            <span key={index}>
              {word}
              <br />
            </span>
          ))}
        </h1>
        </div>
      )}
      <div
        className={`characterImage ${isSliding ? "sliding-out" : "sliding-in"}`}
        style={{
          backgroundImage: `url('/${
            currentChar?.region
          }/Character_${currentChar?.name
            ?.split(" ")
            .join("_")}_Full_Wish.webp')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}
