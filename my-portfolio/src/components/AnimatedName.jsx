"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const AnimatedName = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Fade in animation on page load
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  // Define different shades of purple for each part of the name
  const firstNameShades = [
    "text-[#9333EA]",     // L - lighter purple
    "text-[#8B5CF6]",     // u - main purple
    "text-[#7C3AED]",     // k - vivid purple
    "text-[#6D28D9]",     // e - deeper purple
  ];
  
  const lastNameShades = [
    "text-[#8B5CF6]",     // C - main purple
    "text-[#9333EA]",     // h - lighter purple
    "text-[#7C3AED]",     // a - vivid purple
    "text-[#6D28D9]",     // r - deeper purple
    "text-[#8B5CF6]",     // l - main purple
    "text-[#9333EA]",     // e - lighter purple
    "text-[#7C3AED]",     // s - vivid purple
    "text-[#6D28D9]",     // w - deeper purple
    "text-[#8B5CF6]",     // o - main purple
    "text-[#9333EA]",     // r - lighter purple
    "text-[#7C3AED]",     // t - vivid purple
    "text-[#6D28D9]",     // h - deeper purple
  ];

  const firstName = "Luke".split("");
  const lastName = "Charlesworth".split("");

  return (
    <Link href="/about">
      <h1
        className={`text-xl md:text-2xl font-bold transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} tracking-wider font-audiowide`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center">
          <div className="flex">
            {firstName.map((letter, index) => (
              <span 
                key={`first-${index}`}
                className={`transition-all duration-500 ${isHovered ? firstNameShades[index] : 'text-gray-800'}`}
                style={{
                  transitionDelay: isHovered ? `${index * 25}ms` : '0ms',
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                }}
              >
                {letter}
              </span>
            ))}
          </div>
          
          {/* Adding explicit space between first and last name */}
          <div className="w-4"></div>
          
          <div className="flex">
            {lastName.map((letter, index) => (
              <span 
                key={`last-${index}`}
                className={`transition-all duration-500 ${isHovered ? lastNameShades[index] : 'text-gray-800'}`}
                style={{
                  transitionDelay: isHovered ? `${(index + firstName.length + 1) * 25}ms` : '0ms',
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </h1>
    </Link>
  );
};

export default AnimatedName;
