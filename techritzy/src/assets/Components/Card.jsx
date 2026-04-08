import React from 'react'

const Card = (props) => {
  return (
    <div className='h-130 w-90 p-3 m-8 group relative bg-cover bg-black opacity-90 text-white bg-center '
    style={{backgroundImage: `url(${props.image})`}}
    >
    <div className='absolute inset-0 bg-black opacity-0 transition-all duration-300 group-hover:opacity-90'></div>
      <div className='relative z-10 h-full flex'>
        <h4 className='text-white mt-2 text-3xl font-semibold transition-all duration-300 group-hover:opacity-100'>
        {props.heading}
      </h4>
      <div>
        <h3 className='absolute inset-0 flex items-end justify-center text-white text-2xl font-medium opacity-0 transition-all duration-300 group-hover:opacity-100'>
          {props.description}</h3>
      </div>
    </div>
    </div>
  )
}

export default Card
