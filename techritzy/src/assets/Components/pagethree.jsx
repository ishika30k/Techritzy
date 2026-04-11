import React from 'react'
import Marquee from 'react-fast-marquee'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PageThree = () => {

  useGSAP(() => {

  const counters = [
    { selector: ".counter-1", end: 7, suffix: "+" },
    { selector: ".counter-2", end: 150, suffix: "+" },
    { selector: ".counter-3", end: 90, suffix: "%" }
  ];

  counters.forEach((item) => {
    let obj = { val: 0 };

    gsap.to(obj, {
      val: item.end,
      duration: 2,
      ease: "power2.out",
      roundProps: "val",

      scrollTrigger: {
        trigger: item.selector,
        start: "top 80%",
        toggleActions: "play none none none"
      },

      onUpdate: function () {
        const el = document.querySelector(item.selector);
        if (el) {
          el.innerText = obj.val + item.suffix;
        }
      }
    });
  });

});

  return (
    <div className="bg-black text-white w-full py-10">

      <Marquee className='py-4 lg:h-32 h-16 md:h-24' speed={50}>
        <img className='h-10 lg:mx-20 lg:h-20 md:h-16 mx-10' src="https://i.pinimg.com/736x/2f/9c/11/2f9c11f9e55efbf1791f12c06d60729b.jpg" />
        <img className='h-10 lg:mx-20 lg:h-20 md:h-16 mx-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvuT2itSRBeEsjdrqL7MefDvbmOaXvKSaDQ&s" />
        <img className='h-14 lg:mx-10 lg:h-30 md:h-20 mx-10' src="https://s3-alpha.figma.com/hub/file/2815777610/f48aadd7-3fa2-4218-bebf-597021659f2b-cover.png" />
        <img className='h-16 lg:mx-16 lg:h-32 md:h-20 mx-10' src="https://static.vecteezy.com/system/resources/previews/012/194/460/non_2x/js-letter-logo-design-with-black-background-in-illustrator-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg" />
        <img className='h-14 lg:mx-16 lg:h-30 md:h-20 mx-10' src="https://cdn-icons-png.flaticon.com/512/5969/5969120.png" />
        <img className='h-14 lg:mx-16 lg:h-30 md:h-20 mx-10' src="https://admin.incora.software/uploads/django_logo_1b9b4564ab.png" />
        <img className='h-10 lg:mx-16 lg:h-20 md:h-16 mx-10' src="https://simplior.com/wp-content/uploads/2022/05/nodejs-white-web-story.png" />
      </Marquee>

      <div className='flex flex-col md:flex-row items-center md:items-start justify-around gap-10 md:gap-0 pt-10 md:pt-15'>
        <div className='px-4 md:px-2 flex flex-col gap-2 text-center '>
          <p className='font-semibold text-lg md:text-xl lg:text-5xl md:p-14 lg:p-18 leading-tight'>
            <span className="counter counter-1">1+</span> <br />Years of Excellence
          </p>
          <p className='text-sm md:text-lg lg:text-2xl lg:justify-center-safe lg:ml-28 max-w-xs'>
            Delivering Innovation for 7+ years, earning a reputation for innovation and reliability.
          </p>
        </div>
        <div className='px-6 md:px-10 flex flex-col gap-3 text-center '>
          <p className='font-semibold text-lg md:text-xl lg:text-5xl md:p-14 lg:p-18 leading-tight'>
            <span className='counter counter-2'>0+</span> <br />Successful Projects
          </p>
          <p className='text-sm md:text-lg lg:text-2xl lg:ml-32 max-w-xs'>
            Proven success with over 50+ projects delivered effectively across diverse IT domains.
          </p>
        </div>
        <div className='px-6 md:px-10 flex flex-col gap-3 text-center'>
          <p className='font-semibold text-lg md:text-xl lg:text-5xl md:p-14 lg:p-18 leading-tight'>
            <span className='counter counter-3 '>0%</span> <br />Client Satisfaction
          </p>
          <p className='text-sm md:text-lg lg:ml-28 lg:text-2xl max-w-xs'>
            Putting clients first, we proudly maintain an impressive 90% satisfaction rate in IT solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageThree