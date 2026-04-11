import React from 'react'
import PageTwo from './assets/Components/pagetwo'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const AboutUs = () => {

  useGSAP(() => {
    gsap.from('.heading', {
      y: 150,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
  })

  return (
    <div className='text-white p-20'>
      <h1 className='heading text-5xl font-semibold justify-self-center p-10 text-blue-900'>
        We Craft <br />Digital <br />Experiences
      </h1>
      <p className='text-3xl justify-self-center body-font2'>A boutique creative studio built on the belief that the best  digital<br /> products live at the intersection of beautiful design  and precise<br /> engineering.</p>
      <PageTwo/>
    </div>
  )
}

export default AboutUs
