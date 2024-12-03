'use client'
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

const montserrat_font = Montserrat({
    weight: "400",
    subsets: ["latin"],
});

export default function FullCharInfo({ char }: { char?: any }) {

    const [currentChar, setCurrentChar] = useState(char);
    const [isSliding, setIsSliding] = useState(false);
    
    useEffect(() => {
        if (char?.name !== currentChar?.name) {
            setIsSliding(true);
            setTimeout(() => {
                setCurrentChar(char);
                setIsSliding(false);
            }, 300);
        }
    }, [char]);

    return (
        <div className="characterDetailsContainer">
            <div className={`${montserrat_font.className} characterDetailsContent`}>
                <h1 className={`characterTitle ${isSliding ? "sliding-out-Text" : "sliding-in-Text"}`}
                style={{
                    transform : isSliding ? "translateX(-100px)" : "translateX(0)",
                }}>
                    {currentChar?.name.split(" ").map((word:any,index:number) => <span key={index}>{word}<br/></span>)}
                </h1>
                <p className={`characterDescription ${isSliding ? "sliding-out-Text" : "sliding-in-Text"}`}
                style={{
                    transition:isSliding ? "transform 0.5s ease, opacity 0s ease" : "transform 0.5s 0.2s ease, opacity 0.5s 0.2s ease",
                }}
                >{currentChar?.description}</p>
                <p className={`characterLabel ${isSliding ? "sliding-out-Text" : "sliding-in-Text"}`}
                style={{
                    transition:isSliding ? "transform 0.5s ease, opacity 0s ease" : "transform 0.5s 0.3s ease, opacity 0.5s 0.3s ease",
                }}
                >Title</p>
                <br/>
                <div className={`characterAttributes ${isSliding ? "sliding-out-Text" : "sliding-in-Text"}`}
                style={{
                    transition:isSliding ? "transform 0.5s ease, opacity 0s ease" : "transform 0.5s 0.4s ease, opacity 0.5s 0.4s ease",
                }}
                >
                    <span className="characterLabel">Affiliation</span>
                    <span className="characterLabel">Element</span>
                    <span className="characterLabel">POLEARM</span>
                    <span className="characterLabel">Birthday</span>
                    <span className="characterLabel">Domain</span>
                    <span className="characterLabel">Gender</span>
                </div>
                <div className={`characterLanguages ${isSliding ? "sliding-out-Text" : "sliding-in-Text"}`}
                style={{
                    transition:isSliding ? "transform 0.5s ease, opacity 0s ease" : "transform 0.5s 0.5s ease, opacity 0.5s 0.5s ease",
                }}
                >
                    <span className="characterLabel">English</span>
                    <span className="characterLabel">Chinese</span>
                    <span className="characterLabel">Japanese</span>
                    <span className="characterLabel">Korean</span>
                </div>
            </div>
            <div
                className={`characterImage ${isSliding ? "sliding-out" : "sliding-in"}`}
                style={{
                    backgroundImage: `url('/${currentChar?.region}/Character_${currentChar?.name
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
