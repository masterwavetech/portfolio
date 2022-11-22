import React from "react";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";

const Project = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,

    customPaging: function (i) {
      return (
        <div className="project-carousel">
          <div className="project-dot text-black dark:text-white ml-2">
            {`0${i + 1}`}
          </div>
        </div>
      );
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
    <section
      className="p-4 sm:p-8 relative mt-20 dark:bg-slate-900"
      id="Project"
    >
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
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Slider>
      </div>
    </section>
  );
};

export default Project;
