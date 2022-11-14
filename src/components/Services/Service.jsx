import React from "react";
import Icon1 from "../../img/internet.png";
import Icon2 from "../../img/developer.png";
import Icon3 from "../../img/blockchain.png";
import Icon4 from "../../img/optimization.png";
import Icon5 from "../../img/ux.png";
import Icon6 from "../../img/marketing-strategy.png";
const Service = () => {
  return (
    <div className="relative mt-20 dark:bg-slate-900" id="Service">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="section-title dark:bg-slate-900 dark:text-indigo-900">
          SERVICES
        </h1>
        <h1 className="text-2xl text-cynan text-center font-bold dark:text-white capitalize">
          I Focuse On Making The Best In All Sectors
        </h1>
      </div>
      <div className="p-5 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        <div className="service-box dark:bg-slate-900 dark:shadow-md">
          <img className="w-12" src={Icon1} alt="" />
          <h1 className="font- capitalize text-cynan text-lg dark:text-white">
            Web development
          </h1>
          <p className="text-gray-400">
            I specialize in creating interactive websites for individuals and
            small businesses with the lastest web technologies.
          </p>
          <a className="text-indigo-600 font-semibold text-sm" href="/">
            Lead More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="service-box dark:bg-slate-900 dark:shadow-md">
          <img className="w-12" src={Icon2} alt="" />
          <h1 className="font- capitalize text-cynan text-lg dark:text-white">
            Mobile development
          </h1>
          <p className="text-gray-400">
            I uses significant windows mobile SDKs to meet your company's needs
            to make your business grow in right direction.
          </p>
          <a className="text-indigo-600 font-semibold text-sm" href="/">
            Lead More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="service-box dark:bg-slate-900 dark:shadow-md">
          <img className="w-12" src={Icon3} alt="" />
          <h1 className="font- capitalize text-cynan text-lg dark:text-white">
            Blockchain development
          </h1>
          <p className="text-gray-400">
            I uses custom blockchain-powered apps to create dApps that ensure
            the ability to scale, interoperability, and long-term
            sustainability.
          </p>
          <a className="text-indigo-600 font-semibold text-sm" href="/">
            Lead More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="service-box dark:bg-slate-900 dark:shadow-md">
          <img className="w-12" src={Icon4} alt="" />
          <h1 className="font- capitalize text-cynan text-lg dark:text-white">
            SEO optimization
          </h1>
          <p className="text-gray-400">
            I use the most effective SEO strategy which help relevant audience
            to reach your web pages via pertinent search queries.
          </p>
          <a className="text-indigo-600 font-semibold text-sm" href="/">
            Lead More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="service-box dark:bg-slate-900 dark:shadow-md">
          <img className="w-12" src={Icon5} alt="" />
          <h1 className="font- capitalize text-cynan text-lg dark:text-white">
            UI / UX Design
          </h1>
          <p className="text-gray-400">
            UI / UX strategy I offer enables your small business to attract more
            prospects, increase productivity and customer retentions.
          </p>
          <a className="text-indigo-600 font-semibold text-sm" href="/">
            Lead More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="service-box dark:bg-slate-900 dark:shadow-md">
          <img className="w-12" src={Icon6} alt="" />
          <h1 className="font- capitalize text-cynan text-lg dark:text-white">
            Brading and marketing
          </h1>
          <p className="text-gray-400">
            My branding services can help companies stand out from the crowd by
            integrating your brand's image with the effective marketing
            practices.
          </p>
          <a className="text-indigo-600 font-semibold text-sm" href="/">
            Lead More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
