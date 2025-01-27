import React from "react";
// import githubLogo from "/github-logo.png";

export default function Navbar() {
  return (
    <div className="w-[100vw] bg-white flex flex-row justify-between items-center px-8 sm:px-2 py-4 border-b-4 border-spacing-2 sticky top-0 z-20 scroll-smooth">
      <div className="">
        <h2 className="cursor-pointer text-xl sm:text-2xl sm:ml-4 lg:ml-8 font-serif font-bold italic ">
          ENAYAT
        </h2>
      </div>
      <div className="flex sm:w-[60%] md:w-[55%] lg:w-[45%] justify-between items-center lg:mr-8">
        <div className="hidden sm:flex sm:w-[70%] md:w-[70%] lg:w-3/4 justify-evenly items-center list-none p-2 gap-4 md:text-xl  font-semibold">
          <li className="w-full flex justify-between items-center">
            <a className="text-gray-600 cursor-pointer hover:text-black hover:drop-shadow-custom-gray">
              About me
            </a>
            <a className="text-gray-600 cursor-pointer hover:text-black hover:drop-shadow-custom-gray">
              Skills
            </a>
            <a className="text-gray-600 cursor-pointer hover:text-black hover:drop-shadow-custom-gray">
              Contact
            </a>
          </li>
        </div>
        <div className="w-auto">
          {/* <a href="https://github.com/Enayat789" target="_blank">
            <img
              src={githubLogo}
              alt="github-logo"
              className="cursor-pointer rounded-full hover:border-2 "
            />
          </a> */}
          <button className="bg-black hidden sm:flex sm:p-2 text-white font-bold ">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}
