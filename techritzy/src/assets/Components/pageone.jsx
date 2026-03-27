import React from 'react'
import vid6 from '../vid6.mp4';

const PageOne = () => {
  
  return (
    <div className="h-150 relative">
      <video
      className='object-cover h-full w-full absolute z-0'
      src={vid6}
      autoPlay
      loop
      muted/>
      <div className=' items-center absolute z-10 pt-30  text-white'>
        <h1 className='font-extrabold text-7xl pl-30 '>SCALABLE IT SOLUTIONS <br/>THAT POWER <br/>YOUR BUSINESS GROWTH</h1>
        <div className='text-3xl pt-30 pl-40'>
          <h2 className='ml-100' >"From software development to compliance and  digital transformation,</h2>
          <h2 className='ml-92 '> we help businesses streamline operations, reduce risk, and scale confidently"</h2>
        </div>
      </div>
      
    </div>
  )
}

export default PageOne

