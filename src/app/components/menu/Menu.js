'use client'
import React from "react";
import Heading from '../Heading'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import burger from '@/app/asset/burger.jpg'
import kabab from '@/app/asset/kabab.jpg'
import Image from "next/image";
import { useRef } from "react";


const foodItems = [
  { id: 1, name: "Hara Bhara Kabab", image: kabab },
  { id: 2, name: "Pizza", image: burger },
  { id: 3, name: "Pasta", image: burger },
  { id: 4, name: "Dessert", image: burger },
  { id: 5, name: "Dessert", image: burger },
  { id: 6, name: "Dessert", image: burger },
  { id: 7, name: "Dessert", image: burger },
];

function Menu() {
  const menuRef = useRef(null);
  return (
    <>
    <div className='pb-4 md:pb-8' id="menu-section">
      <Heading title='Menu' />
      <div className="w-full max-w-6xl px-5 pt-4 mx-auto md:pt-10">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        breakpoints={{
          420: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="rounded-lg menu"
      >
        {foodItems.map((food) => (
          <SwiperSlide key={food.id} className="flex justify-center">
            <div className="overflow-hidden bg-white rounded-lg shadow-lg">
              <Image src={food.image} alt={food.name} className="w-full h-24 md:h-40" />
              <div className="py-2 text-center bg-secondary-bg ">
                <h2 className="text-sm font-semibold text-white">{food.name}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      </div>
    </>
  )
}

export default Menu
