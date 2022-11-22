import React from "react";

const ProjectCard = ({ item }) => {
  return (
    <div className="w-full mr-[24px] sm:w-[355px] ">
      <div className="project-item">
        <div className="relative mb-[24px]">
          <img
            className="projct-image"
            src="https://i.ibb.co/3NDGB6v/project-img.jpg"
            alt=""
          />
          <div className="project-link">
            <a href="/">
              <i className="fa fa-eye" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <h6 className="dark:text-white">Portfolio</h6>
        <p className="text-black dark:text-white">
          Digital agency website design and development
        </p>
        <div className="project-lang">
          <figure className="card__lang-fig">
            <img
              className="card__lang-img"
              src="https://i.ibb.co/gSzcK5d/png-transparent-green-grass-mongodb-database-documentoriented-database-dashboard-nosql-bson-javascri.png"
              alt=""
            />
            <figcaption className="card__figcaption  text-black dark:text-white">
              Mongo
            </figcaption>
          </figure>
          <figure className="card__lang-fig">
            <img
              className="card__lang-img"
              src="https://i.ibb.co/PjVKf0q/136-1363736-express-js-icon-png-transparent-png.jpg"
              alt=""
            />
            <figcaption className="card__figcaption  text-black dark:text-white">
              Express
            </figcaption>
          </figure>
          <figure className="card__lang-fig">
            <img
              className="card__lang-img"
              src="https://i.ibb.co/h2rqc5h/React.webp"
              alt=""
            />
            <figcaption className="card__figcaption  text-black dark:text-white">
              React
            </figcaption>
          </figure>
          <figure className="card__lang-fig">
            <img
              className="card__lang-img"
              src="https://i.ibb.co/ZBmSJ5P/node-js-1-1174935.png"
              alt=""
            />
            <figcaption className="card__figcaption  text-black dark:text-white">
              Node
            </figcaption>
          </figure>
          <figure className="card__lang-fig">
            <img
              className="card__lang-img"
              src="https://i.ibb.co/PjVKf0q/136-1363736-express-js-icon-png-transparent-png.jpg"
              alt=""
            />
            <figcaption className="card__figcaption  text-black dark:text-white">
              Express
            </figcaption>
          </figure>
          <figure className="card__lang-fig">
            <img
              className="card__lang-img"
              src="https://i.ibb.co/tZ6srKR/png-transparent-tailwind-css-hd-logo.png"
              alt=""
            />
            <figcaption className="card__figcaption  text-black dark:text-white">
              Tailwind
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
