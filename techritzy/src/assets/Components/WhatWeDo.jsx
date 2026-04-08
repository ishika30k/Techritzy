import React from 'react'
import Navbar from './Navbar'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const WhatWeDo = () => {

  useGSAP(() => {
    gsap.from('.heading', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
  })

  return (
    <div>
      <div className=' p-10 flex flex-col gap-25 text-white'>
        <h1 className='heading font-semibold text-6xl heading-font text-blue-600'>From Software Design To Research<br /> Consultancy We  Do It All.</h1>
        <div className='flex gap-10'>
          <img className='h-130 w-200' src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?semt=ais_hybrid&w=740&q=80" alt="" />  
          <div className='flex flex-col gap-10 items-center '>
            <h2 className='heading text-6xl font-semibold heading-font'>Software Design & Development</h2>
            <h3 className='text-3xl font-semibold body-font2'>Turning ideas into scalable digital products</h3>
            <p className='text-3xl font-medium body-font2'>We design and develop high-performance, user-centric software solutions tailored to your business needs. From intuitive UI/UX to robust backend systems, we ensure seamless functionality and scalability. <br />What we offer: <br />
            1.Custom Web Applications <br />
            2.Responsive UI/UX Design<br />
            3.Full-Stack Development<br />
            4.Performance Optimization</p>
          </div>
        </div>
        <div className='flex gap-10'>
          <div className='flex flex-col gap-10 items-center'>
            <h2 className='heading text-6xl font-semibold heading-font'>Research Consultancy</h2>
            <h3 className='text-3xl font-semibold body-font-2'>Data-driven insights for smarter decisions</h3>
            <p className='text-3xl font-medium body-font2'>Our research and consultancy services help businesses and individuals make informed, strategic decisions through deep analysis and expert guidance. <br />We give services like: <br />
            1.Research Implementation <br />
            2.Research Publication <br />
            3.Consultancy</p>
          </div>
          <img className='h-120 w-200' src="https://media.istockphoto.com/id/1927881398/photo/group-of-business-persons-talking-in-the-office.jpg?s=612x612&w=0&k=20&c=N0erlm9rQIa_kdBpwxSOa8E1my9bwY_oeN84wZIhais=" alt="" />
        </div>
        <div className='flex gap-10'>
          <img className='h-120 w-180' src="https://digitalpromenade.com/wp-content/uploads/2026/01/best-digital-marketing-agencies-in-mumbai.jpg" alt="" />
          <div className='flex flex-col gap-10 items-center'>
            <h2 className='heading text-6xl font-semibold heading-font'>Digital Marketing</h2>
            <h3 className='text-3xl font-semibold body-font-2'>Building your digital presence visually</h3>
            <p className='text-3xl font-medium body-font2'>We help brands grow through impactful digital marketing and high-quality video production that captures attention and drives engagement. <br />We give services like: <br />
            1.Social media marketing <br />
            2.Brand strategy <br />
            3.Editing & post-production </p>
          </div>
        </div>
        <div className='flex gap-10'>
          <div className='flex flex-col gap-10 items-center'>
            <h2 className='heading text-6xl font-semibold heading-font'>Training Institute</h2>
            <h3 className='text-3xl font-semibold body-font2'>Empowering the next generation of developers</h3>
            <p className='text-3xl font-medium body-font2'>We train aspiring developers with industry-relevant skills and provide placement assistance to help them kickstart their careers. <br />
            1.Training <br />
              -Hands-on coding programs <br />
              -Real-world project experience<br />
              -Industry-focused curriculum <br />
            2.Placement <br />
              -Career guidance <br />
              -Interview preparation <br />
              -Placement support </p>
          </div>
          <img className='h-120 w-180' src="https://media.istockphoto.com/id/1455935808/photo/technical-college-students-exchanging-ideas.jpg?s=612x612&w=0&k=20&c=dBX_083kTILhRsHblEf89cpabyz7cuXA-UYLLPyxvP0=" alt="" />
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
