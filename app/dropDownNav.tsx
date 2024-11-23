'use client'
import React, { useState } from "react";
import "@/styles/style.css";
const DropdownNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropDownNav" style={{ position: "relative"}}>
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
          <li>Mondstadt</li>
          <li>Liyue</li>
          <li>Inazuma</li>
          <li>Sumeru</li>
          <li>Fontaine</li>
          <li>Natlan</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownNav;
