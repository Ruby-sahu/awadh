'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from 'next/image';
import banner from '@/app/asset/banner-img.svg'
import Button from './button/Button';
import ButtonBlack from './button/ButtonBlack';


function Banner() {

  return (
    <>
    <div className='container pt-16 pb-4 md:pb-8 md:pt-32' id="home-section">
    <div className='grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-2'>
    <div className='flex flex-col justify-center'>
    <h1 className="md:text-xl text-lg font-bold uppercase tracking-[.3em] text-secondary-bg ">
    Delicious food
  </h1>
    <h1 className='mt-1 text-3xl font-bold md:text-5xl'>Welcome to Awadh</h1>
    <h4 className='mt-2 text-base font-semibold md:mt-5 md:text-xl'> <span> 🌿 </span> A Luxurious Escape for Food, Relaxation, and Celebrations <span> 🌿 </span></h4>
    <p className='mt-2 text-sm md:mt-5 md:text-base'>Discover an exquisite dining experience, a serene resort stay, and the perfect venue for weddings and events</p>
    <div className='flex gap-3 mt-4 md:gap-6 md:mt-8'>
      <ButtonBlack title='Menu' />
      <Button title='Contact Us' />
    </div>
    </div>
    <div className=''>
    <Image src={banner} alt='banner_img' />
    </div>
    </div>
      </div>
    </>
  )
}

export default Banner
