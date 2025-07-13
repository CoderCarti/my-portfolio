import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] flex justify-between text-white items-center p-5 shadow-md'>
  <h1 className='w-full text-[20px] font-bold text-[#00df9a] cursor-pointer'>Christian's Portfolio</h1>
  <ul className='hidden md:flex justify-between items-center'>
    <li className='p-4 mr-10 hover:text-[#00df9a] font-bold cursor-pointer'>
      <a href="#projects" className='whitespace-nowrap'>Portfolio</a>
    </li>
    <li className='p-4 mr-10 hover:text-[#00df9a] font-bold cursor-pointer'>
      <a href="#about" className='whitespace-nowrap'>About Me</a>
    </li>
    <li className='p-4 mr-10 hover:text-[#00df9a] font-bold cursor-pointer'>
      <a href="#contact" className='whitespace-nowrap'>Contact</a>
    </li>
  </ul>

  <div onClick={handleNav} className='block md:hidden'>
    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
  </div>

      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> Portfolio</h1>
        <ul className='uppercase p-4'>
        <li className='p-4 border-b border-gray-600'><a href="#home">Home</a></li>
        <li className='p-4 border-b border-gray-600'><a href="#about">About Me</a></li>
        <li className='p-4 border-b border-gray-600'><a href="#contact">Contact</a></li>
        <li className='p-4'><a href="#projects">Portfolio</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
