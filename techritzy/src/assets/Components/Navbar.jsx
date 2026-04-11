import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Menu, X } from "lucide-react";
import logo from '/home/ishika/Desktop/practice/Front End/Techritzyyy/techritzy/src/assets/logo3.png'; // ✅ FIXED (important for deployment)

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useGSAP(() => {
    gsap.from('.names', {
      y: -100,
      opacity: 0,
      duration: 1
    })
  })

  useGSAP(() => {
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 }
      );
    }
  }, [open]);

  return (
    <div className='fixed z-50 flex lg:h-25 md:h-22 h-16 bg-black/90 backdrop-blur-md w-full justify-between items-center px-6 lg:px-14 text-white'>

      <div className="ml-2 flex lg:gap-12 gap-4 items-center">
        <img className='lg:h-25 md:h-20 h-12' src={logo} alt="" />
        <div className='font-bold text-xl md:text-2xl lg:text-4xl'>
          <Link to='/'>Techritzy</Link>
        </div>
      </div>

      <div className="hidden md:flex gap-6 lg:gap-22 items-center lg:text-2xl text-lg">
        <Link className='hover:text-gray-400 transition duration-300' to='/services'>What We Do</Link>
        <Link className='hover:text-gray-400 transition duration-300' to='/about'>About Us</Link>
        <Link className='hover:bg-sky-800 bg-blue-900 rounded-3xl px-5 py-2 transition duration-300' to='/contact'>Contact Us</Link>
      </div>

      <button 
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div 
          ref={menuRef}
          className="md:hidden absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 text-lg shadow-lg"
        >
          <Link onClick={() => setOpen(false)} className='hover:text-gray-400' to='/services'>
            What We Do
          </Link>
          <Link onClick={() => setOpen(false)} className='hover:text-gray-400' to='/about'>
            About Us
          </Link>
          <Link 
            onClick={() => setOpen(false)} 
            className='bg-blue-900 hover:bg-sky-800 rounded-3xl px-6 py-2'
            to='/contact'
          >
            Contact Us
          </Link>
        </div>
      )}

    </div>
  )
}

export default Navbar