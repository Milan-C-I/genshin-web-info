"use client";
import { Montserrat } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  const [isNameSliding, setIsNameSliding] = useState(false);
  const [opa, setOpa] = useState(false);
  const skillRef = useRef<any>(null);
  const constellationRef = useRef<any>(null);
  const passiveRef = useRef<any>(null);

  useEffect(() => {
    if(skillRef.current?.swiper){
      skillRef?.current?.swiper.slideTo(0);
    }
    if(constellationRef.current?.swiper){
      constellationRef?.current?.swiper.slideTo(0);
    }
    if(passiveRef.current?.swiper){
      passiveRef?.current?.swiper.slideTo(0);
    }
  }, [char,display]);
  
  useEffect(() => {
    if (char?.name !== currentChar?.name) {
      setOpa(false);
      setIsNameSliding(true);
      setTimeout(() => {
        setCurrentChar(char);
        setIsNameSliding(false);
        setOpa(true);
      }, 300);
    }
    if (char?.name !== currentChar?.name && display === "INFO") {
      setIsSliding(true);
      setTimeout(() => {
        setIsSliding(false);
      }, 200);
    }
  }, [char]);

  useEffect(() => {
    if(display === "INFO"){
      setIsSliding(true);
      setTimeout(() => {
        setCurrentChar(char);
        setIsSliding(false);
      }, 200);
    }
    if(display !== "INFO"){
      setIsSliding(true);
      setOpa(false);
      setTimeout(() => {
        setOpa(true);
      },300);
    }
  },[display]);

  return (
    <>
    <div style={{backgroundImage: `url(/elements/Element_${currentChar?.element}.webp)`,
      position: "absolute",
      width:"4rem",height:"5rem",padding:"10px",
      backgroundSize:"3rem",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",right:"0",
      zIndex: "20",
      opacity: isNameSliding ? 0 : 1,transition: "opacity 0.5s ease",
    }}></div>
    <div className="characterDetailsContainer">
      {display === "INFO" && (
        <div className={`${montserrat_font.className} characterDetailsContent`} >
          <h1
            className={`characterTitle ${
              isNameSliding ? "sliding-out-Text" : "sliding-in-Text"
            }`}
            style={{
              transform: isNameSliding ? "translateX(-100px)" : "translateX(0)",
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
                ? "transform 0s ease, opacity 0s ease"
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
                ? "transform 0s ease, opacity 0s ease"
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
                ? "transform 0s ease, opacity 0s ease"
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
          {/* <div style={{ color: "white" }}>video button</div> */}
        </div>
      )}
      {display === "SKILLS" && (
        <div className={`${montserrat_font.className} characterDetailsContent`}>
        <h1
          className={`characterTitle ${
            isNameSliding ? "sliding-out-Text" : "sliding-in-Text"
          }`}
          style={{
            transform: isNameSliding ? "translateX(-100px)" : "translateX(0)",
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
        modules={[Navigation,Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          nextEl: ".skill-next",
          prevEl: ".skill-prev",
        }}
        spaceBetween={50}
        direction="vertical"
        style={{color:"white",width: "35vw",maxHeight:"400px",paddingRight:"20px"}}>
            {char?.skills.map((skill:any) =>
                <SwiperSlide key={skill._id} style={{overflowY:"scroll",paddingRight:"5px",
                  opacity: opa?"1":"0",transition: opa?"opacity 0.5s ease":"opacity 0s ease",
                }}>
                <h1  style={{marginBlock:"20px",width:"25vw"}}>{skill?.name}</h1>
                <p dangerouslySetInnerHTML={{ __html: skill?.description }} />
                </SwiperSlide>)}
        </Swiper>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px"}}>
          <button className="skill-prev"
           style={{color:"white",
            background:"transparent",
            border:"1px solid white",
            opacity: opa?"1":"0",transition: opa?"opacity 0.5s ease":"opacity 0s ease",
           }}
          >
          <i className="uil uil-angle-left" style={{fontSize:"30px"}}></i>
          </button>
          <button className="skill-next"
          style={{color:"white",
            background:"transparent",
            border:"1px solid white",
            opacity: opa?"1":"0",transition: opa?"opacity 0.5s ease":"opacity 0s ease",
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
            isNameSliding ? "sliding-out-Text" : "sliding-in-Text"
          }`}
          style={{
            transform: isNameSliding ? "translateX(-100px)" : "translateX(0)",
          }}
        >
          {currentChar?.name.split(" ").map((word: any, index: number) => (
            <span key={index}>
              {word}
              <br />
            </span>
          ))}
        </h1>
        <Swiper ref={constellationRef}
        modules={[Pagination,Navigation]}
        navigation={{
          nextEl: ".constellation-next",
          prevEl: ".constellation-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={50}
        direction="vertical"
        style={{color:"white",width: "35vw",height:"250px",paddingRight:"20px"}}>
          {char?.constellations.map((constellation:any,index:number) =>
            <SwiperSlide key={constellation._id} style={{overflowY:"scroll",paddingRight:"5px",
              opacity: opa?"1":"0",transition: opa?"opacity 0.5s ease":"opacity 0s ease",
            }}
            >
            <h1  style={{marginBlock:"20px",width:"25vw"}}>C{index+1} {constellation?.name}</h1>
            <p dangerouslySetInnerHTML={{ __html: constellation?.description }} />
            </SwiperSlide>)}  
        </Swiper>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px"}}>
          <button className="constellation-prev"
           style={{color:"white",
            background:"transparent",
            border:"1px solid white",
            opacity: opa?"1":"0",transition: opa?"opacity 0.5s ease":"opacity 0s ease",
           }}
          >
          <i className="uil uil-angle-left" style={{fontSize:"30px"}}></i>
          </button>
          <button className="constellation-next"
          style={{color:"white",
            background:"transparent",
            border:"1px solid white",
            opacity: opa?"1":"0",transition: opa?"opacity 0.5s ease":"opacity 0s ease",
           }}
          >
          <i className="uil uil-angle-right" style={{fontSize:"30px"}}></i>
          </button>
          </div>
        </div>
      )}
      {display === "PASSIVE" && (
        <div className={`${montserrat_font.className} characterDetailsContent`}>
        <h1
          className={`characterTitle ${
            isNameSliding ? "sliding-out-Text" : "sliding-in-Text"
          }`}
          style={{
            transform: isNameSliding ? "translateX(-100px)" : "translateX(0)",
          }}
        >
          {currentChar?.name.split(" ").map((word: any, index: number) => (
            <span key={index}>
              {word}
              <br />
            </span>
          ))}
        </h1>
        <Swiper ref={passiveRef}
        modules={[Pagination,Navigation]}
        navigation={{
          nextEl: ".passive-next",
          prevEl: ".passive-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={50}
        direction="vertical"
        style={{color:"white",width: "35vw",height:"250px",paddingRight:"20px"}}>
          {char?.passives.map((passive:any,index:number) =>
            <SwiperSlide key={index} style={{overflowY:"scroll",paddingRight:"5px",
              opacity: opa?"1":"0",transition: opa?"opacity 0.5s ease":"opacity 0s ease",
            }}
            >
            <h1  style={{marginBlock:"20px",width:"25vw"}}>{passive?.name}</h1>
            <p dangerouslySetInnerHTML={{ __html: passive?.description }} />
            </SwiperSlide>)}  
        </Swiper>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px"}}>
          <button className="passive-prev"
           style={{color:"white",
            background:"transparent",
            border:"1px solid white",
            opacity: opa?"1":"0",transition: opa?"opacity 0.5s ease":"opacity 0s ease",
           }}
          >
          <i className="uil uil-angle-left" style={{fontSize:"30px"}}></i>
          </button>
          <button className="passive-next"
          style={{color:"white",
            background:"transparent",
            border:"1px solid white",
            opacity: opa?"1":"0",transition: opa?"opacity 0.5s ease":"opacity 0s ease",
           }}
          >
          <i className="uil uil-angle-right" style={{fontSize:"30px"}}></i>
          </button>
          </div>
        </div>
      )}
      <div
        className={`characterImage ${isNameSliding ? "sliding-out" : "sliding-in"}`}
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
    </>
  );
}
