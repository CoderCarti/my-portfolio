import React from 'react'
import gadonski from '../images/gadonski_img.png'
import { ReactTyped } from "react-typed";
import { IoMdDownload, IoLogoCss3 } from "react-icons/io";
import { IoLogoAngular, IoLogoJavascript } from "react-icons/io5";
import { SiAlby } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5, FaVuejs } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";

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
        <div className='mt-10 text-[#00df9a] flex space-x-4 border-2 border-[#00df9a] p-4 rounded-lg w-[80%] justify-center items-center flex-col '>
            <SiAlby className='w-[70px] h-[70px] ml-3' />
            <h1 className='text-center mr-[20px] w-[20%] mb-3'>TechStack</h1>
            <div className='flex space-x-8 mt-4 justify-between w-[75%]'>
                <div className='flex flex-col items-center'>
                    <FaHtml5 className='w-10 h-10' />
                    <span className='text-white text-sm mt-2'>HTML</span>
                </div>
                <div className='flex flex-col items-center'>
                    <FaReact className='w-10 h-10' />
                    <span className='text-white text-sm mt-2'>React</span>
                </div>
                <div className='flex flex-col items-center'>
                    <IoLogoCss3 className='w-10 h-10' />
                    <span className='text-white text-sm mt-2'>CSS</span>
                </div>
                <div className='flex flex-col items-center'>
                    <IoLogoAngular className='w-10 h-10' />
                    <span className='text-white text-sm mt-2'>Angular</span>
                </div>
                <div className='flex flex-col items-center'>
                    <FaVuejs className='w-10 h-10' />
                    <span className='text-white text-sm mt-2'>Vue.js</span>
                </div>
                <div className='flex flex-col items-center'>
                    <FaNode className='w-10 h-10' />
                    <span className='text-white text-sm mt-2'>Node.js</span>
                </div>
                <div className='flex flex-col items-center'>
                    <RiTailwindCssFill className='w-10 h-10' />
                    <span className='text-white text-sm mt-2'>Tailwind CSS</span>
                </div>
                <div className='flex flex-col items-center'>
                    <IoLogoJavascript className='w-10 h-10' />
                    <span className='text-white text-sm mt-2'>JavaScript</span>
                </div>
                <div className='flex flex-col items-center'>
                    <DiMongodb className='w-10 h-10' />
                    <span className='text-white text-sm mt-2'>MongoDB</span>
                </div>
            </div>
        </div>
    </div>
)
}

export default Homepage
