import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex h-24 w-full bg-black justify-between items-center p-10 text-white'>
      <div className="ml-10 flex gap-12 ">
        <img className='h-24' src="./src/assets/logo2.png" alt="" />
        <div className='font-bold text-4xl mt-6'>
          <Link to='/'>Techritzy</Link>
        </div>
        
      </div>
      <div className="flex gap-22 items-center text-2xl ">
        <Link className='hover:text-gray-400' to='/services'>What We Do</Link>
        <Link className='hover:text-gray-400' to='/services'>What We Think</Link>
        <Link className='hover:text-gray-400' to='/services'>About Us</Link>
        <Link className='hover:text-gray-400' to='/services'>Contact Us</Link>
        {/* <button className='text-2xl bg-purple-700 p-3 hover:bg-purple-600'>Contact</button> */}
      </div>
    </div>
  )
}

export default Navbar
