import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Footerframe = () => {
  return (
    <div className= 'bg-gray-100  h-fit flex flex-col gap-6 justify-center items-center pb-4 md:h-[60vh]'>
        <div className=' text-center p-3  md:w-2/5 md:h-[40vh] md:flex md:justify-center md:items-center md:p-0'>
            <h2 className='font-bold text-gray7600 md:text-6xl md:w-fit md:text-center md:leading-[1.3]'>Pellentesque suscipit fringilla libero eu.</h2>
        </div>

      <div>
        <button className='pl-4 pr-4 pt-3 pb-3 font-bold'>Get a Demo  <FaArrowRightLong  size={20} color='green'  />   </button>
       </div>
    </div>
  )
}

export default Footerframe