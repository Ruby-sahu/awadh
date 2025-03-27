import React from 'react'

function Heading(props) {
  return (
    <>
    <h1 className='py-4 m-auto text-2xl font-bold text-center md:py-8 md:text-5xl text-secondary-bg'>{props.title}</h1>
    </>
  )
}

export default Heading
