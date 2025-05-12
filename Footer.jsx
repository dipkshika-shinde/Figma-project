import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { BsSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-gray-800 pl-15 w-full h-fit p-3 text-white flex flex-col gap-25 md:flex-row md:pl-40 md:pt-8  md:gap-70 md:h-[70vh]'>
      <div className='flex flex-col gap-6 md:gap-13'>
        <div>
          <h3 className=' font-bold text-4xl'>Nexcent</h3>
        </div>
        <div  className='flex flex-col gap-6 md:gap-9'>
          <p className='text-1xl'>Copyright © 2020 Nexcent ltd.</p>
          <p className='text-1xl'>All rights reserved</p>
        </div>
        <div className=' flex gap-7 '>
              <FaInstagram size={25}/>
              <FaDribbble size={25}/>
              <FaTwitter size={25}/>
              <IoLogoYoutube size={25}/>
        </div>
      </div>


      <div className=' flex flex-col gap-15 md:flex-row md:pt-8 md:gap-20'>
        <div className='  flex flex-col gap-9 md:gap-13'>
            <h4 className='font-bold text-2xl'>Company</h4>
          <div className=' flex flex-col gap-8 font-bold md:gap-10'>
            <p>About us</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>Pricing</p>
            <p>Testimonials</p>
          </div>
        </div>
        <div className='  flex flex-col gap-9 md:gap-13'>
              <h4 className='font-bold text-2xl'>Support</h4>
          <div className='flex flex-col gap-8 font-bold md:gap-10'>
            <p>Help center</p>
            <p>Terms of service</p>
            <p>Legal</p>
            <p>Privacy policy</p>
            <p>Status</p>
          </div>                                  
        </div>
        <div className='flex flex-col gap-7 md:gap-13'>
            <h4 className='font-bold text-2xl'>Stay up to date</h4>
            <div className='bg-gray-600 h-[50px] w-3/5 flex justify-end items-center pr-3 rounded-xl md:w-[20vw] md:h-[40px]'> <BsSendFill size={20}/></div>

        </div>
      </div>
    </div>
  )
}

export default Footer