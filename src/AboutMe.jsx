import React from 'react';
import { FaExternalLinkAlt, FaUser } from 'react-icons/fa';
import { PiHandWavingFill, PiPhoneCallFill } from 'react-icons/pi';
import { HiComputerDesktop } from 'react-icons/hi2';
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { Link } from 'react-router-dom';
import SeconNavbar from './SeconNavbar';
import profile from './assets/profile.jpg';
import Footer from './Footer';
import TapToTop from './TapToTop';


const ContactLinks = ({ link, title, children }) => (
    <a 
        href={link} 
        target='_blank' 
        rel='noopener noreferrer' 
        className='flex items-center gap-3 p-4 border border-gray-700 rounded-lg hover:border-gray-500 transition text-gray-300'
    >
        {children}
        <span className='text-sm'>{title}</span>
    </a>
);

const AboutMe = () => {
    return (
        <div>
            <SeconNavbar />
            <div className='container mx-auto px-5 lg:px-24 py-5 min-h-screen pt-10 md:pt-20' id='hire_me'>

                
                <div className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left flex items-end gap-3'>
                    <FaUser className="text-gray-500 mb-1" />
                    About Me
                </div>

                <div className='mt-14 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20'>

                    
                    <div className='relative lg:h-[calc(140vh-6rem)]'>
                        <img
                            src={profile}
                            alt='srikanth'
                            className='w-60 lg:w-72 h-60 lg:h-72 rounded-full object-cover saturate-[1.1] filter contrast-[1.1] sticky lg:top-24'
                        />
                    </div>

                    
                    <div className='text-gray-400 leading-7 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:w-2/3'>
                        <p className="text-gray-400 text-left leading-7">
                            <span className='text-2xl text-gray-300'>
                                <PiHandWavingFill className="inline mb-1 rotate-12" />{" "}
                                Hey there,
                            </span>{" "}
                            I'm Srikanth, a Java full-stack developer from Chennai, India.  
                            I hold a {" "}<span className='underline underline-offset-4 font-semibold'>B.E in Computer Science</span>{" "} 
                            from PSNA College of Engineering and Technology.
                        </p>

                        <p className="mt-4 text-left">
                            I thrive on frontend technologies, particularly{" "} 
                            <span className="underline underline-offset-4 font-semibold">Java,JavaScript & React.js</span>.  
                            Passionate about building scalable and efficient web applications.
                        </p>

                        
                        <div className='container mt-12'>
                            <h1 className='text-2xl md:text-3xl font-semibold flex items-end gap-3 text-white'>
                                <HiComputerDesktop className='text-gray-500 mb-1' /> 
                                What I Do?
                            </h1>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 leading-7 mt-7'>
                                <div className='border border-gray-700 p-6 md:p-10 rounded-lg hover:border-gray-500 transition text-left'>
                                    <div className='text-lg text-white font-semibold'>
                                        Side Projects:
                                    </div>
                                    <div className='text-gray-400 mt-2'>
                                        I regularly undertake side projects to maintain coding consistency & explore new concepts. You can explore my portfolio of all projects in the dedicated section.
                                    </div>
                                    <div className='flex items-center text-gray-300 text-xl mt-4 transition'>
                                        <Link
                                            to="/all_projects"
                                            className="text-gray-300 text-xl flex items-center"
                                        >
                                            <FaExternalLinkAlt className='animate-pulse ml-3 m-3'/>
                                            <small>My Projects</small>
                                        </Link>
                                    </div>
                                </div>

                                <div className='border border-gray-700 p-6 md:p-10 rounded-lg hover:border-gray-500 transition text-left'>
                                    <div className='text-lg text-white font-semibold'>
                                        Continuous Learning:
                                    </div>
                                    <div className="text-gray-400 mt-2">
                                        I'm driven to explore new frontend technologies, keeping my coding skills current. Additionally, I'm eager to expand into full-stack development, enriching my skill set further.
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className='container mt-16'>
                            <h1 className='text-2xl md:text-3xl font-semibold flex items-end gap-3 text-white'> 
                                <PiPhoneCallFill className='text-gray-500 mb-1 scale-110'/>
                                Contact Me
                            </h1>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 leading-7 mt-7'>
                                <ContactLinks link="mailto:smsri2553@gmail.com">
                                    <MdEmail className="text-2xl text-purple-500"/>
                                    <div>Send a mail</div>
                                </ContactLinks>

                                <ContactLinks link="https://www.linkedin.com/in/velmurugan-m-33351426a" >
                                    <IoLogoLinkedin className="text-2xl text-blue-500"/>
                                    LinkedIn
                                </ContactLinks>

                                <ContactLinks  >
                                    <TbPhoneCall className="text-2xl text-green-500"/>
                                        7010372443
                                </ContactLinks>

                                
                                <div className='flex items-center gap-3 p-4 border border-gray-700 rounded-lg text-gray-300'>
                                    <MdLocationOn className="text-2xl text-red-500"/>
                                    <span className='text-sm'>Chennai, Tamil Nadu</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <TapToTop />
            <Footer />
        </div>
    );
};

export default AboutMe;