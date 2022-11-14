import React from "react";
import Toggle from "../Toggle/Toggle";
import { HashLink as Link } from "react-router-hash-link";

const DesktopNavbar = () => {
  return (
    <>
      <div className="hidden sm:flex justify-between items-center">
        <ul className="list-none  sm:flex  justify-end items-center flex-1">
          <Link to="/" smooth>
            <li className="font-nunito font-normal cursor-pointer text-[14px]  dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500">
              Home
            </li>
          </Link>
          <Link to="#About" smooth>
            <li className="font-nunito font-normal cursor-pointer text-[14px]  dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500">
              About
            </li>
          </Link>
          <Link to="#Service" smooth>
            <li className="font-nunito font-normal cursor-pointer text-[14px]  dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500">
              Services
            </li>
          </Link>
          <Link to="#Project" smooth>
            <li className="font-nunito font-normal cursor-pointer text-[14px]  dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500">
              Portfolio
            </li>
          </Link>
          <Link to="#Contact" smooth>
            <li className="font-nunito font-normal cursor-pointer text-[14px]  dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500">
              Contact
            </li>
          </Link>
        </ul>
        <div className="mr-8">
          <Toggle />
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <a
            className="flex items-center justify-center  cursor-pointer w-[36px] h-[36px]  dark:text-white hover:text-red-500 mr-2 dark:hover:hover:text-red-500"
            href="https://www.facebook.com/people/masterwavetech/100087044030356/"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            className="flex items-center justify-center  cursor-pointer w-[36px] h-[36px]  dark:text-white hover:text-red-500 mr-2 dark:hover:hover:text-red-500"
            href="https://www.instagram.com/masterwavetech/"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a
            className="flex items-center justify-center  cursor-pointer w-[36px] h-[36px]  dark:text-white hover:text-red-500 mr-2 dark:hover:hover:text-red-500"
            href="https://www.linkedin.com/in/masterwavetech/"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>

          <a
            className="flex items-center justify-center  cursor-pointer w-[36px] h-[36px]  dark:text-white hover:text-red-500 mr-2 dark:hover:hover:text-red-500"
            href="https://twitter.com/masterwavetech"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default DesktopNavbar;
