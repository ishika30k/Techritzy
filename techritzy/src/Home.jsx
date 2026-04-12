import React from 'react'
import PageOne from './assets/Components/pageone'
import PageThree from './assets/Components/pagethree'
import Card from './assets/Components/Card'
import {info} from './assets/Components/constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useGSAP(() => {
    gsap.from('.card', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,  
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.card-container', 
        start: 'top 70%',
      }
    })
  })

  return (
    <div className='bg-black overflow-hidden'>
      <PageOne/>
      <div className='card-container heading-font bg-black flex flex-wrap justify-center gap-6 px-2 py-10'>
        {info.map(function(elem,idx){
    return (
     <Card key={idx}  id={idx} heading={elem.heading} description={elem.description} image={elem.image}/>
      )
    })}
      </div>  
      <PageThree/>
    </div>
  )
}

export default Home
