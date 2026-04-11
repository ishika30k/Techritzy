import React from 'react'

const PageTwo = () => {

  return (
    <div className='min-h-screen w-full rounded-t-4xl bg-black'>
      <div >
        <div className='items-center flex flex-col gap-10'>
          <div className='flex gap-1 mt-15 items-start'>
          <div className="items-center h-0.5 w-6 mt-3 bg-blue-900"></div>
          <h3 className='text-blue-800 text-xl'>Our Expertise</h3>
        </div>
        <h1 className='font-light text-6xl text-center heading-font p-10 text-white'>We build things <br />people love <br />to use.</h1>
        <p className='text-2xl font-medium body-font2'>Founded in 2020, we're a small but mighty team obsessed with turning complex problems into elegant, intuitive products. We work with<br /> startups, scale-ups, and established brands to design, develop, and launch digital products that actually move the needle. Every project<br /> we take on  is treated as a long-term partnership. We don't just ship and disappear — we stay, iterate, and grow alongside you.</p>
        <div className='justify-self-center items-center flex text-blue-700'>
          <div className="h-0.5 w-6 mt-1 bg-blue-900"></div>
            <h4 className='text-2xl'>The People Behind It</h4>
          </div>
        <h3 className='text-5xl pb-10 sm:pb-10'>Meet the founders</h3>

        </div>
      <div className='flex flex-col gap-5 md:flex-col sm:flex-col sm:gap-10 lg:flex-row md:gap-10 lg:gap-20 lg:items-stretch md:p-25 border-blue-700 md:items-center rounded-4xl '>

        <img 
          className='w-100 max-w-xs md:max-w-md lg:min-w-200 lg:h-150 rounded-4xl lg:m-10' 
          src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?w=500&auto=format&fit=crop&q=60"
          alt=""
        /> 

        <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-10 lg:mt-50 px-6 lg:px-0'>
          <h2 className='text-2xl md:text-4xl lg:text-5xl heading-font font-semibold'>
            Sunny Raikwar
          </h2>

          <h3 className='text-lg md:text-2xl lg:text-3xl body-font font-medium'>
            Co-Founder and CEO
          </h3>

          <p className='text-sm md:text-lg lg:text-3xl max-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime nostrum illo. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-col sm:flex-col sm:gap-10 md:items-center lg:flex-row gap-10 lg:gap-20 border-blue-700 rounded-4xl lg:items-stretch p-25 '>
      <img 
          className='w-100 max-w-xs md:max-w-md lg:min-w-200 lg:h-150 rounded-4xl lg:m-10' 
          src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?w=500&auto=format&fit=crop&q=60"
          alt=""
        /> 
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-10 lg:mt-50'>
          <h2 className='text-2xl md:text-4xl lg:text-5xl heading-font font-semibold'>
            Pulkit Vaishnav
          </h2>

          <h3 className='text-lg md:text-2xl lg:text-3xl body-font font-medium'>
            Co-Founder
          </h3>

          <p className='text-sm md:text-lg lg:text-3xl max-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime nostrum illo. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default PageTwo
