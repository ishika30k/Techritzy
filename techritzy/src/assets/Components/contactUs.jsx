import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { contact } from './constants'
import ContactCard from './ContactCard'

const ContactUs = () => {

  useGSAP(() => {
    gsap.from('.heading', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

    gsap.from('.card', {
      y: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 1,
      ease: "power3.out"
    })
  })


  return (
    <div className='bg-black text-white min-h-screen '>
      <div className='p-10 flex flex-col gap-10 items-center'>
        <h1 className='heading text-9xl font-bold bg-linear-to-t from-blue-900 via-blue-400 to-white bg-clip-text'>LET'S TALK</h1>
        <h2 className='text-3xl'>Whether you need a website, app, branding, or digital <br /> solution we’re here to help bring your vision to life.</h2>
        <p className='text-3xl p-5'>Reach out any way you like.</p>
      </div>
      <div className='flex gap-20 p-5 items-center justify-center'>
        {contact.map(function(elem,idx){
          return(
          <ContactCard key={idx} image={elem.image} type={elem.type} info={elem.info}/>
          )
        })}
      </div>
    </div>
  )
}

export default ContactUs
