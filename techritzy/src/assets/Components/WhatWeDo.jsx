import React from 'react'
import Navbar from './Navbar'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from './constants'
import { useParams } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const WhatWeDo = () => {

  const { id } = useParams()

  let selectedServices = []

  if (id !== undefined && services[Number(id)]) {
    // ✅ Single service
    selectedServices = [services[Number(id)]]
  } else {
    // ✅ All services (original page behavior)
    selectedServices = services
  }

  useGSAP(() => {
    gsap.from('.hero-heading', {
      y: 80,
      opacity: 0,
      duration: 1.1,
      ease: 'power3.out',
    })

    gsap.utils.toArray('.service-card').forEach((card) => {
      const img = card.querySelector('.service-img')
      const content = card.querySelector('.service-content')

      if (img) {
        gsap.from(img, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 80%' },
        })
      }

      if (content) {
        gsap.from(content, {
          x: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.15,
          scrollTrigger: { trigger: card, start: 'top 80%' },
        })
      }

      gsap.from(card.querySelectorAll('.point'), {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.35,
        scrollTrigger: { trigger: card, start: 'top 75%' },
      })
    })
  })

  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

      {/* HERO */}
      <div className="px-6 md:px-12 lg:px-20 pt-28 lg:pt-36 pb-10">
        <h1 className="hero-heading heading-font font-bold text-3xl sm:text-5xl lg:text-7xl leading-tight max-w-4xl">
          From Software Design<br />
          to Research Consultancy —{' '}
          <span className="text-blue-900" style={{ WebkitTextStroke: '1px rgba(14,116,144,0.5)' }}>
            We Do It All.
          </span>
        </h1>
      </div>

      <div className="mx-6 md:mx-12 lg:mx-20 h-px bg-gradient-to-r from-transparent via-sky-900 to-transparent mb-20" />

      {/* SERVICES */}
      <div className="px-6 md:px-12 lg:px-20 flex flex-col gap-32 pb-32">

        {selectedServices.map((service, index) => {

          const actualIndex = id !== undefined ? Number(id) : index

          return (
            <div key={index} className="service-card flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

              {/* IMAGE */}
              <div className="service-img relative flex-shrink-0 w-full max-w-sm md:max-w-md lg:w-[480px]">
                
                <span className="absolute -top-4 -left-4 z-10 w-10 h-10 rounded-full bg-sky-900 border border-sky-700 flex items-center justify-center text-sky-300 text-sm font-bold font-mono">
                  {String(actualIndex + 1).padStart(2, '0')}
                </span>

                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-72 lg:h-[420px] object-cover rounded-2xl"
                />

              </div>

              {/* CONTENT */}
              <div className="service-content flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
                
                <h2 className="heading-font font-bold text-2xl sm:text-3xl lg:text-6xl leading-tight">
                  {service.title}
                </h2>

                <p className="body-font2 text-blue-800 text-base lg:text-3xl font-medium">
                  {service.sub}
                </p>

                <ul className="flex flex-col gap-3 w-full">
                  {service.points.map((pt, j) => (
                    <li key={j} className="point flex items-center gap-3 text-slate-300">
                      {pt}
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          )
        })}

      </div>
    </div>
  )
}

export default WhatWeDo