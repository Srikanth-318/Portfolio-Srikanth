import React from 'react';
import SeconNavbar from "./SeconNavbar";
import TapToTop from "./TapToTop";
import Footer from "./Footer";

import { MdDashboard } from "react-icons/md";

import SideProjects from "./SideProjects";
import MiniProjects from "./MiniProjects";

const AllProjects = () => {
  return (
    <>
			<SeconNavbar />

			<div className="container mx-auto px-5 lg:px-24 py-5 min-h-[100vh] pt-10 md:pt-20 ">
				<div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left flex items-end gap-3 ">
					<MdDashboard className="text-gray-500 mb-1" />
					All Projects
				</div>
				<hr className="mt-4 opacity-10" />

				<SideProjects />
				<MiniProjects />
				

				<TapToTop />
			</div>
			<Footer />
		</>
  )
}

export default AllProjects;