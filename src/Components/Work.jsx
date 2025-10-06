import React from "react";

export default function Work() {
  return (
    <div className="w-full flex flex-col gap-8 py-12 px-6 ">
      <div className="w-full flex max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto items-center">
        <button className="bg-gradient-to-r from-gray-950 to-gray-900 border-indigo-800 border-spacing-2">
          Projects
        </button>
        <span className="block w-44 h-1 bg-gradient-to-r from-blue-600 to-indigo-900 rounded-r-lg mt-1"></span>
      </div>

      <div className="w-full max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 leading-relaxed">
          In this section, I’ve highlighted my experience in building
          <span className="font-semibold text-gray-900">
            dynamic, responsive web applications
          </span>
          using modern frontend technologies. Whether it's
          <span className="font-semibold text-gray-900">
            freelance projects
          </span>
          , personal initiatives, or collaborative work, each entry showcases my
          ability to create
          <span className="font-bold text-blue-600">
            user-focused solutions
          </span>
          with
          <span className="font-bold text-indigo-700">
            {" "}
            React.js, JavaScript, Tailwind CSS, and more.
          </span>
        </p>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-gray-700 leading-relaxed">
          My goal is to leverage these technologies to build seamless and
          engaging experiences, always striving to improve and stay ahead in the
          evolving landscape of web development.
        </p>
      </div>

      {/* Accent Line */}
      <div className="w-full max-w-6xl mx-auto sm:pl-6 lg:pl-12 xl:pl-0">
        <div className="w-20 sm:w-24 md:w-32 lg:w-36 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-md transition-all duration-500 hover:w-44"></div>
      </div>
    </div>
  );
}
