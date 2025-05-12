import React from 'react'
import logo from './assets/Logo.svg';
import logo1 from './assets/Logo1.svg';
import logo2 from './assets/logo2.svg';
import logo3 from './assets/logo3.svg';
import logo4 from './assets/logo4.svg';
import logo5 from './assets/logo5.svg';
import logo6 from './assets/logo6.svg';
import icon from './assets/Icon2.svg';
import icon1 from './assets/Icon3.svg';
import icon2 from './assets/Icon4.svg';


const Client = () => {
  return (
    <div className='w-full h-fit flex  flex-col justify-center items-center pl-4'>
        <div className=' flex  flex-col justify-center items-center gap-15  w-full h-full p-3'>
            <h2 className='font-bold pt-15 text-gray-600 md:text-4xl'>Our Client</h2>
            <p className='text-center w-3/5  text-gray-400 md:text-1xl md:font-bold'>We have been working with some Fortune 500+ clients</p>

            <div className='flex flex-wrap w-4/5 gap-5 justify-center md:gap-40 md:w-full  md:h-fit md:wrap-normal  md:pl-13 md:pr-16' >  
                <img src={logo} alt="" />
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
            </div>

            <div className='w-full text-center p-3 font-bold flex flex-col gap-14 md:text-center md:justify-center md:items-center-safe'>
                <h2 className=' text-gray-600  md:text-center md:w-2/5 md:text-4xl'>Manage your entire community in a single system</h2>
                <p className='md:font-bold md:font-2xl '>Who is Nextcent suitable for?</p>
            </div>

            <div className='  flex flex-col  items-center pt-2 gap-3 md:flex-row md:gap-17' >
                <div className="w-[300px] h-[300px]  rounded-[4px] flex flex-col gap-6  shadow-lg">
                    <div className="upper h-1/5 flex  justify-center items-center">
                        <img src={icon} alt="" />
                    </div>
                    <div className="lower flex flex-col justify-center items-center text-center gap-6 ">
                        <h3 className=' text-gray-600 font-bold'>Membership Organisations</h3>
                        <p className=' text-gray-400 md:font-bold'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
               <div className="w-[300px] h-[300px] rounded-[4px] flex flex-col gap-6 shadow-lg ">
                    <div className="upper h-1/5  flex  justify-center items-center">
                          <img src={icon1} alt="" />
                    </div>
                  <div className="lower flex flex-col justify-center items-center text-center gap-6">
                        <h3 className=' text-gray-600 font-bold w-3/5'>National Associations</h3>
                        <p className=' text-gray-400 md:font-bold'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
                <div className="w-[300px] h-[300px] rounded-[4px] flex flex-col gap-6 shadow-lg ">
                     <div className="upper h-1/5  flex  justify-center items-center">
                          <img src={icon2} alt="" />
                    </div>
                   <div className="lower flex flex-col justify-center items-center text-center gap-6">
                        <h3 className=' text-gray-600 font-bold w-3/5'>Clubs And Groups</h3>
                        <p className=' text-gray-400 md:font-bold'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Client