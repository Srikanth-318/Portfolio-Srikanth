import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const hireMeRef = useRef(null);
  const location = useLocation();

  const scrollToHireMe = () => {
    if (hireMeRef.current) {
      const topOffset = hireMeRef.current.offsetTop - 80; 
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {location.pathname !== "/about_me" && <Navbar onHireMeClick={scrollToHireMe} />}
      <div>{children}</div>
      
      <div ref={hireMeRef} id="hireMeSection"></div>
    </>
  );
};

export default Layout;