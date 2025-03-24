import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import PreviewFallback from "./PreviewFallback";
import { BiSubdirectoryRight } from "react-icons/bi";
import { MyContext } from "./main";
import ProjectPreviewSM from "./ProjectPreviewSM";

const ProjectPreview = lazy(() => import("./ProjectPreview"));

const MiniProjects = () => {

const {
    loginform,
	emojigenerator,
	imagesearch,
	qrcode,
} = useContext(MyContext);
const [screenWidth, setScreenWidth] = useState(window.innerWidth);

const miniProjectsDetails = [
    {
        video: loginform,
        projectSummary: "Login-form | Preview",
        projectTitle: "LoginForm",
        gitHubUrl: "https://github.com/Velmurugan-12/login-form",
        projectUrl: "https://login-form-register-eight.vercel.app",
    },

	{
        video: emojigenerator,
        projectSummary: "Emoji-Generator | Preview",
        projectTitle: "Emoji-Generator",
        gitHubUrl: "https://github.com/Velmurugan-12/emoji-generator",
        projectUrl: "https://emoji-generator-rose.vercel.app",
    },
	{
		video: imagesearch,
		projectSummary: "Image-Search | Preview",
		projectTitle: "Image-Search",
		//projectType: "React, Tailwindcss",
		//technologies: "React JS",
		gitHubUrl: "https://github.com/Velmurugan-12/search-image",
		projectUrl: "https://search-image-pi.vercel.app",
	},

	{
		video: qrcode,
		projectSummary: "Qr-Code Generator | Preview",
		projectTitle: "Qr-Code Generator",
		//projectType: "React, Tailwindcss",
		//technologies: "React JS",
		gitHubUrl: "https://github.com/Velmurugan-12/qr-code",
		projectUrl: "https://qr-code-nine-indol-67.vercel.app",
	},
]

  return (
    <>
			<div className="mt-24">
				<h2 className="text-2xl text-gray-200  flex items-center gap-3">
					<BiSubdirectoryRight className="text-4xl text-gray-500 " />
					Mini Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3  gap-10 mt-8">
					{miniProjectsDetails.map((project, index) => (
						<Suspense fallback={<PreviewFallback />} key={index}>
							{screenWidth < 768 ? (
								<ProjectPreviewSM
									video={project.video}
									projectSummary={project.projectSummary}
									projectTitle={project.projectTitle}
									gitHubUrl={project.gitHubUrl}
									projectUrl={project.projectUrl}
								/>
							) : (
								<ProjectPreview
									video={project.video}
									projectSummary={project.projectSummary}
									projectTitle={project.projectTitle}
									gitHubUrl={project.gitHubUrl}
									projectUrl={project.projectUrl}
								/>
							)}
						</Suspense>
					))}
				</div>
			</div>
		</>
  );
};

export default MiniProjects;