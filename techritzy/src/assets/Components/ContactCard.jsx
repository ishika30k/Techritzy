import React from 'react'

const ContactCard = (props) => {
  return (
    <div className='card h-70 w-80 m-5 bg-blue-950 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-3 border-white rounded-2xl'>
      <img className='h-10 rounded-4xl m-5' src={props.image} alt="" />
      <h2 className='m-6 font-semibold text-xl'>{props.type}</h2>
      <h3 className='m-6 text-xl'>{props.info}</h3>
    </div>
  )
}

export default ContactCard
