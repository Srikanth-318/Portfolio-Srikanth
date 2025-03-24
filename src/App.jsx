import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import HireMe from "./HireMe";
import Skills from "./Skills";
import Projects from "./Projects";
import AllProjects from "./AllProjects";
import Contact from "./Contact";
 import Footer from "./Footer";
 import TapToTop from "./TapToTop";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HeroSection />
              <Projects />
              <Skills />
              <Contact/>
              <HireMe />
              <Footer/>
              <TapToTop/>
            </Layout>

          }
        />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/all_projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;