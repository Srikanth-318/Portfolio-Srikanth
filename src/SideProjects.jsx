import React, { lazy, Suspense, useContext } from "react";
import { MyContext } from "./main";
import PreviewFallback from "./PreviewFallback";
import { BiSubdirectoryRight } from "react-icons/bi";

const ProjectPreview = lazy(() => import("./ProjectPreview"));

const SideProjects = () => {

    const {
		ytClone,
		moviesearch,
		weatherapp,
        epicnews,
        portfolio,
	} = useContext(MyContext);

    const sideProjectsDetailsRow1 = [

        {
            video: ytClone,
            projectSummary: "YouTube Clone | React",
            projectTitle: "YouTube Clone",
            projectType: "React + Firebase",
            technologies: "React JS, Router, Tailwind CSS, & Redux",
            gitHubUrl: "https://github.com/Srikanth-318/yt-clone",
            projectUrl: "https://yt-clone-three-ochre.vercel.app",
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
            projectType: "Spring-Boot",
            technologies: "Java,HTML,CSS",
            gitHubUrl: "https://github.com/Srikanth-318/weather-app",
            projectUrl: "https://weathers-app-check.up.railway.app",
        },

        
        {
            video: moviesearch,
            projectSummary: "Movie-Search | Preview",
            projectTitle: "Movie-Search",
            projectType: "React, javaScript",
            technologies: "React JS",
            gitHubUrl: "https://github.com/Srikanth-318/movie-search",
            projectUrl: "https://movie-search-chi-six.vercel.app",
        },

        {
            video: portfolio,
            projectSummary: "portfolio | Preview",
            projectTitle: "portfolio",
            //projectType: "Javascript",
            //technologies: "Java,HTML,CSS",
            gitHubUrl: "https://github.com/Srikanth-318/Portfolio-Srikanth",
            projectUrl: "https://weathers-app.up.railway.app/",
        },
    ];

  return (
    <div className="mt-24">

			<h2 className="text-2xl text-gray-200 flex items-center gap-3 ">
				<BiSubdirectoryRight className="text-4xl text-gray-500 " />
				Side Projects
			</h2>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-12">
				{sideProjectsDetailsRow1.map((project, index) => (
					<Suspense fallback={<PreviewFallback />} key={index}>
						<ProjectPreview
							video={project.video}
							projectSummary={project.projectSummary}
							projectTitle={project.projectTitle}
							projectType={project.projectType}
							technologies={project.technologies}
							gitHubUrl={project.gitHubUrl}
							projectUrl={project.projectUrl}
						/>
					</Suspense>
				))}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
				{sideProjectsRow2.map((project, index) => (
					<Suspense fallback={<PreviewFallback />} key={index}>
						<ProjectPreview
							video={project.video}
							projectSummary={project.projectSummary}
							projectTitle={project.projectTitle}
							gitHubUrl={project.gitHubUrl}
							projectUrl={project.projectUrl}
						/>
					</Suspense>
				))}
			</div>
    
    </div>
  )
}

export default SideProjects;