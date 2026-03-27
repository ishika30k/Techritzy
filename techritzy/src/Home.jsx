import React from 'react'
import PageOne from './assets/Components/pageone'
import PageTwo from './assets/Components/pagetwo'
import PageThree from './assets/Components/pagethree'
import Card from './assets/Components/Card'
import {info} from './assets/Components/constants'

const Home = () => {
  return (
    <div className='bg-black overflow-hidden'>
      <PageOne/>
      <div className='bg-black flex flex-wrap  m-9 gap-6 justify-around'>
        {info.map(function(elem,idx){
    return (
     <Card key={idx} heading={elem.heading} description={elem.description} image={elem.image}/>
      )
    })}
      </div> 
      <PageTwo/> 
      <PageThree/>
    </div>
  )
}

export default Home
