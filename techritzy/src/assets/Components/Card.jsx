import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {

  const navigate = useNavigate()

  return (
    <div 
    onClick={() => navigate(`/services/${props.id}`)}
    className='lg:h-115 lg:w-85 lg:p-3 lg:m-6 sm:h-80 sm:w-60 sm:p-2 sm:m-4 h-30 w-35 p-3 m-1 group rounded-xl relative bg-cover bg-black opacity-90 text-white bg-center '
    style={{backgroundImage: `url(${props.image})`}}
    >
    <div className='absolute inset-0 bg-black opacity-0 transition-all duration-300 group-hover:opacity-90'></div>
      <div className='relative z-10 h-full flex'>
        <h4 className='text-white mt-2 sm:text-2xl lg:text-3xl text-sm font-semibold transition-all duration-300 group-hover:opacity-100'>
        {props.heading}
      </h4>
      <div>
        <h3 className='absolute inset-0 flex items-end justify-center text-white sm:text-lg lg:text-2xl font-medium opacity-0 transition-all duration-300 group-hover:opacity-100'>
          {props.description}</h3>
      </div>
    </div>
    </div>
  )
}

export default Card
