import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Intro from "../components/Intro/Intro.jsx";
import About from "../components/About/About.jsx";
import Service from "../components/Services/Service.jsx";
import Ferature from "../components/Feature/Ferature.jsx";
import Project from "../components/Project/Project.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GoToTop from "../components/GoToTop/GoToTop.jsx";

const Homepage = () => {
  return (
    <div className="font-nunito dark:bg-slate-900">
      <div className="p-4 sm:p-8">
        <Navbar />
        <Intro />
        <About />
        <Service />
        <Ferature />
        <Project />
        <Contact />
      </div>
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Homepage;
