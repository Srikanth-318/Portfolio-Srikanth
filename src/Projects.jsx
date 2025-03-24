import React, { Suspense, useContext } from "react";
import { MyContext } from "./main";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";
import PreviewFallback from "./PreviewFallback";


import ProjectPreview from "./ProjectPreview";

function Projects() {
    const { 
        ytClone,
        moviesearch,
        weatherapp,
        epicnews,
        portfolio,

    } = useContext(MyContext);

    const sideProjects = [
        {
            video: ytClone,
            projectSummary: "YouTube Clone | React",
            projectTitle: "YouTube Clone",
            projectType: "React + Firebase",
            technologies: "React JS, Router, Tailwind CSS, & Redux",
            gitHubUrl: "https://github.com/Srikanth-318/yt-clone",
            projectUrl: "https://yt-clone-three-ochre.vercel.app/",
        },
        {
            video: epicnews,
            projectSummary: "Epic-News | Preview",
            projectTitle: "Epic-News",
            projectType: "React + API",
            technologies: "React JS",
            gitHubUrl: "https://github.com/Srikanth-318/epic-news",
            projectUrl: "https://epic-news-nine.vercel.app",
        },

       
    ];

    const sideProjectsRow2 = [

        {
            video: weatherapp,
            projectSummary: "Weather-App | Preview",
            projectTitle: "Weather-App",
            //projectType: "Spring-Boot",
            //technologies: "Java,HTML,CSS",
            gitHubUrl: "https://github.com/Srikanth-318/weather-app",
            projectUrl: "https://weathers-app-check.up.railway.app/",
        },

        {
            video: portfolio,
            projectSummary: "portfolio | Preview",
            projectTitle: "portfolio",
            //projectType: "Spring-Boot",
            //technologies: "Java,HTML,CSS",
            gitHubUrl: "https://github.com/Srikanth-318/Portfolio-Srikanth",
            projectUrl: "https://weathers-app.up.railway.app",
        },

        

        {
            video: moviesearch,
            projectSummary: "Movie-Search | Preview",
            projectTitle: "Movie-Search",
            //projectType: "React, Tailwindcss",
            //technologies: "React JS",
            gitHubUrl: "https://github.com/Srikanth-318/movie-search",
            projectUrl: "https://movie-search-chi-six.vercel.app",
        },
    ];

    return (
        <div className="container mx-auto  px-5 sm:px-8 md:px-16 pt-20 md:pt-28 " id="projects">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold flex items-end gap-3">
                    <MdDashboard className="text-gray-500 mb-1" /> Projects
                </h1>
                <Link to="/all_projects" className="md:text-xl underline underline-offset-8 decoration-[#F6CD0A] flex items-center gap-5">
                    All Projects <FaCircleArrowLeft className="text-2xl md:text-3xl text-[#F6CD0A] animate-pulse" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                {sideProjects.map((project, index) => (
                    <Suspense fallback={<PreviewFallback />} key={index}>
                        <ProjectPreview {...project} />
                    </Suspense>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {sideProjectsRow2.map((project, index) => (
                    <Suspense fallback={<PreviewFallback />} key={index}>
                        <ProjectPreview {...project} />
                    </Suspense>
                ))}
            </div>
        </div>
    );
}

export default Projects;