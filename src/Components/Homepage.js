import React from 'react'
import gadonski from '../images/gadonski_img.png'
import { ReactTyped } from "react-typed";
import { IoMdDownload } from "react-icons/io";

const Homepage = () => {
return (
    <div className='flex flex-col items-center h-screen bg-[#0a0a0a]'>
        <img
            src={gadonski}
            alt="Gadonski"
            className='w-44 h-44 mt-10 rounded-full object-cover shadow-lg shadow-green-400/40'
            />
        <h1 className='text-white mt-10 text-4xl font-bold'>Christian Gadon</h1>
        <ReactTyped
            className='text-[#00df9a] text-2xl mt-4'
            strings={["Web and Mobile Developer"]}
            typeSpeed={30}
            backSpeed={60}
            loop   
        />
        <p className='text-white mt-7 text-[21px] font-semibold w-[60%] text-center'>Welcome to my portfolio! I am a passionate full-stack developer with a 
            love for clean UI and practical backend solutions.</p>
        <button className='mt-10 px-6 py-2 bg-[#00df9a] text-black font-bold rounded-lg hover:bg-[#00df9a]/80 transition duration-300 w-30 h-auto flex items-center justify-center'>
        <a href="/Gadon_Christian_Resume.pdf" download className="flex items-center">
            Download CV
            <IoMdDownload className='w-5 h-5 ml-2'/>
        </a>
        </button>
    </div>
)
}

export default Homepage
