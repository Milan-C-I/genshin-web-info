'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Trade_Winds } from "next/font/google";
// import { Character } from "@/backend/interface";

const fontName = Trade_Winds({
    weight: '400',
    subsets: ['latin'],
})

export default function CharCard({char}:{char?:any}) {
    const [isVisible,setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            })
        },{threshold:0.50});

        if(cardRef.current){
            observer.observe(cardRef.current);
        }
        return () => {
            if(cardRef.current){
                observer.unobserve(cardRef.current);
            }
        }
    }
    ,[]);

    return(
        <div ref={cardRef} className="charCard"
            style={{
                opacity: isVisible ? 1 : 0 ,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 1s ease, transform 1s ease'
            }}
        >
            <div className="charImage" style={{
                    opacity: isVisible ? 1 : 0 ,
                    transform: isVisible ? 'translateY(0)' : 'translateY(50%)',
                    transition: 'opacity 2s ease, transform 2s ease'
                }}>
                <Image  src={char?.img_url} alt={char?.character_name} fill  objectPosition="center" objectFit="cover"
                
                ></Image>
            </div>
            <h1 className={`charName ${fontName.className}`}
            style={{
                opacity: isVisible ? 1 : 0 ,
                transform: isVisible ? 'translateY(0)' : 'translateY(50%)',
                transition: 'opacity 2s ease, transform 2s ease'
            }}>
                {char?.character_name}
                {/* Arlecchino */}
            <hr></hr></h1>
            <p className="charDesc"
            style={{
                opacity: isVisible ? 1 : 0 ,
                transform: isVisible ? 'translateY(0)' : 'translateX(50%)',
                transition: 'opacity 2s ease, transform 2s ease'
            }}
            >
                {char?.description}
                {/* Arlecchino, also known by her codename "The Knave," is a playable Pyro character in Genshin Impact.
She is the Fourth of the Eleven Fatui Harbingers and the current head of the House of the Hearth. She is addressed as "Father" by members of the House, who she calls her "children." */}
                </p>
        </div>
    )
}