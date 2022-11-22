import React, { useState } from "react";
import close from "../../img/close.svg";
import menu from "../../img/menu.svg";
import Toggle from "../Toggle/Toggle";
import { HashLink as Link } from "react-router-hash-link";

const MobileNavbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex items-center justify-end flex-1 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[20px] h-[20px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "fixed"
          } bg-general absolute top-20 right-0 left-0 bottom-0 py-0 px-[23px] w-full h-screen dark:bg-slate-900 z-[50]`}
        >
          <div className="my-0 mx-auto px-0 pt-[24px] pb-[96px] max-w-[288px]">
            <nav className="block ">
              <Link
                to="/"
                smooth
                className="nav_link dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500"
                href="/"
              >
                Home
              </Link>
              <Link
                to="#About"
                smooth
                className="nav_link dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500"
                href="/"
              >
                About
              </Link>
              <Link
                to="#Service"
                smooth
                className="nav_link dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500"
                href="/"
              >
                Services
              </Link>
              <Link
                to="#Project"
                smooth
                className="nav_link dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500"
                href="/"
              >
                Portfolio
              </Link>
            </nav>
            <div className="mt-[24px] flex justify-between items-center rounded-lg py-[12px] px-[14px] bg-toggle">
              <p className="leading-6 text-[16px] font-medium dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500">
                Appearance
              </p>
              <Toggle />
            </div>
            <div className="mt-[24px] flex flex-wrap items-center justify-center">
              <a
                className="flex items-center justify-center  cursor-pointer w-[36px] h-[36px] pr-3 dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500"
                href="https://www.facebook.com/people/masterwavetech/100087044030356/"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                className="flex items-center justify-center  cursor-pointer w-[36px] h-[36px] pr-3 dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500"
                href="https://www.instagram.com/masterwavetech/"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                className="flex items-center justify-center  cursor-pointer w-[36px] h-[36px] pr-3 dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500"
                href="https://www.linkedin.com/in/masterwavetech/"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>

              <a
                className="flex items-center justify-center  cursor-pointer w-[36px] h-[36px] pr-3 dark:text-white hover:text-red-500 mr-4 dark:hover:hover:text-red-500"
                href="https://twitter.com/masterwavetech"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
