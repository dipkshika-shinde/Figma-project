import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import image8 from './assets/image8.png'
import image9 from './assets/image9.png'
import image10 from './assets/image10.png'

const CommunityUpdate = () => {
  return (
    <div className=' pl-3 pt-20 h-fit w-fit pb-15 md:flex md:flex-col md:gap-6'>
        <div className=' pl-6 font-bold pr-3  flex flex-col gap-14 pb-2 h-fit w-fit justify-center items-center'>
            <h2 className='text-gray-600'>Caring is the new marketing</h2>
            <p className=' md:text-center md:w-2/5 text-gray-400'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>

        
        </div>
       
        <div className=' h-full w-full flex flex-col gap-20 justify-center items-center  md:flex-row md:gap-15'>
            <div className=' w-[350px] h-[300px] flex flex-col justify-center items-center relative '>
                <div className='flex justify-center items-center pr-2 md:w-full md:pr-0'>
                    <img src={image8} alt="" />
                </div>
                 <div className='w-[260px] h-[170px] bg-white flex flex-col gap-9  items-center text-center p-2 rounded-2xl absolute top-40 shadow-2xl'>
                    <h4 className='font-bold text-gray-500'>Creating Streamlined Safeguarding Processes with OneRen</h4>
                    <div className='flex justify-center items-center gap-5'>
                        <h4 className='font-bold text-green-500'>Readmore </h4>           
                        <FaArrowRightLong  size={20} color='green'  />   
                    </div>        
                </div> 
            </div>


            <div className=' w-[350px] h-[300px] flex flex-col justify-center items-center relative '>
                <div className='flex justify-center items-center pr-2 md:w-full md:pr-0 '>
                      <img src={image9} alt="" />
                </div>
                 <div className='w-[260px] h-[170px] bg-white flex flex-col gap-4  items-center text-center p-1 rounded-2xl absolute top-40 shadow-2xl'>
                    <h4 className='font-bold text-gray-500'>What are your safeguarding responsibilities and how can you manage them?</h4>
                    <div className='flex justify-center items-center gap-5'>
                        <h4 className='font-bold text-green-500'>Readmore </h4>           
                        <FaArrowRightLong  size={20} color='green'  />   
                    </div>        
                </div> 
            </div>


             <div className=' w-[350px] h-[300px] flex flex-col justify-center items-center relative '>
                <div className='flex justify-center items-center  pr-2 md:w-full md:pr-0'>
                        <img src={image10} alt="" />
                </div>
                 <div className='w-[260px] h-[170px] bg-white flex flex-col gap-9  items-center text-center p-2 rounded-2xl absolute top-40 shadow-2xl'>
                    <h4 className='font-bold text-gray-500'>Revamping the Membership Model with Triathlon Australia</h4>
                    <div className='flex justify-center items-center gap-5'>
                        <h4 className='font-bold text-green-500'>Readmore </h4>           
                        <FaArrowRightLong  size={20} color='green'  />   
                    </div>        
                </div> 
            </div>
            

            
        </div>
    </div>
  )
}

export default CommunityUpdate