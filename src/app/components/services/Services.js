import React from 'react'
import Heading from '../Heading'
import ServiceCard from './ServiceCard'
import dine from '@/app/asset/dine-in.jpg'
import pool from '@/app/asset/pool.jpg'
import resort from '@/app/asset/resort.jpg'
import marriage from '@/app/asset/marriage.jpg'

function Services() {
  return (
    <>
    <div className='container pb-4 md:pb-10' id="services-section">
    <Heading title='Services' />
    <div className='grid grid-cols-1 gap-3 md:gap-8 lg:grid-cols-4 md:grid-cols-2'>
    <ServiceCard image={dine} title='Dine In' subhead='A Culinary Delight for Every Occasion' content='Enjoy a diverse menu crafted by top chefs, featuring authentic flavors, fresh ingredients, and a warm ambiance.' />
    <ServiceCard image={pool} title='Swimming Pool' subhead='Dive into Relaxation' content='Cool off and unwind in our crystal-clear swimming pool with temperature-controlled water, surrounded by lush greenery and a serene environment.'  />
    <ServiceCard image={resort} title='Luxurious Resort Stay' subhead=' Your Perfect Getaway' content='Escape to luxury with our spacious rooms, scenic views, and premium amenities. Whether you’re here for a weekend retreat or a long vacation, we promise you an unforgettable stay.'  />
    <ServiceCard image={marriage} title='Marriage Garden & Events' subhead='Where Dreams Come True' content='Host your perfect wedding, engagement, or grand celebration in our picturesque garden venue.'  />
    </div>
    </div>  
    </>
  )
}

export default Services
