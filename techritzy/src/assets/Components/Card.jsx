import React from 'react'

const Card = (props) => {
  return (
    <div className='h-120 w-95 p-10 m-12 group relative bg-cover bg-center'
    style={{backgroundImage: `url(${props.image})`}}
    >
    <div className='absolute inset-0 bg-black opacity-0 transition-all duration-300 group-hover:opacity-90'></div>
      <div className='relative z-10 h-full flex'>
        <h4 className='text-white ml-3 text-3xl font-semibold transition-all duration-300 group-hover:opacity-0'>
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
