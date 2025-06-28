"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AnimatedName from "./AnimatedName";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="py-4 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="z-10">
          <AnimatedName />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/about" label="About" isActive={pathname === "/about"} />
          <NavLink href="/projects" label="Projects" isActive={pathname === "/projects"} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-50 shadow-lg z-20 py-4 px-4 flex flex-col items-center space-y-4">
          <NavLink 
            href="/about" 
            label="About" 
            isActive={pathname === "/about"}
            mobile 
            onClick={() => setIsMenuOpen(false)} 
          />
          <NavLink 
            href="/projects" 
            label="Projects" 
            isActive={pathname === "/projects"}
            mobile 
            onClick={() => setIsMenuOpen(false)} 
          />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, label, isActive, mobile, onClick }) => {
  return (
    <Link
      href={href}
      className={`relative font-medium transition-colors ${mobile ? "w-full text-center py-2" : ""} 
        ${isActive 
          ? "text-[#8B5CF6]" 
          : "text-gray-700 hover:text-[#8B5CF6]/70"}
      `}
      onClick={onClick}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8B5CF6] rounded-full" />
      )}
    </Link>
  );
};

export default Navbar;
