import React from 'react'
import image6 from './assets/image6.svg';

const Designidea = () => {
  return (
    <div className=' pl-4 flex  flex-col w-full h-fit gap-3 md:flex-row md:h-fit  md:pb-8 '>
        <div className='flex justify-center items-center w-full h-fit md:pl-15'>
            <img src={image6 }  
           
            alt="" />
        </div>
        <div className=' flex flex-col gap-10 justify-start items-start p-1 md:gap-15 md:pt-14 md:pl-40 md:pr-20'>
            <h2 className='font-bold  text-gray-600  w-full'>How to design your site footer like we did</h2>
            <p className=' text-gray-400 font-semibold'> Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className='rounded-sm'>Learn More</button>
        </div>
    </div>
    )
}

export default Designidea