import React from 'react'
import PageOne from './assets/Components/pageone'
import PageTwo from './assets/Components/pagetwo'
import PageThree from './assets/Components/pagethree'
import Card from './assets/Components/Card'
import {info} from './assets/Components/constants'
import ContactCard from './assets/Components/ContactCard'
import { contact } from './assets/Components/constants'
import ContactUs from './assets/Components/contactUs'
import Footer from './assets/Components/Footer'

const Home = () => {
  return (
    <div className='bg-black overflow-hidden'>
      <PageOne/>
      <div className='bg-black flex flex-wrap my-16 mx-16 justify-around'>
        {info.map(function(elem,idx){
    return (
     <Card key={idx} heading={elem.heading} description={elem.description} image={elem.image}/>
      )
    })}
      </div>  
      <PageThree/>
      <Footer/>
    </div>
  )
}

export default Home
