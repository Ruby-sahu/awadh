import Image from 'next/image'
import React from 'react'
import Button from '../button/Button'

function ServiceCard(props) {
 
  return (
    <>
    <div className='mt-2 transition-all ease-in-out border md:mt-8 rounded-xl border-secondary-bg hover:shadow-2xl'>
    <Image src={props.image}  className="object-cover w-full h-52 rounded-t-xl" alt="card_image" />
    <div className='p-4'>
    <h4 className='text-xl font-bold md:text-2xl'>{props.title}</h4>
    <h6 className='mt-1 text-sm font-semibold md:font-medium md:text-base'>{props.subhead}</h6>
    <p className='mt-2 text-sm md:mt-3'>{props.content}</p>
    <div className='mt-3 md:mt-5'>
    <Button title='Contact Us'  />
    </div>
    </div>
    </div>
    </>
  )
}

export default ServiceCard
