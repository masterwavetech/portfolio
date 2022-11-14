import React from "react";
import logo from "../../img/masterwave_logo.png";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="w-full overflow-hidden dark:bg-slate-900">
      <div className="flex items-center justify-center">
        <nav className="w-full flex items-center justify-between">
          <img
            src={logo}
            alt="Masterwave"
            title="Masterwave"
            className="w-[180px] h-[60px] cursor-pointer"
          />
          <DesktopNavbar />
          <MobileNavbar />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
