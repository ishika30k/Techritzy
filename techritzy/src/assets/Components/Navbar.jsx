import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex h-20 w-full bg-black justify-between items-center p-14 text-white'>
      <div className="ml-10 flex gap-12">
        <img className='h-28 ' src="./src/assets/logo3.png" alt="" />
        <div className='font-bold text-4xl mt-8'>
          <Link to='/'>Techritzy</Link>
        </div>
      </div>
      <div className="flex gap-22 items-center text-2xl ">
        <Link className='hover:text-gray-400 transition duration-300' to='/services'>What We Do</Link>
        <Link className='hover:text-gray-400 transition duration-300' to='/services'>About Us</Link>
        <Link className='hover:bg-sky-800 bg-blue-900 rounded-md p-4 transition duration-300' to='/contact'>Contact Us</Link>
        {/* <button className='text-2xl bg-purple-700 p-3 hover:bg-purple-600'>Contact</button> */}
      </div>
    </div>
  )
}

export default Navbar
