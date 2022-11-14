import React from "react";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import project1 from "../../img/project1.webp";
import project2 from "../../img/project2.webp";
import project3 from "../../img/project3.webp";
import project4 from "../../img/project4.webp";

const Project = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative mt-20 dark:bg-slate-900" id="Project">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="section-title dark:bg-slate-900 dark:text-indigo-900">
          project
        </h1>
        <h1 className="text-2xl  text-cynan text-center font-bold dark:text-white capitalize">
          Learn More About My Complete Projects
        </h1>
      </div>
      <div className="slide container py-9 dark:bg-slate-900">
        <Slider {...settings}>
          <ProjectCard img={project1} />
          <ProjectCard img={project2} />
          <ProjectCard img={project3} />
          <ProjectCard img={project4} />
          <ProjectCard img={project2} />
          <ProjectCard img={project4} />
        </Slider>
      </div>
    </div>
  );
};

export default Project;
