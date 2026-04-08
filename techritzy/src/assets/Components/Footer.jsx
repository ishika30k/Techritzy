import React from 'react'

const Footer = () => {
  return (
    <div className='flex gap-18 text-white justify-self-center p-20 text-xl'>
      <div className='flex flex-col gap-12'>
        <h2 className='text-blue-900 font-semibold text-6xl'>Techritzy</h2>
        <p>A boutique creative <br /> studio crafting digital <br /> experiences that live at <br /> the intersection of <br /> beautiful design and <br /> precise engineering.</p>
        <button className='rounded-4xl bg-black border-blue-900 border-2 hover:bg-blue-950'>Open for <br /> new projects</button>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-1'>
            <div className="h-[2px] w-6 mt-3 bg-blue-900"></div>
            <h2 className='text-blue-900 text-2xl'>NAVIGATE</h2>  
        </div>
        <h4>Home</h4>
        <h4>What We Do</h4>
        <h4>About Us</h4>
        <h4>Contact Us</h4>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-1'>
            <div className="h-[2px] w-6 mt-3 bg-blue-900"></div>
            <h2 className='text-blue-900 text-2xl'>SERVICES</h2> 
        </div>
        <h4>Web Development</h4>
        <h4>Consultancy Services</h4>
        <h4>Infrasturcture <br /> Management</h4>
        <h4>Digital Marketing</h4>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-1'>
            <div className="h-[2px] w-6 mt-3 bg-blue-900"></div>
            <h2 className='text-blue-900 text-2xl'>GET IN TOUCH</h2> 
        </div>
        <h4>techritzy@gmail.com</h4>
        <h4>+91 9926490045</h4>
        <h4>45 Patel Nagar, Opposite <br /> Inox Sapna Sangeeta,<br /> Near Apna Sweet,<br /> Indore (M.P)</h4>
      </div>
    </div>
  )
}

export default Footer
