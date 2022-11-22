import React from "react";
import logo from "../../img/masterwave_logo.png";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <header className="header">
      <div className="navbar">
        <div className="flex-center">
          <nav className="w-full flex-between">
            <img
              src={logo}
              alt="Masterwave"
              title="Masterwave"
              className="header-logo"
            />
            <DesktopNavbar />
            <MobileNavbar />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
