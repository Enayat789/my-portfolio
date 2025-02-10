import React from "react";

export default function About() {
  // bg-gradient-to-r from-slate-300 to-slate-500
  // from-gray-300 to-pink-200
  return (
    <div className="w-full flex flex-col gap-8 py-12 px-6 bg-gradient-to-r from-slate-400 to-slate-300">
      <div className="w-full max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase tracking-wide relative">
          About Me
          <span className="block w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mt-1"></span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 leading-relaxed">
          I'm a passionate
          <span className="font-semibold text-gray-900">
            Frontend Developer
          </span>
          dedicated to crafting modern, sleek, and intuitive web applications.
          With expertise in
          <span className="font-bold text-blue-600">
            {" "}
            React.js, JavaScript, HTML, CSS, and Tailwind CSS
          </span>
          , I focus on creating seamless user experiences.
        </p>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-gray-700 leading-relaxed">
          Currently, I'm expanding my skills in
          <span className="font-bold text-indigo-700"> Next.js</span>, allowing
          me to develop even more scalable and high-performance web solutions.
        </p>
      </div>

      {/* Accent Line */}
      <div className="w-full max-w-6xl mx-auto sm:pl-6 lg:pl-12 xl:pl-0">
        <div className="w-20 sm:w-24 md:w-32 lg:w-36 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-md transition-all duration-500 hover:w-44"></div>
      </div>
    </div>
  );
}
