import React from 'react'
import Heading from './Heading'
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { SiSwiggy } from "react-icons/si";
import { TbClock12 } from "react-icons/tb";
import Link from 'next/link';

function ContactUs() {
  return (
    <div className='container pb-4 md:pb-8' id='contact-section'>
    <Heading title='Contact Us' />
    <div className='grid items-center grid-cols-1 gap-5 md:gap-10'>
    <div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235720.92735065796!2d75.59104409286287!3d22.61126570000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f92875e60949%3A0xa0cebe0f9587dfdf!2sAWADH%20RESTAURANT!5e0!3m2!1sen!2sin!4v1742411212713!5m2!1sen!2sin"
        className='w-full rounded-lg md:h-96 h-60'
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div>
        <div className='flex items-start gap-3 '><FaLocationDot size={20} className='mt-1.5 text-secondary-bg' />  <p className='text-sm capitalize md:text-base'> NH3, Mumbai - Agra Rd, Near The Mapple Wood, Pigdamber, Rau, Madhya Pradesh 453331 </p></div>
        <div className='flex items-start gap-3 mt-2 md:mt-4'><FiPhoneCall size={16} className='mt-1  text-secondary-bg' /><Link href='tel:1234567891' className='text-sm md:text-base'>1234567891</Link></div>
        <div className='flex items-start gap-3 mt-2 md:mt-4'><SiSwiggy size={20} className=' text-secondary-bg' /> <Link className='text-sm md:text-base' href='https://www.swiggy.com/city/indore/avadh-restaurant-rau-&-rajendra-nagar-rau-rest1050726?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder'> Place an order on swiggy</Link></div>
        <div className='flex items-start gap-3 mt-2 md:mt-4'><TbClock12 size={20} className=' text-secondary-bg' />  <Link href='#' className='text-sm md:text-base'> Timing: Monday - saturday (12 pm - 2 am)</Link></div>
    </div>
      
    </div>
    </div>
  )
}

export default ContactUs
