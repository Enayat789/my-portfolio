import React from "react";

export default function About() {
  // bg-gradient-to-r from-slate-300 to-slate-500
  // from-gray-300 to-pink-200
  return (
    <div className="w-full h-auto flex flex-col gap-8 py-12 px-6">
      {/* <span className="block w-[20%] h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mt-0"></span> */}

      <div className="w-full flex max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto items-center">
        <button className="bg-gradient-to-r from-gray-950 to-gray-900 border-indigo-800 border-spacing-2">
          About Me
        </button>
        <span className="block w-44 h-1 bg-gradient-to-r from-blue-600 to-indigo-900 rounded-r-lg mt-1"></span>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
          I'm a passionate{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-700">
            Frontend Developer{" "}
          </span>
          dedicated to crafting modern, sleek, and intuitive web applications.
          With expertise in
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-800">
            {" "}
            React.js, JavaScript, HTML, CSS, and Tailwind CSS
          </span>
          , I focus on creating seamless user experiences.
        </p>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
          Currently, I'm expanding my skills in
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700">
            {" "}
            Next.js
          </span>
          , allowing me to develop even more scalable and high-performance web
          solutions.
        </p>
      </div>

      {/* Accent Line */}
      <div className="w-full flex justify-end max-w-6xl mx-auto sm:pl-6 lg:pl-12 xl:pl-0">
        <div className="w-20 sm:w-24 md:w-32 lg:w-1/2 h-1 bg-gradient-to-r from-indigo-950 to-indigo-600 rounded-full shadow-md"></div>
      </div>
    </div>
  );
}
