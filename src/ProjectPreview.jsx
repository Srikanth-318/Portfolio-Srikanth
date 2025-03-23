
import { FaCode } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";


function ProjectPreview({
	video,
	projectSummary,
	projectTitle,
	projectType,
	technologies,
	gitHubUrl,
	projectUrl,
}) {
	
	return (
		<div className="group relative rounded-xl grid-rows-2 overflow-hidden cursor-pointer">
			<video src={video} autoPlay muted loop>
				{projectSummary}
			</video>

			<div className="absolute top-0 w-full h-full backdrop-blur hidden group-hover:grid place-items-center transition">
				<div className="flex flex-col items-center gap-8 lg:gap-4 text-center">
					<div className="flex items-center flex-col">
						<div className="bg-[#F6CD0A] text-xl lg:text-2xl font-semibold py-3 px-10 md:px-5 rounded-xl inline-block text-gray-800  border-4 border-gray-600">
							{projectTitle}
						</div>
						<div
							className={
								projectType
									? "hidden lg:block bg-[#121723] text-gray-300 w-fit py-1 px-5 rounded-bl-xl rounded-br-xl"
									: "hidden"
							}
						>
							{projectType}
						</div>
					</div>
					<div
						className={
							technologies
								? "hidden lg:block bg-[#121723] text-gray-300 w-fit py-3 px-7 rounded-lg"
								: "hidden"
						}
					>
						{technologies}
					</div>

					<div className="flex flex-wrap items-center justify-center gap-3">
						<a
							href={gitHubUrl}
							target="blank"
							className="bg-[#121723]  text-gray-300  py-2 w-[100px] rounded-lg flex items-center justify-center gap-2 hover:outline hover:outline-yellow-500"
						>
							<FaCode className="text-yellow-400" />
							Code
						</a>
						<a
							href={projectUrl}
							target="blank"
							className="bg-[#121723] text-gray-300  py-2 w-[100px] rounded-lg flex items-center justify-center gap-2 hover:outline hover:outline-yellow-500 "
						>
							<TfiWorld className="text-yellow-400" />
							Live
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectPreview;