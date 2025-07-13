import React from 'react'
import gadonski from '../images/gadonski_img.png'
import { ReactTyped } from "react-typed";
import { IoMdDownload, IoLogoCss3 } from "react-icons/io";
import { IoLogoAngular, IoLogoJavascript } from "react-icons/io5";
import { SiAlby } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5, FaVuejs,FaGithub, FaLinkedin } from "react-icons/fa";
import { FaL, FaNode } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import studevent from '../images/Studevent.png';
import ScrollToTopButton from './ScrollToTopButton';

const Homepage = () => {
return (
    <div className='flex flex-col items-center h-screen bg-[#0a0a0a] pt-[90px]'>
        <ScrollToTopButton />
        {/*home section*/}
         <section id="home" className='flex flex-col items-center h-screen'>
        <img
            src={gadonski}
            alt="Gadonski"
            className='w-44 h-44 mt-10 rounded-full object-cover shadow-lg shadow-green-400/40'
        />
        <h1 className='text-white mt-10 text-4xl font-bold'>Christian Gadon</h1>
        <ReactTyped
            className='text-[#00df9a] text-2xl mt-4'
            strings={["Full Stack Developer", "Frontend Developer", "Backend Developer"]}
            typeSpeed={30}
            backSpeed={60}
            loop   
        />
        <p className='text-white mt-7 text-[21px] font-semibold w-[60%] text-center'>React. Node. MongoDB. Clean Code from Front to Back.
I'm a full-stack developer passionate about creating modern, functional, and maintainable web applications.</p>
        <button className='mt-10 px-6 py-2 bg-[#00df9a] text-black font-bold rounded-lg hover:bg-[#00df9a]/80 transition duration-300 w-30 h-auto flex items-center justify-center'>
            <a href="/Gadon_Christian_Resume.pdf" download className="flex items-center">
                Download CV
                <IoMdDownload className='w-5 h-5 ml-2'/>
            </a>
        </button>
         </section>
         
        <div className='mt-10 text-[#00df9a] flex flex-col border-2 border-[#00df9a] p-4 rounded-lg w-[90%] max-w-screen-xl mx-auto items-center'>
             <section id="projects" className='py-16 flex flex-col items-center'>
            <SiAlby className='w-[70px] h-[70px] mb-2' />
            <h1 className='text-center text-xl font-bold mb-4'>TechStack</h1>

            <div className='flex flex-wrap justify-center gap-6 w-full mt-4'>
                <div className='flex flex-col items-center w-20'>
                <FaHtml5 className='w-10 h-10' />
                <span className='text-white text-sm mt-2 text-center'>HTML</span>
                </div>
                <div className='flex flex-col items-center w-20'>
                <IoLogoCss3 className='w-10 h-10' />
                <span className='text-white text-sm mt-2 text-center'>CSS</span>
                </div>
                <div className='flex flex-col items-center w-24'>
                <IoLogoJavascript className='w-10 h-10' />
                <span className='text-white text-sm mt-2 text-center'>JavaScript</span>
                </div>
                <div className='flex flex-col items-center w-20'>
                <FaReact className='w-10 h-10' />
                <span className='text-white text-sm mt-2 text-center'>React</span>
                </div>
                <div className='flex flex-col items-center w-20'>
                <IoLogoAngular className='w-10 h-10' />
                <span className='text-white text-sm mt-2 text-center'>Angular</span>
                </div>
                <div className='flex flex-col items-center w-20'>
                <FaVuejs className='w-10 h-10' />
                <span className='text-white text-sm mt-2 text-center'>Vue.js</span>
                </div>
                <div className='flex flex-col items-center w-20'>
                <FaNode className='w-10 h-10' />
                <span className='text-white text-sm mt-2 text-center'>Node.js</span>
                </div>
                <div className='flex flex-col items-center w-24'>
                <RiTailwindCssFill className='w-10 h-10' />
                <span className='text-white text-sm mt-2 text-center'>Tailwind</span>
                </div>
                <div className='flex flex-col items-center w-24'>
                <DiMongodb className='w-10 h-10' />
                <span className='text-white text-sm mt-2 text-center'>MongoDB</span>
                </div>
            </div>
            </section>
            </div>
            
            {/* Projects Section */}
                <div className='mt-10 text-white text-center w-full flex flex-col items-center px-4'>
                <h2 className='text-3xl font-bold mb-6'>Projects</h2>
                <p className='text-center w-full md:w-[60%] mb-6'>
                    Here are some of my recent projects. Click on the links to view them.
                </p>

                <div className='flex flex-col lg:flex-row gap-8 w-full max-w-6xl'>
                    <div className='w-full lg:w-[45%] bg-gray-800 p-6 rounded-lg shadow-lg'>
                    <h3 className='text-xl font-semibold text-[#00df9a]'>Project 1: Portfolio Website</h3>
                    <p className='text-white mt-2'>A responsive portfolio website showcasing my skills and projects.</p>
                    <img
                        src={studevent}
                        alt="Project 1"
                        className='mt-4 w-full h-auto rounded-lg shadow-md'
                    />
                    <p className='text-white mt-4 text-justify text-sm leading-relaxed'>
                        The event approval procedure is significantly enhanced by the combination of technology. 
                        "StudEvent" eliminates the need for taxing human effort and cumbersome recordkeeping. 
                        Through the management of events and approvals, this system increases workflow efficiency and productivity. 
                        Among the main advantages of this technological advancement is the time saved for event planners and administrative staff.
                        By minimizing paperwork and physical labor, they might be able to better manage their time and resources. 
                        With greater leisure time, they could focus on other facets of their profession, like improving
                        experiences of participants, implementing rules, and distributing funds efficiently.
                    </p>
                    <button
                        onClick={() => window.open('https://www.studevent.org/', '_blank')}
                        className='mt-6 px-4 py-2 bg-[#00df9a] text-black font-bold rounded-lg hover:bg-[#00df9a]/80 transition duration-300'
                    >
                        View Project
                    </button>
                    </div>
                </div>
                </div>



            <section id="about" className='py-16 flex flex-col items-center'>
                {/* About Me Section */}
                <h2 className='text-3xl font-bold mb-6 text-white'>About Me</h2>
                <p className='text-center w-[60%] text-white'>
                I'm a software developer specializing in frontend and backend development. I build responsive, high-performance web applications.
                </p>
            </section>

            <section id="contact" className='py-16 flex flex-col items-center w-[60%] max-w-screen-xl mx-auto'>
                {/* Contact Section */}
                 <div className='mt-10 text-black flex flex-col border-2 border-[#00df9a] p-4 rounded-lg w-[90%] max-w-screen-xl mx-auto items-center'>
                <h2 className='text-3xl font-bold mb-6 text-white'>Contact</h2>
                <p className='text-white'>Want to work together or have a question? Feel free to reach out!</p>
                <input type='text' placeholder='Your Name' className='mt-4 p-2 rounded-lg w-[60%] max-w-md' />
                <input type='email' placeholder='Your Email' className='mt-4 p-2 rounded-lg w-[60%] max-w-md' />
                <textarea placeholder='Your Message' className='mt-4 p-2 rounded-lg w-[60%] max-w-md h-32'></textarea>
                <button className='mt-4 px-6 py-2 bg-[#00df9a] text-black font-bold rounded-lg hover:bg-[#00df9a]/80 transition duration-300'>
                    Send Message
                </button>
                </div>
            </section>

            <div className='mt-10 mb-4 text-white text-center w-[90%] max-w-screen-xl flex justify-center gap-6'>
            <div className='flex gap-8'>
                <button
                onClick={() => window.open('https://www.linkedin.com/in/christian-gadon-049a61272/', '_blank')}
                className='flex flex-col items-center hover:text-[#00df9a] transition duration-300'
                >
                <FaLinkedin className='w-8 h-8' />
                <span className='mt-1'>LinkedIn</span>
                </button>

                <button
                onClick={() => window.open('https://github.com/CoderCarti', '_blank')}
                className='flex flex-col items-center hover:text-[#00df9a] transition duration-300'
                >
                <FaGithub className='w-8 h-8' />
                <span className='mt-1'>Github</span>
                </button>
            </div>
            </div>
            <footer className="text-center text-sm text-gray-500 py-6">
            © {new Date().getFullYear()} Christian Gadon. All rights reserved.
            </footer>
    </div>

    )
}

export default Homepage
