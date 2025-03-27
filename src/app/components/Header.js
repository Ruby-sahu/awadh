'use client'
import { useState,useEffect } from "react";
// import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo from '@/app/asset/awadh-logo.svg'
import Image from "next/image";
import Link from "next/link";
// import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useRef } from "react";

import { RiMenu5Fill } from "react-icons/ri";

function Header() {
  // const menuRef = useRef(null);

  // const scrollToMenu = () => {
  //   const menuSection = document.getElementById("menu-section");
  //   if (menuSection) {
  //     menuSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    const [isOpen, setIsOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
 
  return (
   
    <header>
   <div className={`fixed left-0 w-full z-20 transition-all duration-75 ${
          isScrolled ? "top-0 bg-white shadow-md" : "top-0 bg-white"
        }`} >
    <nav className="shadow-md bg-main-bg" >
      <div className="container flex items-center justify-between w-full py-1 mx-auto md:py-2">
      
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} className="w-20 md:w-32" alt="" />
        </Link>
         {/* Mobile Menu Button */}
       <button className="font-bold text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross2 size={22} className="text-secondary-bg" /> : <RiMenu5Fill size={22} className="text-secondary-bg" />}
        </button>
        {/* Desktop Menu */}
        <ul className="items-center hidden md:flex lg:space-x-11 md:space-x-7">
         <li><button  onClick={() => scrollToSection("home-section")} className="font-medium text-secondary-text hover:text-secondary-bg">Home</button></li>
         <li><button  onClick={() => scrollToSection("services-section")} className="font-medium text-secondary-text hover:text-secondary-bg">Services</button></li>
         <li><button onClick={() => scrollToSection("menu-section")} className="font-medium text-secondary-text hover:text-secondary-bg">Menu</button></li>
         <li><button onClick={() => scrollToSection("gallery-section")} className="font-medium text-secondary-text hover:text-secondary-bg">Gallery</button></li>
            {/* Quote Button */}
        <li><button onClick={() => scrollToSection("contact-section")} className="hidden px-5 py-2 text-sm font-bold text-white transition-all delay-200 border-2 rounded-sm shadow-lg rounded-tl-2xl rounded-br-2xl md:block bg-secondary-bg border-secondary-bg hover:bg-transparent hover:text-secondary-bg shadow-gray-400/50">Contact Us</button></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="p-4 pb-5 bg-white border-t border-gray-200 md:hidden">
          <button onClick={() => scrollToSection("home-section")} className="block w-full px-5 py-2 text-sm text-center hover:bg-gray-100">Home</button>
          <button onClick={() => scrollToSection("services-section")} className="block w-full px-4 py-2 text-sm text-center hover:bg-gray-100">Services</button>
          <button onClick={() => scrollToSection("menu-section")} className="block w-full px-4 py-2 text-sm text-center hover:bg-gray-100">Menu</button>
          <button onClick={() => scrollToSection("gallery-section")} className="block w-full px-4 py-2 text-sm text-center hover:bg-gray-100">Gallery</button>
          <button onClick={() => scrollToSection("contact-section")} className="block w-full px-4 py-2 mt-2 mb-2 text-sm text-center transition-all delay-300 border-2 rounded-full shadow-lg text-main-bg bg-secondary-bg border-secondary-bg hover:bg-transparent hover:text-secondary-bg shadow-gray-400/50">
            Contact Us
          </button>
        </div>
      )}
    </nav>
    </div>
    </header>
  )
}

export default Header
