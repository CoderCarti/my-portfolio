import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import gadonski from '../images/gadonski_img.png';
import { ReactTyped } from "react-typed";
import { IoMdDownload, IoLogoCss3 } from "react-icons/io";
import { IoLogoAngular, IoLogoJavascript } from "react-icons/io5";
import { SiAlby } from "react-icons/si";
import { FaReact, FaHtml5, FaVuejs, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaL, FaNode } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import studevent from '../images/Studevent.png';
import ScrollToTopButton from './ScrollToTopButton';

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className='flex flex-col items-center bg-[#0a0a0a] pt-[90px]'>
      <ScrollToTopButton />

      {/* Home Section */}
      <section id="home" className='flex flex-col items-center h-screen'>
        <img
          data-aos="fade-down"
          src={gadonski}
          alt="Gadonski"
          className='w-44 h-44 mt-10 rounded-full object-cover shadow-lg shadow-green-400/40'
        />
        <h1 data-aos="fade-up" className='text-white mt-10 text-4xl font-bold'>Christian Gadon</h1>
        <ReactTyped
          className='text-[#00df9a] text-2xl mt-4'
          strings={["Full Stack Developer", "Frontend Developer", "Backend Developer"]}
          typeSpeed={30}
          backSpeed={60}
          loop
        />
        <p data-aos="fade-up" className='text-white mt-7 text-[21px] font-semibold w-[60%] text-center'>
          React. Node. MongoDB. Clean Code from Front to Back.
          I'm a full-stack developer passionate about creating modern, functional, and maintainable web applications.
        </p>
        <button data-aos="zoom-in" className='mt-10 px-6 py-2 bg-[#00df9a] text-black font-bold rounded-lg hover:bg-[#00df9a]/80 transition duration-300 w-30 h-auto flex items-center justify-center'>
          <a href="/Gadon_Christian_Resume.pdf" download className="flex items-center">
            Download CV
            <IoMdDownload className='w-5 h-5 ml-2' />
          </a>
        </button>
      </section>

      {/* Tech Stack Section */}
      <div className='mt-5 text-[#00df9a] flex flex-col border-2 border-[#00df9a] p-4 rounded-lg w-[90%] max-w-screen-xl mx-auto items-center'>
        <section id="projects" className='py-16 flex flex-col items-center' data-aos="fade-up">
          <SiAlby className='w-[70px] h-[70px] mb-2' />
          <h1 className='text-center text-xl font-bold mb-4'>TechStack</h1>

          <div className='flex flex-wrap justify-center gap-6 w-full mt-4'>
            {[{
              icon: <FaHtml5 className='w-10 h-10' />, label: "HTML"
            }, {
              icon: <IoLogoCss3 className='w-10 h-10' />, label: "CSS"
            }, {
              icon: <IoLogoJavascript className='w-10 h-10' />, label: "JavaScript"
            }, {
              icon: <FaReact className='w-10 h-10' />, label: "React"
            }, {
              icon: <IoLogoAngular className='w-10 h-10' />, label: "Angular"
            }, {
              icon: <FaVuejs className='w-10 h-10' />, label: "Vue.js"
            }, {
              icon: <FaNode className='w-10 h-10' />, label: "Node.js"
            }, {
              icon: <RiTailwindCssFill className='w-10 h-10' />, label: "Tailwind"
            }, {
              icon: <DiMongodb className='w-10 h-10' />, label: "MongoDB"
            }].map((tech, index) => (
              <div key={index} className='flex flex-col items-center w-20' data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                {tech.icon}
                <span className='text-white text-sm mt-2 text-center'>{tech.label}</span>
              </div>
            ))}
          </div>
        </section>
        hello
      </div>

      {/* Projects Section */}
      <div className='mt-10 text-white text-center w-full flex flex-col items-center px-4' data-aos="fade-up">
        <h2 className='text-3xl font-bold mb-6'>Projects</h2>
        <p className='text-center w-full md:w-[60%] mb-6'>
          Here are some of my recent projects. Click on the links to view them.
        </p>

        <div className='flex flex-col lg:flex-row gap-8 w-full max-w-6xl'>
          <div className='w-full lg:w-[45%] bg-gray-800 p-6 rounded-lg shadow-lg' data-aos="zoom-in">
            <h3 className='text-xl font-semibold text-[#00df9a]'>Project 1: Portfolio Website</h3>
            <p className='text-white mt-2'>A responsive portfolio website showcasing my skills and projects.</p>
            <img
              src={studevent}
              alt="Project 1"
              className='mt-4 w-full h-auto rounded-lg shadow-md'
            />
            <p className='text-white mt-4 text-justify text-sm leading-relaxed'>
              The event approval procedure is significantly enhanced by the combination of technology.
              "StudEvent" eliminates the need for taxing human effort and cumbersome recordkeeping...
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

      {/* About Me Section */}
      <section id="about" className='py-16 flex flex-col items-center mt-6' data-aos="fade-right">
        <h2 className='text-3xl font-bold mb-6 text-white'>About Me</h2>
        <p className='text-center w-[60%] text-white'>
        I'm a passionate full-stack developer with a strong focus on building responsive, high-performance web applications using modern technologies. 
        On the frontend, I specialize in frameworks like <strong>React</strong>, <strong>Vue.js</strong>, and <strong>Angular</strong>, 
        along with styling tools like <strong>Tailwind CSS</strong> and <strong>CSS3</strong>, to create clean, intuitive user interfaces. 
        On the backend, I work with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> to develop scalable APIs and ensure smooth data flow. 
        <br /><br />
        I follow a structured, goal-oriented approach to managing my projects—starting from wireframing and component breakdown to version control with <strong>GitHub</strong>, and continuous testing. 
        I emphasize clean code, modular architecture, and teamwork through Agile practices, ensuring timely delivery and maintainable codebases. 
        Whether it's building from scratch or improving existing systems, I strive to bring both technical precision and thoughtful user experience into every project.
        </p>

      </section>

      {/* Contact Section */}
      <section id="contact" className='py-16 flex flex-col items-center w-[60%] max-w-screen-xl mx-auto' data-aos="fade-left">
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

      {/* Social Links */}
      <div className='mt-10 mb-4 text-white text-center w-[90%] max-w-screen-xl flex justify-center gap-6' data-aos="zoom-in">
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
  );
};

export default Homepage;
