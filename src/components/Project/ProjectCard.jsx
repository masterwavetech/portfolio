import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="card__side">
      <div className="card-top">
        <figure className="card__img">
          <img className="card__picture" src={props.img} alt="oville" />
        </figure>
      </div>
      <div className="flex flex-col">
        <h4 className="text-[24px] text-center pt-4 text-white font-bold sm:text-[24px]">
          Portfolio
        </h4>
        <div className="card__lists">
          <div className="card__lists__text">dfdf</div>
          <div className="card__lists__text">dfdf</div>
        </div>
        <div className="card__links">
          <div className="card__demo">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="/">
                Demo
              </a>
            </div>
          </div>
          <div className="card__github">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="/">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="card__lang">
          <figure className="card__lang-fig">
            <img
              className="card__lang-img"
              src="https://cdn.iconscout.com/icon/free/png-512/node-js-1-1174935.png"
              alt=""
            />
            <figcaption className="card__figcaption">Node</figcaption>
          </figure>
          <figure className="card__lang-fig">
            <img
              className="card__lang-img"
              src="https://olumorin-samuel.web.app/assets/images/icons/MongoDB.jpeg"
              alt=""
            />
            <figcaption className="card__figcaption">MongoDB</figcaption>
          </figure>
          <figure className="card__lang-fig">
            <img
              className="card__lang-img"
              src="https://olumorin-samuel.web.app/assets/images/icons/React.webp"
              alt=""
            />
            <figcaption className="card__figcaption">React</figcaption>
          </figure>
          <figure className="card__lang-fig">
            <img
              className="card__lang-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvlAM2kg5H1ufCzBW7GjzCo77Ys_neYxOHQ&amp;usqp=CAU"
              alt=""
            />
            <figcaption className="card__figcaption">Express</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
