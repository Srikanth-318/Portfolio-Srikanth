import React from 'react';
import { FaHtml5, FaJava, FaCss3, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";

const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === "down" ? -40 : 0,
            x: direction === 'left' ? 40 : direction === "right" ? -40 : 0,
            opacity: 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    };
};

const Skills = () => {
    const skills = [
        { skill: "HTML", icon: FaHtml5 },
        { skill: "CSS", icon: FaCss3 },
        { skill: "JavaScript", icon: IoLogoJavascript },
        { skill: "ReactJS", icon: FaReact },
        { skill: "Java", icon: FaJava },
        { skill: "TailwindCSS", icon: RiTailwindCssFill },
        { skill: "GitHub", icon: FaGithub },
    ];

    return (
        <div className="container mx-auto px-5 sm:px-8 md:px-16 pt-20 md:pt-28" id="skills">
            <h1 className="text-2xl  lg:text-3xl  font-semibold flex items-end gap-3">
				        <GrTechnology className="text-gray-500 mb-1" />
				            Skills
				        <span className="text-gray-500 text-lg sm:text-2xl"> & Technologies</span>
			      </h1>
            <p className='  text-gray-200 mt-5 text-start leading-7'>
                I not only work with these technologies but 
                excel in using them with best practices to deliver high-quality results.
                I have been working with all these skills to build my portfolio projects.Proficient in{" "}
                 <span className="font-bold ">React JS</span>,{" "}
				 <span className="font-bold ">JavaScript</span>, and modern frontend technologies.
            </p>
            <div className='flex flex-wrap mt-10 justify-center gap-10'>
                {skills.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className='flex flex-col items-center transition-transform duration-500 hover:translate-y-2'
                        >
                            <div className='bg-white text-cyan-400 h-[80px] w-[80px] flex items-center justify-center rounded-full hover:text-white hover:bg-orange-400 hover:scale-105 transform transition-all duration-500 text-5xl border border-cyan-500 hover:border-white-500'>
                                <IconComponent />
                            </div>
                            <p className='text-gray-200 font-bold mt-2'>{item.skill}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;