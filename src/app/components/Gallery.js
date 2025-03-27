"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dine from '@/app/asset/dine-in.jpg'
import marriage from '@/app/asset/marriage.jpg'
import pool from '@/app/asset/pool.jpg'
import resort from '@/app/asset/resort.jpg'
import Image from "next/image";
import Heading from "./Heading";

const images = [
  { id: 1, src: dine, alt: "Restaurant Interior" },
  { id: 2, src: pool, alt: "Delicious Food Platter" },
  { id: 3, src: resort, alt: "Cozy Dining Area" },
  { id: 4, src: marriage, alt: "Chef Special Dish" },
];

function Gallery() {
  return (
    <div>
       <div className="w-full max-w-5xl mx-auto" id="gallery-section">
      <Heading title='Gallery' />
        <div className="px-5 py-4 md:py-10">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: false }}
        className="rounded-lg shadow-lg gallery"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-48 rounded-lg md:h-72 lg:h-96"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
    </div>
  )
}

export default Gallery
