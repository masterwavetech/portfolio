import React from "react";
import logo from "../../img/about.jpg";
import pic from "../../img/masterwave.png";
import resume from "./Audu's Resume.pdf";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative mt-20 dark:bg-slate-900" id="About">
      <div className="container flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-1/2 relative">
          <div className="img-border">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="w-full mt-12 lg:w-1/2 lg:mt-0  relative">
          <div className="w-full h-full flex flex-col gap-3 ">
            <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
            <h1 className="text-3xl font-bold dark:text-white">
              #1 Digital Solution With &nbsp;
              <span className="text-indigo-600">2 Years</span> Of Experience
            </h1>
            <p className="text-gray-400 leading-7">
              with over 2 years of experience specialises in developing
              websites, e-commerce solutions, web/online applications, mobile
              app development and SEO that are distinct for their superior
              information structure, quality design, streamlined functionality
              and ease of use.
            </p>
            <p className="text-gray-400 leading-7">
              Proficient in developing databases, creating user interface,
              writing and testing codes, troubleshooting simple / complex issues
              and implementing new feature based on user feedback.
            </p>
            <div className="flex items-center">
              <img className="w-14 h-14 rounded-half" src={pic} alt="" />
              <div className="pl-4">
                <h6 className="font-semibold text-base dark:text-white">
                  Audu Goodness
                </h6>
                <small className="text-sm text-gray-400">
                  SEO &amp; Developer
                </small>
              </div>
            </div>

            <Link
              to={resume}
              target="_blank"
              className="text-white bg-indigo-600 rounded-xl text-center cursor-pointer text-base border border-solid border-indigo-600 font-medium py-3 px-12 w-10/12 md:w-1/2"
              download
            >
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
