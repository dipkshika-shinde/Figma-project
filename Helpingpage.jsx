import React from 'react'
import  image2 from './assets/image2.svg';
import  image3 from './assets/image3.png';
import  image4 from './assets/image4.svg';   
import  image5 from './assets/image5.svg';

const Helpingpage = () => {
  return (
    <div className='h-fit p-3 w-full pt-20 md:flex  bg-gray-100 md:pl-30 md:pr-50 md:pb-10 mt-10'>
        <div className=' flex flex-col justify-start items-start pl-8 pt-6 pr-9 gap-9 md:gap-15 md:pl-26'>
            <h2 className='font-bold  text-gray-600 w-full md:w-4/5'>Helping a local   <span> business reinvent itself</span></h2>
            <p className='w-4/5'>We reached here with our hard work and dedication</p>
        </div>
        <div>
            <div className="row1 pl-8 md:flex md:gap-35 md:pr-30">
                <div className="subrow-1 flex gap-3 pt-6 ">

                    <img src={image2} alt="" />
                
                    <div className="details flex flex-col gap-2">
                        <h5 className='font-bold text-gray-500'>2,245,341</h5>
                        <h5 className='font-bold text-gray-400'>Members</h5>
                    </div>
                </div>

                <div className="subrow-2 flex gap-3 pt-6">

                    <img src={image3} alt="" />
                
                    <div className="details flex flex-col gap-2">
                        <h5 className='font-bold text-gray-500'>46,328</h5>
                        <h5  className='font-bold text-gray-400'>Clubs</h5>
                    </div>
                </div>
            </div>

              <div className="row2  pl-8 md:flex md:gap-35 md:pr-30">
                <div className="subrow-3  flex gap-3 pt-6">

                    <img src={image5} alt="" />
                
                    <div className="details flex flex-col gap-2">
                        <h5 className='font-bold text-gray-500'>828,867</h5>
                        <h5 className='font-bold text-gray-400'>Event Bookings</h5>
                    </div>
                </div>


                 <div className="subrow-3  flex gap-3 pt-6">

                    <img src={image4} alt="" />
                
                    <div className="details flex flex-col gap-2 ">
                        <h5 className='font-bold text-gray-500'>1,926,436</h5>
                        <h5 className='font-bold text-gray-400'>Payments</h5>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Helpingpage;