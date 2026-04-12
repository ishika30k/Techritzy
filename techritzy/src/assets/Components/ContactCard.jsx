import React from 'react'

const ContactCard = (props) => {
  return (
    <a 
      href={props.link}
      className='card 
      h-auto lg:h-80 md:h-70
      w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 
      m-3 sm:m-5 
      bg-blue-950 
      hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-3 
      border-white rounded-2xl 
      flex flex-col items-start'
    >

      <img 
        className='h-8 sm:h-10 rounded-4xl m-4 sm:m-5' 
        src={props.image} 
        alt="" 
      />

      <h2 className='m-4 sm:m-6 font-semibold text-lg md:text-md sm:text-xl'>
        {props.type}
      </h2>

      <h3 className='m-4 sm:m-6 text-sm sm:text-lg md:text-md lg:text-xl break-words'>
        {props.info}
      </h3>

    </a>
  )
}

export default ContactCard