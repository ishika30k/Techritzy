import React from 'react'
import vid1 from '../vid1.mp4';

const PageOne = () => {
  
  return (
    <div className="h-130 relative">
      <video
      className='object-cover h-full w-full absolute z-0'
      src={vid1}
      autoPlay
      loop
      muted/>
      <div className='text-white items-center absolute z-10 p-35'>
        <h1 className='font-extrabold text-6xl '>SCALABLE IT SOLUTIONS <br/>THAT POWER <br/>YOUR BUSINESS GROWTH</h1>
        <div>
          <h2 className='text-3xl p-20 ml-100'>"From software development to compliance and <br /> digital transformation, we help businesses <br /> streamline operations, reduce risk, and scale confidently"</h2>
        </div>
      </div>
      
    </div>
  )
}

export default PageOne

