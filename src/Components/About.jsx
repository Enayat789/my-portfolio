import React from "react";

export default function About() {
  return (
    // <div className="w-[100vw] bg-slate-200 flex flex-col gap-2 pt-6">
    //   <div className="flex w-[85%] m-auto flex-row items-center justify-end md:justify-center gap-4 sm:gap-6 md:gap-10">
    //     <p className="text-2xl sm:text-4xl text-gray-500 font-sans italic">
    //       about
    //     </p>
    //     <hr className="border-4 w-[78%] sm:w-[80%] md:w-[80%] border-gray-300 rounded-full" />
    //   </div>

    //   <div className=" w-[80%] m-auto bg-red-300 flex justify-end md:justify-end items-center">
    //     <p className=" w-[80%] bg-yellow-300 sm:w-[82%] md:w-[80%] md:p-2 text-lg sm:text-xl md:text-2xl font-thin ">
    //       I am a passionate frontend developer specializing in building sleek,
    //       responsive, and user-friendly web applications. With a solid
    //       foundation in React.js, JavaScript, HTML, CSS, and Tailwind CSS, I
    //       focus on creating functional and visually appealing digital
    //       experiences. Currently, I’m expanding my expertise in Next.js to
    //       develop even more scalable and performance-optimized solutions.
    //     </p>
    //   </div>
    // </div>

    <div className="w-[100vw] flex flex-col gap-2 pt-2 px-4 lg:pt-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-end w-full max-w-6xl lg:max-w-full xl:max-w-[90%] lg:justify-end xl:justify-end mx-auto items-center justify-center gap-4 sm:gap-6 md:gap-8">
        <p className="text-2xl sm:text-4xl text-gray-500 font-sans italic text-center md:text-left">
          about
        </p>
        <hr className="border-4 w-full sm:w-[80%] md:w-[79%] lg:w-[78%] xl:w-[84%] border-gray-300 rounded-full" />
      </div>

      {/* Content Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center md:items-end">
        <p className="w-full sm:w-[90%] md:w-[82%] lg:w-[80%] xl:w-[83%] p-4 sm:p-6 md:py-2 md:px-8 text-base sm:text-lg md:text-xl lg:text-2xl font-thin text-gray-700 text-center md:text-left leading-relaxed">
          I am a passionate frontend developer specializing in building sleek,
          responsive, and user-friendly web applications. With a solid
          foundation in React.js, JavaScript, HTML, CSS, and Tailwind CSS, I
          focus on creating functional and visually appealing digital
          experiences. Currently, I’m expanding my expertise in Next.js to
          develop even more scalable and performance-optimized solutions.
        </p>
      </div>
    </div>
  );
}
