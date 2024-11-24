'use client'
import React, { useEffect, useState } from "react";
import "@/styles/style.css";
const DropdownNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowMenuButton(true);
      } else {
        setShowMenuButton(false);
      }
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="dropDownNav" style={{display: showMenuButton || (windowWidth! <= 630) ? "inline-block" : "none",
      position: showMenuButton ? "fixed" : "relative",
      top: showMenuButton ? "5px" : "auto",
      right: showMenuButton ? "5px" : "auto",
      zIndex: "1000",
      padding: showMenuButton ? "10px" : (windowWidth! <= 630) ? "5px" : "0",
      backgroundColor: showMenuButton ? "#ffffff" : "transparent",
      borderRadius: showMenuButton ? "10px" : "0",
      scale: showMenuButton && (windowWidth! <= 630) ? "0.75" : "1",
      }}>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
      >
        <div style={{
            transform:isOpen ? "translateY(2px) translateX(1px)" : "translateY(0)"
        }}>
        <hr
            style={{
                transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
            }}
        /><hr
            style={{
                transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
            }}
        /><hr
            style={{
                opacity: isOpen ? 0 : 1,
                transition: "opacity 0.3s ease-in-out",
            }}
        />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul>
          <a onClick={toggleMenu} href="#Home"><li style={{fontSize: showMenuButton ? "15px" : "10px",paddingInline: showMenuButton && (windowWidth! >= 630) ? "50px" : "15px"}}>Home <span style={{fontSize:"10px",fontWeight:"bold"}}>❯</span></li></a>
          <a href="#region-1"><li style={{fontSize: showMenuButton ? "15px" : "10px",paddingInline: showMenuButton && (windowWidth! >= 630) ? "50px" : "15px"}}>Mondstadt</li></a>
          <a href="#region-2"><li style={{fontSize: showMenuButton ? "15px" : "10px",paddingInline: showMenuButton && (windowWidth! >= 630) ? "50px" : "15px"}}>Liyue </li></a>
          <a href="#region-3"><li style={{fontSize: showMenuButton ? "15px" : "10px",paddingInline: showMenuButton && (windowWidth! >= 630) ? "50px" : "15px"}}>Inazuma </li></a>
          <a href="#region-4"><li style={{fontSize: showMenuButton ? "15px" : "10px",paddingInline: showMenuButton && (windowWidth! >= 630) ? "50px" : "15px"}}>Sumeru </li></a>
          <a href="#region-5"><li style={{fontSize: showMenuButton ? "15px" : "10px",paddingInline: showMenuButton && (windowWidth! >= 630) ? "50px" : "15px"}}>Fontaine </li></a>
          <a href="#region-6"><li style={{fontSize: showMenuButton ? "15px" : "10px",paddingInline: showMenuButton && (windowWidth! >= 630) ? "50px" : "15px"}}>Natlan </li></a>
          <a href="#region-7"><li style={{fontSize: showMenuButton ? "15px" : "10px",paddingInline: showMenuButton && (windowWidth! >= 630) ? "50px" : "15px"}}>Snezhnaya</li></a>
        </ul>
      )}
    </div>
  );
};

export default DropdownNav;
