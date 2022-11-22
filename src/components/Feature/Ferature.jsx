import React from "react";

const Ferature = () => {
  return (
    <section className="p-4 sm:p-8 relative mt-20 dark:bg-slate-900">
      <div className="container flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative">
          <h4 className="uppercase font-bold text-sm text-depink">
            Get Every Single Solutions.
          </h4>
          <h1 className="capitalize font-bold text-4xl text-cynan py-2 dark:text-white">
            Why Choose Me?
          </h1>
          <p className="text-gray-400 leading-7">
            I'm committed to my client's and offers great services in design,
            development, programming and marketing field. I put great efforts in
            completing projects. It doesn't matter if I'm working for a small
            organization or a well-established organization I always make sure
            to serve my client with the best solution possible which suits their
            business.
          </p>
          <p className="text-gray-400 leading-7 mb-3">
            I always complete a project in such a way that it is easy to use,
            manage and scalable. I believe that success of my client is my
            success.
          </p>
          <div className="flex flex-col  gap-4">
            <div className="w-full mb-2">
              <div className="flex justify-between">
                <p className="mb-2 text-gray-400">Brading & Marketing</p>
                <p className="mb-2 text-gray-400">85%</p>
              </div>
              <div className="w-full bg-gray-400 h-1.5 rounded-md">
                <div
                  className="bg-indigo-600 h-1.5 rounded-md"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex justify-between">
                <p className="mb-2 text-gray-400">SEO & Backlinks</p>
                <p className="mb-2 text-gray-400">90%</p>
              </div>
              <div className="w-full bg-gray-400 h-1.5 rounded-md">
                <div
                  className="bg-indigo-600 h-1.5 rounded-md"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex justify-between">
                <p className="mb-2 text-gray-400">Design & Development</p>
                <p className="mb-2 text-gray-400">95%</p>
              </div>
              <div className="w-full bg-gray-400 h-1.5 rounded-md">
                <div
                  className="bg-indigo-600 h-1.5 rounded-md"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-12 relative flex items-center justify-center lg:w-1/2 lg:mt-0">
          <div className="grid grid-cols-2 gap-6 items-center justify-center">
            <div className="box-wrap dark:bg-slate-900 dark:shadow-md">
              <div className="text-depink text-center p-3 text-5xl">
                <i className="fa fa-xing" aria-hidden="true"></i>
              </div>
              <h4 className="capitalize text-xl block font-semibold text-cynan py-2 hover:text-depink dark:text-white">
                perfect Design
              </h4>
            </div>
            <div className="box-wrap dark:bg-slate-900 dark:shadow-md">
              <div className="text-depink text-center p-3 text-5xl">
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
              </div>
              <h4 className="capitalize text-xl block font-semibold text-cynan py-2 hover:text-depink dark:text-white">
                Carefully Planned
              </h4>
            </div>
            <div className="box-wrap dark:bg-slate-900 dark:shadow-md">
              <div className="text-depink text-center p-3 text-5xl">
                <i className="fa fa-angellist" aria-hidden="true"></i>
              </div>
              <h4
                className="
              capitalize text-xl block font-semibold text-cynan py-2 hover:text-depink dark:text-white"
              >
                Smartly Executed
              </h4>
            </div>
            <div className="box-wrap dark:bg-slate-900 dark:shadow-md">
              <div className="text-depink text-center p-3 text-5xl">
                <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
              </div>
              <h4 className="capitalize text-xl block font-semibold text-cynan py-2 hover:text-depink dark:text-white">
                Creative ideas
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ferature;
