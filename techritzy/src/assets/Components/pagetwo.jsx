import React from 'react'

const PageTwo = () => {

  return (
    <div className='min-h-screen w-full rounded-t-4xl bg-black'>
      <div className='items-center flex flex-col gap-10'>
        <div className='flex gap-1 mt-15 items-start'>
          <div className="h-[2px] w-6 mt-3 bg-blue-900"></div>
          <h3 className='text-blue-700 text-xl'>Our Expertise</h3>
        </div>
        <h1 className='font-light text-6xl text-center heading-font p-10 text-white'>We build things <br />people love <br />to use.</h1>
        <p className='text-2xl font-medium body-font2'>Founded in 2020, we're a small but mighty team obsessed with turning complex problems into elegant, intuitive products. We work with<br /> startups, scale-ups, and established brands to design, develop, and launch digital products that actually move the needle. Every project<br /> we take on  is treated as a long-term partnership. We don't just ship and disappear — we stay, iterate, and grow alongside you.</p>
        <div className='justify-self-center items-center flex text-blue-700'>
          <div className="h-[2px] w-6 mt-1 bg-blue-900"></div>
            <h4 className='text-2xl'>The People Behind It</h4>
          </div>
        <h3 className='text-5xl'>Meet the founders</h3>
        <div className='flex gap-20 border-blue-700 rounded-4xl'>
           <img className='h-150 rounded-4xl m-20 ' src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2glMjBsYWR5fGVufDB8fDB8fHww" alt="" /> 
           <div className='items-center mt-50 flex flex-col gap-10'>
            <h2 className='text-5xl heading-font font-semibold'>Sunny Raikwar</h2>
            <h3 className='text-3xl body-font font-medium'>Co-Founder and CEO</h3>
            <p className='text-3xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime nostrum illo. Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className='flex gap-20 border-blue-700 rounded-4xl p-10'>
           <div className='items-center mt-50 flex flex-col gap-10'>
            <h2 className='text-5xl heading-font font-semibold'>Pulkit Vaishnav</h2>
            <h3 className='text-3xl body-font font-medium'>Co-Founder </h3>
            <p className='text-3xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime nostrum illo. Lorem ipsum dolor sit amet.</p>
            </div>
            <img className='h-150 rounded-4xl m-20 ' src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2glMjBsYWR5fGVufDB8fDB8fHww" alt="" /> 
        </div>
     </div>
    </div>
  )
}

export default PageTwo
