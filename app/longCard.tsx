'use client';   
import Image from "next/image";
import "@/styles/card.css";
import { useEffect, useRef, useState } from "react";
import { Fredoka, Trade_Winds } from "next/font/google";

const tradeWinds = Trade_Winds({
    weight: "400",
    subsets: ["latin"],
});

const fredoka_font = Fredoka({
    weight: "400",
    subsets: ["latin"],
})

export default function LongCard({archon,side,textcolor}:{archon?:any,side?:string,textcolor?:string}) {

  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.75 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

    return(
        <div className={side === "right" ? "rightcard lcard" : "lcard"}
            ref={cardRef}
            style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 1s ease, transform 1s ease,background 0.5s ease,scale 0.5s ease",
                transform: isVisible ? "translateX(0)" : side === "right" ? "translateX(25%)" : "translateX(-25%)",
                backgroundImage: `linear-gradient(white, rgba(255, 255, 255, 0)), url('Archons/${archon?.name.split(' ').join('')}_namecard.png')`,
            }}
        >
            <div className="limage"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 1s ease, transform 2s ease",
              transform: isVisible ? "translateX(0)" : side === "right" ? "translateX(25%)" : "translateX(-25%)",
              backgroundImage: `linear-gradient(white, rgba(255, 255, 255, 0)), url('Archons/${archon?.name.split(' ').join('')}_namecard.png')`,
          }}>
            <Image  src={`/Archons/${archon?.name.split(' ').join('')}.png`} alt='img' fill  objectPosition="center" objectFit="cover"></Image>
            </div>
            <div className="ltext">
            <h1 className={`lname ${tradeWinds.className}`} style={{
                textShadow : `2px 2px 2px ${textcolor}`,
                opacity: isVisible ? 1 : 0,
                zIndex:-1,
                transition: "opacity 2s ease, transform 1.5s ease",
                transform: isVisible ? "translateX(0)" : side === "right" ? "translateX(25%)" : "translateX(-25%)",}} >
                  {archon?.name}
                  <hr/></h1>
            <p className={`ldesc ${fredoka_font.className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 2s ease, transform 2s ease",
                transform: isVisible ? "translateY(0)" : "translateY(25%)",
            }}>
              {archon?.description}</p>
            </div>
            <div className="elementofchar" style={{backgroundImage: `url(${`/elements/Element_${archon?.vision}.webp`})`}}></div>
        </div>
    )
}