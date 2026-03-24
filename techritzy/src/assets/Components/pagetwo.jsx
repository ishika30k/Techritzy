import React from 'react'

const PageTwo = () => {
  return (
    <div className='h-screen w-full rounded-t-4xl bg-gray-900'>
      <div className='items-center flex flex-col gap-10'>
        <h1 className='font-light text-6xl text-center p-10 text-white'>Real Results, Real Stories</h1>
        <div className='flex gap-20'>
           <img className='h-150 rounded-4xl m-20 ' src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2glMjBsYWR5fGVufDB8fDB8fHww" alt="" /> 
           <div className='items-center mt-50 flex flex-col gap-10'>
            <h2 className='text-3xl  font-semibold'>Lorem ipsum dolor sit amet.</h2>
            <p className='text-3xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime nostrum illo. Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default PageTwo
