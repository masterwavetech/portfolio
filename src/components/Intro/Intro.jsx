import React from "react";
import pic from "../../img/hero.png";
import Typed from "react-typed";

const Intro = () => {
  return (
    <section className="p-4 sm:p-8 relative dark:bg-slate-900">
      <div className="container flex flex-col lg:flex-row overflow-hidden">
        <div className="w-full flex flex-col gap-4 mt-20 lg:w-1/2">
          <h3 className="font-thin tracking-wide dark:text-white">
            WELCOME TO MY WORLD
          </h3>
          <h1 className="text-3xl font-bold text-indigo-900 md:text-4xl">
            Hi, I'm Audu Goodness
          </h1>
          <h2 className="text-depink text-3xl md:text-5xl font-bold">
            <Typed
              strings={[
                "A Web Developer",
                "A Web3 Engineer",
                "A SEO Developer",
              ]}
              typeSpeed={80}
              backSpeed={90}
              loop
            ></Typed>
          </h2>

          <p className="text-gray-400 leading-7">
            MERN stack web developer with 2 year experience building secure,
            scalable, functional and efficient web application. I'm passionate
            about User Experience, Responsive Design, Accessibility and
            Optimization.
          </p>
          <a
            className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
            href="#Contact"
          >
            Hire Me
          </a>
          <div>
            <h4 className="font-bold tracking-widest text-cynan text-base mt-4 dark:text-white">
              Connect with me
            </h4>

            <div className="relative m-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/people/masterwavetech/100087044030356/"
              >
                <button className="btn btn_shadow dark:shadow-none">
                  <i className="fab fa-facebook-f"></i>
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/masterwavetech/"
              >
                <button className="btn btn_shadow dark:shadow-none">
                  <i className="fab fa-instagram"></i>
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/masterwavetech/"
              >
                <button className="btn btn_shadow dark:shadow-none">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/masterwavetech"
              >
                <button className="btn btn_shadow dark:shadow-none">
                  <i className="fab fa-twitter"></i>
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/masterwavetech"
              >
                <button className="btn btn_shadow dark:shadow-none">
                  <i className="fab fa-github"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-20 relative">
          <div className="bg-btn_shadow shadow-btn_shadow rounded-xl w-full h-100 mx-auto md:h-101 lg:w-101 lg:float-right overflow-hidden relative dark:shadow-none">
            <img
              className="absolute top-0 left-0 right-0 mx-auto w-100 h-100 sm:h-auto"
              src={pic}
              alt="Masterwave"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
