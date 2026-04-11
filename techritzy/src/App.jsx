import React from 'react'
import Navbar from './assets/Components/Navbar'
import Home from './Home'
import { Route,Routes } from 'react-router-dom'
import WhatWeDo from './assets/Components/WhatWeDo'
import ContactUs from './assets/Components/contactUs'
import AboutUs from './AboutUs'
import Footer from './assets/Components/Footer'
import ScrollToTop from './ScrollToTop'

const App = () => {

  return (
    <div className='bg-black overflow-hidden'>
      <Navbar/>
      <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services/:id' element={<WhatWeDo/>} />
        <Route path="/services" element={<WhatWeDo />} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
      </>
      <Footer/>
    </div>  
  )
}

export default App
