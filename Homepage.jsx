import React from 'react';
import Image1 from './assets/image1.svg';

const Homepage = () => {
  return (
  
    <div className='w-full h-[100vh] p-4 md:flex  md:h-[60vh] md:pt-26  pt-15 bg-gray-100'>
      <div className='h-1/2 pl-3 flex flex-col justify-start items-start gap-10 w-full md:h-full md:pl-20 md:gap-12'>
        <h2 className='font-bold  md:w-[70vh]  text-gray-600 '>Lessons and insights <span>from 8 years </span></h2>
        <p className='w-4/5  text-gray-400 md:font-bold'>Where to grow your business as a photographer: site or social media?</p>
        <button className='rounded-sm'> Register</button>

      </div>
      <div className=' flex justify-center items-center p-3 h-1/2 w-full md:h-full ' >
        <img 
          className='w-full h-full md:flex md:justify-start md:items-start '
         src={Image1}
         alt=""
         
          />
      </div>
    </div>
  
  )
}

export default Homepage