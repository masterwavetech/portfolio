import React from "react";

const Contact = () => {
  return (
    <div className="relative mt-20 dark:bg-slate-900" id="Contact">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-4xl text-cynan text-center font-bold dark:text-white capitalize">
          WE'RE 24/7
        </h1>
        <p className="text-gray-400 text-lg text-center">
          Ready when you are. Let's work together.
        </p>
      </div>
      <div className="container flex flex-col gap-10">
        <div className="p-5 grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          <div className="contact-box  dark:bg-slate-900 dark:shadow-md">
            <div className="text-center text-cynan text-5xl mr-5 dark:text-white">
              <i className="fa fa-map-o" aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="mb-2 text-[18px] block font-bold text-cynan dark:text-white sm:text-2xl">
                Our Location
              </h3>
              <p className="text-gray-400 text-[12px] sm:text-[16px]">
                No Physical Location
              </p>
            </div>
          </div>
          <div className="contact-box dark:bg-slate-900 dark:shadow-md">
            <div className="text-center text-cynan text-5xl mr-5 dark:text-white">
              <i className="fa fa-mobile" aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="mb-2 text-[18px] block font-bold text-cynan dark:text-white sm:text-2xl">
                Give us a call
              </h3>
              <p className="text-gray-400 text-[12px] sm:text-[16px]">
                +2348152966334
              </p>
            </div>
          </div>
          <div className="contact-box dark:bg-slate-900 dark:shadow-md">
            <div className="text-center text-cynan text-5xl mr-5 dark:text-white">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="mb-2 text-[18px] block font-bold text-cynan dark:text-white sm:text-2xl">
                Help Desk
              </h3>
              <p className="text-gray-400 text-[12px] sm:text-[16px]">
                Masterwavetech@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="container py-8">
          <form>
            <div className="flex flex-col gap-4">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Robert Smith*"
                  maxLength="200"
                  required
                />
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  id="w3lSender"
                  placeholder="example@mail.com*"
                  maxLength="200"
                  required
                />
              </div>
              <div className="">
                <textarea
                  className="textarea"
                  name="message"
                  placeholder="Enter your description here...*"
                  maxLength="500"
                  required=""
                ></textarea>
              </div>
              <div className="text-center sm:text-right">
                <button
                  className="w-full py-4 px-12 text-base font-semibold rounded-xl cursor-pointer text-center leading-4 text-white bg-depink border-depink sm:w-1/6 md:w-2/6"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
