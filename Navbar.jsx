import React from 'react'
import Icon from './assets/icon.svg';
import { IoMdMenu } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

const Navbar = () => {
  return (
  <div className=' h-[50px] size-full flex '>


    <div className="left w-1/2 flex h-full items-center justify-center gap-2 md:w-2/5 ">
      <img src={Icon} alt="" />
      <h3 className=' font-bold'>Nexcent</h3>
    </div>

<div className="middle hidden  md:flex  md:w-3/2 md:h-full md:items-center md:justify-end md:gap-6 md:pr-20">
  <a href="#">Home</a>
  <a href="#">Service</a>
  <a href="#">Feature</a>
  <a href="#">Product</a>
  <a href="#">Testimonial</a>
  <a href="#">FAQ</a>
  <button>Register Now<FaLongArrowAltRight /></button>

</div>

    <div className="right flex items-center justify-end  pr-3 w-1/2 h-full md:hidden">
    <IoMdMenu size={25} />
    </div>
  </div>
  )
}

export default Navbar;
