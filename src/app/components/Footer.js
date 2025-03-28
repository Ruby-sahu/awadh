'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import logo from '@/app/asset/awadh-logo.svg'
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    <div className='mt-4 md:mt-8'>
    <div className='container mt-4 md:mt-8'>
    <div className='grid grid-cols-1 gap-4 py-3 border border-t border-b border-l-0 border-r-0 md:py-6 lg:grid-cols-4 md:gap-9 md:grid-cols-2'>
    <div >
        <Image src={logo} className="w-20 md:w-32" alt='logo' />
        <h4 className='mt-4 text-xl font-bold md:text-2xl md:mt-8'>About Us</h4>
        <p className='mt-2 text-sm md:mt-4'>
        Nestled amidst nature, Avadh is a haven of peace that blends luxury and comfort. Whether you are looking for a relaxing holiday, an adventurous vacation or a great dining experience, we offer you an unforgettable vacation.
        </p>
    </div>
    <div className='pl-0 md:pl-8'>
    <h4 className='font-semibold'>Quick Links</h4>
    <ul className='flex flex-col gap-2 mt-3 md:gap-4 md:mt-8'>
    <li><button  onClick={() => scrollToSection("home-section")} className="text-sm font-medium transition-all ease-in-out delay-200 hover:text-secondary-bg">Home</button></li>
         <li><button  onClick={() => scrollToSection("services-section")} className="text-sm font-medium transition-all ease-in-out delay-200 hover:text-secondary-bg">Services</button></li>
         <li><button onClick={() => scrollToSection("menu-section")} className="text-sm font-medium transition-all ease-in-out delay-200 hover:text-secondary-bg">Menu</button></li>
         <li><button onClick={() => scrollToSection("gallery-section")} className="text-sm font-medium transition-all ease-in-out delay-200 hover:text-secondary-bg">Gallery</button></li>
    </ul>
    </div>
    <div className=''>
    <h4 className='font-semibold'>Contact Us</h4>
    <ul className='flex flex-col gap-2 mt-3 md:gap-4 md:mt-8'>
         <li><div className='flex items-center gap-2 text-sm font-medium'><FiPhoneCall size={14} className='mt-1.5 text-secondary-bg w-4' /><Link href='tel:1234567891' className='mt-1 transition-all ease-in-out delay-200 hover:text-secondary-bg'>1234567891</Link></div></li>
         <li><div className='flex items-center gap-2 text-sm font-medium'><IoMdMailOpen size={16} className='mt-1.5 text-secondary-bg w-4' /><Link href='mailto:abc@gmail.com' className='mt-2 transition-all ease-in-out delay-200 hover:text-secondary-bg'>abc@gmail.com</Link></div></li>
         <li><div className='flex items-start gap-2 text-sm font-medium'><FaLocationDot size={16} className='mt-1.5 text-secondary-bg md:w-[33px] w-[29px]' /><p className='mt-1 capitalize transition-all ease-in-out delay-200 hover:text-secondary-bg'> NH3, Mumbai - Agra Rd, Near The Mapple Wood, Pigdamber, Rau, Madhya Pradesh 453331 </p></div></li>
    </ul>
    </div>
    <div className=''>
    <h4 className='font-semibold'>Social Media</h4>
    <ul className='flex gap-4 mt-3 md:mt-8'>
      <li><Link href='https://www.instagram.com/yourprofile' className='block p-2 text-white ease-in-out delay-200 rounded-full bg-secondary-bg transition-transform [transform:rotateY(360deg)_scale(1.1)] duration-500 hover:[transform:rotateY(0deg)_scale(1)]'><FaInstagram size={16} className='text-white' /></Link></li>
      <li><Link href='https://www.facebook.com/yourpage' className='block p-2 text-white ease-in-out delay-200 rounded-full bg-secondary-bg transition-transform [transform:rotateY(360deg)_scale(1.1)] duration-500 hover:[transform:rotateY(0deg)_scale(1)]'><FaFacebook size={16} className='transition-all ease-in-out delay-200' /></Link></li>
      <li><Link href='https://www.youtube.com/in/yourprofile' className='block p-2 text-white ease-in-out delay-200 rounded-full bg-secondary-bg transition-transform [transform:rotateY(360deg)_scale(1.1)] duration-500 hover:[transform:rotateY(0deg)_scale(1)]'><FaYoutube size={16} className='transition-all ease-in-out delay-200' /></Link></li>
    </ul> 
    </div>
    </div>
    <div>
      <p className='mt-3 text-xs text-center text-secondary-bg'>Copyright 2025 | All rights reserved</p>
    </div>
    </div>
    </div> 
    </>
  )
}

export default Footer
