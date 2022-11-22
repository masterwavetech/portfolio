import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer className=" dark:bg-slate-900">
        <div className="container">
          <div className="flex flex-col ml-6 sm:ml-0">
            <h4 className="font-normal dark:text-white mb-4 text-xl">
              Address
            </h4>
            <p className="mb-3 text-cynan text-[16px] font-normal leading-4 dark:text-gray-400">
              <i className="fa fa-map-marker mr-4" aria-hidden="true"></i>No
              Physical Location
            </p>
            <p className="mb-3 text-cynan text-[16px] font-normal leading-4 dark:text-gray-400">
              <i className="fa fa-phone mr-4" aria-hidden="true"></i>
              +2348152966334
            </p>
            <p className="mb-3 text-cynan text-[16px] font-normal leading-4 dark:text-gray-400">
              <i className="fa fa-envelope-o mr-4" aria-hidden="true"></i>
              masterwavetech@gmail.com
            </p>
            <div className="flex flex-row gap-1">
              <div className="icon-circle bg-general">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/people/masterwavetech/100087044030356/"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
              <div className="icon-circle bg-general">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/masterwavetech/"
                >
                  <i className="fab fa-instagram text-cynan"></i>
                </a>
              </div>
              <div className="icon-circle bg-general">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/masterwavetech/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="icon-circle bg-general">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/masterwavetech"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="icon-circle bg-general">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/masterwavetech"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-6 sm:ml-0">
            <h4 className="font-normal dark:text-white mb-3 text-xl">
              Quick Links
            </h4>

            <Link
              to="#About"
              smooth
              className="footer-link text-gray-400 hover:text-red-500 mr-4 dark:hover:hover:text-red-500 dark:text-gray-400"
            >
              About
            </Link>
            <Link
              to="#Service"
              smooth
              className="footer-link text-gray-400 hover:text-red-500 mr-4 dark:hover:hover:text-red-500 dark:text-gray-400"
            >
              Service
            </Link>
            <Link
              to="#Project"
              smooth
              className="footer-link text-gray-400 hover:text-red-500 mr-4 dark:hover:hover:text-red-500 dark:text-gray-400"
            >
              Project
            </Link>
            <Link
              to="#Contact"
              smooth
              className="footer-link text-gray-400 hover:text-red-500 mr-4 dark:hover:hover:text-red-500 dark:text-gray-400"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col ml-6 sm:ml-0">
            <h4 className="font-normal dark:text-white mb-4 text-xl">
              Gallery
            </h4>
            <div className="flex flex-row flex-wrap gap-2">
              <div className="img-container ">
                <img
                  src="https://demo.htmlcodex.com/pro/dgcom/img/project-1.jpg"
                  alt=""
                />
              </div>
              <div className="img-container ">
                <img
                  src="https://demo.htmlcodex.com/pro/dgcom/img/project-2.jpg"
                  alt=""
                />
              </div>
              <div className="img-container ">
                <img
                  src="https://demo.htmlcodex.com/pro/dgcom/img/project-3.jpg"
                  alt=""
                />
              </div>
              <div className="img-container ">
                <img
                  src="https://demo.htmlcodex.com/pro/dgcom/img/project-4.jpg"
                  alt=""
                />
              </div>
              <div className="img-container ">
                <img
                  src="https://demo.htmlcodex.com/pro/dgcom/img/project-5.jpg"
                  alt=""
                />
              </div>
              <div className="img-container ">
                <img
                  src="https://demo.htmlcodex.com/pro/dgcom/img/project-2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-6 sm:ml-0">
            <h4 className="font-normal dark:text-white mb-4 text-xl">
              Newsletter
            </h4>
            <p className="mb-3 text-cynan text-[16px] font-normal leading-7 dark:text-gray-400">
              Sign up here to get the latest news, updates and special offers.
            </p>
            <div className="relative max-w-[400px]">
              <input
                className="form-footer-input text-[12px]"
                type="text"
                placeholder="Enter your email"
              ></input>
              <button className="form-submit">Submit</button>
            </div>
          </div>
        </div>

        <div className="copywrite dark:text-white">
          <p> © 2022 Masterwave | All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
