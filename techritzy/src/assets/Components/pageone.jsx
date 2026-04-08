import React from 'react'
import vid6 from '../vid6.mp4';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const PageOne = () => {
  
  useGSAP(() => {
    gsap.from('.heading', {
      x: -150,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

    gsap.from('.heading2', {
      x: 150,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
  })

  return (
    <div className="min-h-150 w-full overflow-hidden relative">
      <video
      className='object-cover h-full w-full absolute z-0 bg-black opacity-50'
      src={vid6}
      autoPlay
      loop
      muted/>
      <div className=' items-center absolute z-10 pt-30 text-white'>
        <h1 className='font-extrabold text-7xl pl-30 heading'>SCALABLE IT SOLUTIONS <br/>THAT POWER <br/>YOUR BUSINESS GROWTH</h1>
        <div className='lg:mt-20 lg:ml-200 md:ml-50 sm:mt-8 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl leading-relaxed'>
          <h2 className='lg:ml-4 md:ml-4 heading2' >"From software development to compliance and  digital transformation,</h2>
          <h2 className='heading2'> we help businesses streamline operations, reduce risk, and scale confidently"</h2>
        </div>
      </div>
      
    </div>
  )
}

export default PageOne

