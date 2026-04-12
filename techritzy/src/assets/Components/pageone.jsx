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
    <div className="xl:h-180 lg:min-h-165 sm:min-h-100 md:h-150 h-100 w-full overflow-hidden relative">
      <video
      className='object-cover h-full w-full absolute z-0 bg-black opacity-50'
      src={vid6}
      autoPlay
      loop
      muted/>
      <div className=' items-center absolute z-10 pt-30 text-white'>
        <h1 className='font-extrabold text-xl mt-0 lg:mt-16 lg:text-7xl md:text-6xl sm:text-5xl pl-24 heading heading-font'>SCALABLE IT SOLUTIONS <br/>THAT POWER <br/>YOUR BUSINESS GROWTH</h1>
        <div className='lg:mt-32 lg:ml-200 text-center md:ml-30 ml-8 sm:justify-center-safe mt-12 p-0 md:mt-6 text-sm sm:text-xl md:text-xl lg:text-2xl text-gray-200 max-w-4xl heading-font'>
          <p className='lg:ml-4 md:ml-4 heading2' >"From software development to compliance and  digital transformation,we help businesses streamline operations, reduce risk, and scale confidently"</p>
          {/* <h2 className='heading2'> we help businesses streamline operations, reduce risk, and scale confidently"</h2> */}
        </div>
      </div>
      
    </div>
  )
}

export default PageOne

