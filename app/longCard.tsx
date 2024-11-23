'use client';   
import Image from "next/image";
import "@/styles/card.css";
import { useEffect, useRef, useState } from "react";
import { Honk, Russo_One, Trade_Winds } from "next/font/google";

const honk = Trade_Winds({
    weight: "400",
    subsets: ["latin"],
});

export default function LongCard({side}:{side?:string}){

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
                transition: "opacity 1s ease, transform 1s ease",
                transform: isVisible ? "translateX(0)" : side === "right" ? "translateX(25%)" : "translateX(-25%)",
            }}
        >
            <div className="limage"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 1s ease, transform 2s ease",
              transform: isVisible ? "translateX(0)" : side === "right" ? "translateX(25%)" : "translateX(-25%)",
          }}>
            <Image  src="/img/arlechino.png" alt='img' fill  objectPosition="center" objectFit="cover"></Image>
            </div>
            <div className="ltext">
            <h1 className={`lname ${honk.className}`} style={{
                opacity: isVisible ? 1 : 0,
                zIndex:-1,
                transition: "opacity 2s ease, transform 1.5s ease",
                transform: isVisible ? "translateX(0)" : side === "right" ? "translateX(25%)" : "translateX(-25%)",}} >Arlecchino <hr></hr></h1>
            <p className="ldesc"
            style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 2s ease, transform 2s ease",
                transform: isVisible ? "translateY(0)" : "translateY(25%)",
            }}
            >Arlecchino, also known by her codename "The Knave," is a playable Pyro character in Genshin Impact.
She is the Fourth of the Eleven Fatui Harbingers and the current head of the House of the Hearth. She is addressed as "Father" by members of the House, who she calls her "children."</p>
            </div>
        </div>
    )
}