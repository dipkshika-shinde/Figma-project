import React from 'react'
import frame from './assets/Frame.svg';

const Details = () => {
  return (
    <div className=' pl-4 flex  flex-col w-full h-fit gap-3 md:flex-row md:h-[56vh]  '> 
        <div className='flex justify-center items-center w-full h-full'>
            <img src={frame} alt="" />
        </div>
        <div className=' flex flex-col gap-10 justify-start items-start p-1 md:gap-15 md:pt-14 md:pl-20 md:pr-20'>
            <h2 className='font-bold  text-gray-600  w-full'>The unseen of spending three years at Pixelgrade</h2>
            <p className=' text-gray-400 font-semibold'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className='rounded-sm'>Learn More</button>
        </div>
    </div>
  )
}

export default Details