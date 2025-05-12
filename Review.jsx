import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import logo from './assets/Logo.svg';
import log1 from './assets/Logo1.svg';
import log2 from './assets/Logo2.svg';
import log3 from './assets/Logo3.svg';
import log4 from './assets/Logo4.svg';
import log5 from './assets/Logo5.svg';
import image from './assets/image7.png';


const Review = () => {
  return (
    <div className='flex flex-col md:flex-row h-fit w-fit pt-19'>
        <div className=' p-6 flex justify-center items-center md:h-full md:w-2/5  md:p-5'> 
            <img src={image} alt="" />
        </div> 
        <div className=' pl-4 flex flex-col justify-center items-start gap-7 p-3 md:h-full md:w-3/5  md:pr-4 '>
            <div className=' font-semibold text-gray-400 md:pt-4 md:pr-20'>
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            </div>
            <div className='flex flex-col gap-10 '>
                <h4 className='font-semibold text-green-400'>Tim Smith</h4>
                <p className=' text-gray-400 md:font-bold'>British Dragon Boat Racing Association</p>
            </div>
            <div className=' flex flex-col gap-5 md:flex-row  md:w-full md:h-fit md:gap-0'>
                <div className=' flex flex-wrap w-full gap-10 md:w-3/5 md:h-fit'>
                    <img src={logo} alt="" />
                    <img src={log1} alt="" />
                    <img src={log2} alt="" />
                <   img src={log3} alt="" />
                    <img src={log4} alt="" />
                    <img src={log5} alt="" />
                </div>
                <div className=' flex justify-start items-center gap-3 pb-2 md:gap-3 md:justify-start md:items-center md:w-2/5'>
                    <h4 className='font-bold  text-green-400 '>Meet all customers </h4>
                    <FaArrowRightLong
                     size={20} 
                     color='green'
                     />
                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review