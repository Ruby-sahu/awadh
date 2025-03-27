'use client'
import React from 'react'
import Link from 'next/link'

function Button(props) {
   const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <div>
      <button  onClick={() => scrollToSection("contact-section")} className="bg-secondary-bg border-2 border-secondary-bg rounded-br-2xl rounded-sm rounded-tl-2xl shadow-gray-400/50 shadow-lg text-white text-xs delay-200 font-bold hover:bg-transparent hover:text-secondary-bg inline-flex md:px-5 md:py-2 md:text-sm px-3 py-1.5 transition-all">{props.title}</button>
    </div>
  )
}

export default Button
