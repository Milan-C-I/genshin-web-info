'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Trade_Winds } from "next/font/google";
// import { Character } from "@/backend/interface";

const fontName = Trade_Winds({
    weight: '400',
    subsets: ['latin'],
})

export default function CharCard({char,btncolor}:{char?:any,btncolor?:string}) {
    const [isVisible,setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
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
            <div className="charDetails">
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
            </p>
            </div>
            <button style={{float:'right',
                backgroundColor: isHovered ? btncolor : 'black',
                transition: 'background-color 0.5s ease',
            }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            ><i className="uil uil-arrow-right"></i></button>
        </div>
    )
}