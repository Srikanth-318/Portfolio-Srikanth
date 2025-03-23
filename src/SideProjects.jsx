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
	} = useContext(MyContext);

    const sideProjectsDetailsRow1 = [

        {
            video: ytClone,
            projectSummary: "YouTube Clone | React",
            projectTitle: "YouTube Clone",
            projectType: "React + Firebase",
            technologies: "React JS, Router, Tailwind CSS, & Redux",
            gitHubUrl: "https://github.com/Velmurugan-12/youtube_clone",
            projectUrl: "https://youtube-clone-six-black.vercel.app",
        },

        {
            video: epicnews,
            projectSummary: "Epic-News | Preview",
            projectTitle: "Epic-News",
            projectType: "React + API",
            technologies: "React JS",
            gitHubUrl: "https://github.com/Velmurugan-12/epic-news",
            projectUrl: "https://epic-news.vercel.app",
        },

		

    ];


	const sideProjectsRow2 = [

        {
            video: weatherapp,
            projectSummary: "Weather-App | Preview",
            projectTitle: "Weather-App",
            projectType: "Spring-Boot",
            technologies: "Java,HTML,CSS",
            gitHubUrl: "https://github.com/Velmurugan-12/weather-app",
            projectUrl: "https://weathers-app.up.railway.app",
        },

        
        {
            video: moviesearch,
            projectSummary: "Movie-Search | Preview",
            projectTitle: "Movie-Search",
            projectType: "React, javaScript",
            technologies: "React JS",
            gitHubUrl: "https://github.com/Velmurugan-12/movie-search",
            projectUrl: "https://movie-search-eight-blue.vercel.app",
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