import React from 'react';

import {  PiPhoneCallFill } from 'react-icons/pi';
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";


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


const Contact = () => {
  return (
   <div className='container mx-auto px-5 sm:px-8 md:px-16 pt-20 md:pt-28' id="contacts">
            <h1 className='text-2xl md:text-3xl font-semibold flex items-end gap-3 text-white'> 
                    <PiPhoneCallFill className='text-gray-500 mb-1 scale-110'/>
                        Contact Me
            </h1>
   
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 leading-7 mt-7'>
                        <ContactLinks link="mailto:mvelmurugan2192@gmail.com">
                                <MdEmail className="text-2xl text-purple-500"/>
                                    <div>Send a mail</div>
                        </ContactLinks>
   
                        <ContactLinks link="https://www.linkedin.com/in/srikanth-s-4aa019248" >
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
   
  )
}

export default Contact;