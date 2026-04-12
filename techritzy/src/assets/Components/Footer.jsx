import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  useGSAP(() => {

  gsap.from(".footer-item", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".footer-container",
      start: "top 80%",
    }
  });

});

  return (
    <div className='footer-container flex flex-col md:flex-row flex-wrap lg:flex-row lg:gap-16 sm:gap-5 gap-10 text-white justify-center md:justify-between p-5 sm:p-10 lg:p-20 lg:justify-center-safe text-xl'>
      <div className='flex flex-col gap-12 items-center md:items-start text-center md:text-left'>
        <h2 className='heading-font text-blue-900 font-semibold text-5xl sm:text-4xl md:text-5xl lg:text-7xl'>
          Techritzy
        </h2>
        <p className='body-font4 text-md sm:text-xl md:text-xl lg:text-2xl max-w-xs'>
          A boutique creative <br /> studio crafting digital <br /> experiences that live at <br /> the intersection of <br /> beautiful design and <br /> precise engineering.
        </p>
        <Link to="/contact" className='body-font4 rounded-4xl text-sm sm:text-sm md:text-base bg-black border-blue-900 border-2 hover:bg-blue-950 lg:text-xl px-4 py-2'>Open for <br /> new projects</Link>
      </div>
      <div className='flex flex-col sm:gap-6 lg:gap-5 gap-6 items-center md:items-start text-center md:text-left'>
        <div className='flex lg:gap-1 mt-6 lg:mt-6 md:mt-4 items-center'>
            <div className="h-[2px] w-6 md:mt-0 sm:mt-0 lg:mt-0 bg-blue-900"></div>
            <h2 className='text-blue-900 text-xl sm:text-md md:text-xl lg:text-2xl'>NAVIGATE</h2>  
        </div>
        <Link to="/" className='body-font4 lg:text-2xl sm:text-md text-md'>Home</Link>
        <Link to="/services" className='body-font4 lg:text-2xl sm:text-md text-md'>What We Do</Link>
        <Link to="/about" className='body-font4 lg:text-2xl sm:text-md text-md'>About Us</Link>
        <Link to="/contact" className='body-font4 lg:text-2xl sm:text-md text-md'>Contact Us</Link>
      </div>
      <div className='flex flex-col sm:gap-6 lg:gap-5 gap-6 items-center md:items-start text-center md:text-left'>
        <div className='flex gap-1 lg:mt-6 md:mt-4 items-center'>
          <div className="h-[2px] w-6 lg:mt-0 md:mt-0 sm:mt-0 bg-blue-900"></div>
          <h2 className='text-blue-900 text-lg sm:text-md md:text-xl lg:text-2xl'>SERVICES</h2> 
        </div>
        <Link to="/services/0" className='body-font4 lg:text-2xl text-md sm:text-md'>Software <br /> Development</Link>
        <Link to="/services/2" className='body-font4 lg:text-2xl text-md sm:text-md'>Consultancy Services</Link>
        <Link to="/services/4" className='body-font4 lg:text-2xl text-md sm:text-md'>
          Infrastructure <br /> Management
        </Link>
        <Link to="/services/6" className='body-font4 lg:text-2xl text-md sm:text-md'>Digital Marketing</Link>
      </div>
      <div className='flex flex-col sm:gap-6 lg:gap-5 gap-6 items-center md:items-start text-center md:text-left'>
        <div className='flex gap-1 lg:mt-6 md:mt-4 items-center'>
            <div className="h-[2px] w-6 md:mt-0 sm:mt-0 lg:mt-0 bg-blue-900"></div>
            <h2 className='text-blue-900  text-sm sm:text-xl md:text-xl lg:text-2xl'>GET IN TOUCH</h2> 
        </div>
        <a href="mailto:techritzy@gmail.com" className='body-font4 lg:text-2xl sm:text-md text-md'>
          techritzy@gmail.com
        </a>
        <a href="tel:+919926490045" className='body-font4 lg:text-2xl sm:text-md text-md'>
          +91 9926490045
        </a>
        <h4 className='body-font4 lg:text-2xl sm:text-md text-md max-w-xs'>
          45 Patel Nagar, Opposite <br /> Inox Sapna Sangeeta,<br /> Near Apna Sweet,<br /> Indore (M.P)
        </h4>
      </div>

    </div>
  )
}

export default Footer