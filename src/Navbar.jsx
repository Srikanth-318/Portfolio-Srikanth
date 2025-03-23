import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiBars3CenterLeft, HiMiniHome } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRightLong, FaUser } from "react-icons/fa6";

const Navbar = ({ onHireMeClick }) => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleScrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
    setToggleSideBar(false);
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } 

    setToggleSideBar(false);
  };

  const handleScrollToContacts = () => {
    const projectsSection = document.getElementById("contacts");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } 

    setToggleSideBar(false);
  };

  const navLinks = [
    { linkTitle: "Projects", action: handleScrollToProjects },
    { linkTitle: "Skills", action: handleScrollToSkills },
    { linkTitle: "Contacts", action: handleScrollToContacts },
  ];

  return (
    <header>
      <nav className="relative bg-[#1d2430] text-white font-semibold flex items-center justify-between px-8 top-0 z-50">
       
        <button
          className="flex md:hidden items-center gap-4 cursor-pointer"
          onClick={() => setToggleSideBar(!toggleSideBar)}
          aria-label="Toggle Sidebar"
        >
          {toggleSideBar ? (
            <HiBars3CenterLeft className="text-4xl text-red-400" />
          ) : (
            <RxHamburgerMenu className="text-3xl" />
          )}
        </button>

        
        {toggleSideBar && (
          <div className="md:hidden absolute top-16 left-0 p-5 pt-1 pr-8 bg-[#1D2430] text-gray-400 rounded-br-2xl shadow-2xl border-gray-500 border-l-0 border-t-0 border-2">
            <div className="flex flex-col items-start">
              <Link
                to="/"
                className={`py-3 pl-4 flex items-center gap-3 mb-3  w-[100%] border border-gray-600 border-l-0 border-t-0 border-r-0  ${activeLink === "/" ? "" : ""}`}
                onClick={() => setToggleSideBar(false)}
              >
                <HiMiniHome className="text-xl" />
                Home
              </Link>

              {navLinks.map(({ linkTitle, link, action }, index) =>
                action ? (
                  <button
                    key={index}
                    onClick={action}
                    className="capitalize py-3 pl-4 text-left w-[100%] hover:underline hover:underline-offset-8 hover:decoration-yellow-400"
                  >
                    {linkTitle}
                  </button>
                ) : (
                  <Link
                    key={index}
                    to={link}
                    className={`capitalize py-3 pl-4  w-[100%] ${
                      activeLink.startsWith(link) ? "underline underline-offset-8 decoration-yellow-400" : ""
                    } hover:underline hover:underline-offset-8 hover:decoration-yellow-400`}
                    onClick={() => setToggleSideBar(false)}
                  >
                    {linkTitle}
                  </Link>
                )
              )}

              <Link
                to="/about_me"
                className={`capitalize py-3 pl-4 flex items-center border border-gray-600  border-b-0 border-r-0 border-l-0 gap-3 ${
                  activeLink.startsWith("/about_me") ? "underline underline-offset-8 decoration-yellow-400" : ""
                } hover:underline hover:underline-offset-8 hover:decoration-yellow-400`}
                onClick={() => setToggleSideBar(false)}
              >
                <FaUser className="text-lg" />
                About Me
              </Link>
            </div>
          </div>
        )}

        
        <div className="hidden md:flex gap-6">
          <Link
            to="/"
            className={`py-5 ${
              activeLink === "/" ? "text-yellow-400" : "text-gray-400"
            } hover:underline hover:underline-offset-8 hover:decoration-gray-400`}
          >
            Home
          </Link>

          {navLinks.map(({ linkTitle, link, action }, index) =>
            action ? (
              <button key={index} onClick={action} className="py-5 text-gray-400 hover:underline hover:underline-offset-8 hover:decoration-yellow-400">
                {linkTitle}
              </button>
            ) : (
              <Link
                key={index}
                to={link}
                className={`py-5 ${
                  activeLink.startsWith(link) ? "underline underline-offset-8 decoration-yellow-400" : "text-gray-400"
                } hover:underline hover:underline-offset-8 hover:decoration-yellow-400`}
              >
                {linkTitle}
              </Link>
            )
          )}
        </div>

        
        <button onClick={onHireMeClick} className="flex items-center gap-3 py-5">
          Hire Me <FaArrowRightLong className="rotate-180 text-2xl" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;