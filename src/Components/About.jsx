import React from "react";

export default function About() {
  return (
    // <div className="w-[100vw] flex flex-col gap-2 pt-2 px-4 lg:pt-8">
    //   {/* Header Section */}
    //   <div className="flex flex-col md:flex-row md:justify-end w-full max-w-6xl lg:max-w-full xl:max-w-[90%] lg:justify-end xl:justify-end mx-auto items-center justify-center gap-4 sm:gap-6 md:gap-8">
    //     <p className="text-2xl sm:text-4xl text-gray-500 font-sans italic text-center md:text-left">
    //       about
    //     </p>
    //     <hr className="border-4 w-full sm:w-[80%] md:w-[79%] lg:w-[78%] xl:w-[84%] border-gray-300 rounded-full" />
    //   </div>

    //   {/* Content Section */}
    //   <div className="w-full max-w-7xl mx-auto flex flex-col items-center md:items-end">
    //     <p className="w-full sm:w-[90%] md:w-[82%] lg:w-[80%] xl:w-[83%] p-4 sm:p-6 md:py-2 md:px-8 text-base sm:text-lg md:text-xl lg:text-2xl font-thin text-gray-700 text-center md:text-left leading-relaxed">
    //       I am a passionate frontend developer specializing in building sleek,
    //       responsive, and user-friendly web applications. With a solid
    //       foundation in React.js, JavaScript, HTML, CSS, and Tailwind CSS, I
    //       focus on creating functional and visually appealing digital
    //       experiences. Currently, I’m expanding my expertise in Next.js to
    //       develop even more scalable and performance-optimized solutions.
    //     </p>
    //   </div>
    // </div>

    // 3rd
    <div className="w-full flex flex-col gap-8 py-12 px-6 bg-gradient-to-r from-gray-400 to-gray-300">
      {/* Header Section */}
      <div className="w-full bg-red-200 max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase tracking-wide relative">
          About Me
          <span className="block w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mt-1"></span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="w-full bg-red-100 max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 leading-relaxed">
          I'm a passionate
          <span className="font-semibold text-gray-900">
            Frontend Developer
          </span>
          dedicated to crafting modern, sleek, and intuitive web applications.
          With expertise in
          <span className="font-bold text-blue-600">
            React.js, JavaScript, HTML, CSS, and Tailwind CSS
          </span>
          , I focus on creating seamless user experiences.
        </p>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-gray-700 leading-relaxed">
          Currently, I'm expanding my skills in
          <span className="font-bold text-indigo-600"> Next.js</span>, allowing
          me to develop even more scalable and high-performance web solutions.
        </p>
      </div>

      {/* Accent Line */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
      </div>
    </div>
  );
}
