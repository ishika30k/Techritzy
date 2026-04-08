import React from 'react'
import Marquee from 'react-fast-marquee'

const PageThree = () => {
  return (
    <div className="bg-black text-white h-162.5 w-full">
      <Marquee className='py-6 ' speed={50}>
        <img className='h-20 mx-20' src="https://i.pinimg.com/736x/2f/9c/11/2f9c11f9e55efbf1791f12c06d60729b.jpg" alt="" />
        <img className='h-20 mx-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvuT2itSRBeEsjdrqL7MefDvbmOaXvKSaDQ&s" alt="" />
        <img className='h-30 mx-10' src="https://s3-alpha.figma.com/hub/file/2815777610/f48aadd7-3fa2-4218-bebf-597021659f2b-cover.png" alt="" />
        <img className='h-32 mx-16' src="https://static.vecteezy.com/system/resources/previews/012/194/460/non_2x/js-letter-logo-design-with-black-background-in-illustrator-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg" alt="" />
        <img className='h-30 mx-16' src="https://cdn-icons-png.flaticon.com/512/5969/5969120.png" alt="" />
        <img className='h-30 mx-16' src="https://admin.incora.software/uploads/django_logo_1b9b4564ab.png" alt="" />
        <img className='h-20 mx-16' src="https://simplior.com/wp-content/uploads/2022/05/nodejs-white-web-story.png" alt="" />
        <img className='h-20 ' src="" alt="" />
      </Marquee>
      <div className='flex divide-x items-start pt-15 justify-around'>
        <div className='px-10 text-center'>
        <p className='font-semibold p-18 md:text-2xl lg:text-3xl'>7+ <br />Years of Excellence</p>
        <p className='lg:text-2xl md:text-xl'>Delivering Innovation for 7+ years, earning a reputation for innovation and reliability.</p>
      </div>
      <div className='px-10 text-center'>
        <p className='font-semibold md:text-2xl lg:text-3xl p-18'>150+ <br />Successful Projects</p>
        <p className='lg:text-2xl md:text-xl'>Proven success with over 50+ projects delivered effectively across diverse IT domains.</p>
      </div>
      <div className='px-10 text-center'>
        <p className='font-semibold md:text-2xl lg:text-3xl p-18'>90% <br />Client Satisfaction</p>
        <p className='lg:text-2xl md:text-xl'>Putting clients first, we proudly maintain an impressive  90% satisfaction rate in IT solutions.</p>
      </div>
      </div>
    </div>
  )
}

export default PageThree
