import React from "react";

export default function Work() {
  return (
    // <div className="w-[100vw] flex flex-col gap-2 pt-2 px-4 lg:pt-8">
    <div className="w-full flex flex-col gap-8 py-12 px-6 bg-gradient-to-r from-gray-300 to-pink-200">
      <div className="w-full max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto">
        {/* <div className="flex flex-col md:flex-row md:justify-end w-full max-w-6xl lg:max-w-full xl:max-w-[90%] lg:justify-end xl:justify-end mx-auto items-center justify-center gap-4 sm:gap-6 md:gap-8"> */}
        {/* <h2 className="text-2xl sm:text-4xl text-gray-500 font-sans italic text-center md:text-left"> */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase tracking-wide relative">
          work
          <span className="block w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mt-1"></span>
        </h2>
        {/* <hr className="border-4 w-full sm:w-[80%] md:w-[79%] lg:w-[78%] xl:w-[84%] border-gray-300 rounded-full" /> */}
      </div>

      <div className="w-full max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto">
        {/* <div className="w-full max-w-7xl mx-auto flex flex-col items-center md:items-end"> */}
        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 leading-relaxed">
          {/* <p className="w-full sm:w-[90%] md:w-[82%] lg:w-[80%] xl:w-[83%] p-4 sm:p-6 md:py-2 md:px-8 text-base sm:text-lg md:text-xl lg:text-2xl font-thin text-gray-700 text-center md:text-left leading-relaxed"> */}
          In this section, I’ve highlighted my experience in building dynamic,
          responsive web applications using modern frontend technologies.
          Whether it's freelance projects, personal initiatives, or
          collaborative work, each entry showcases my ability to create
          user-focused solutions with React.js, JavaScript, Tailwind CSS, and
          more.
        </p>
      </div>

      {/* Accent Line */}
      <div className="w-full max-w-6xl mx-auto sm:pl-6 lg:pl-12 xl:pl-0">
        <div className="w-20 sm:w-24 md:w-32 lg:w-36 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-md transition-all duration-500 hover:w-44"></div>
      </div>
    </div>
  );
}
