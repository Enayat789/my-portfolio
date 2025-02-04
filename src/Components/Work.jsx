import React from "react";

export default function Work() {
  return (
    <div className="w-[100vw] flex flex-col gap-2 pt-2 px-4 lg:pt-8">
      <div className="flex flex-col md:flex-row md:justify-end w-full max-w-6xl lg:max-w-full xl:max-w-[90%] lg:justify-end xl:justify-end mx-auto items-center justify-center gap-4 sm:gap-6 md:gap-8">
        <p className="text-2xl sm:text-4xl text-gray-500 font-sans italic text-center md:text-left">
          work
        </p>
        <hr className="border-4 w-full sm:w-[80%] md:w-[79%] lg:w-[78%] xl:w-[84%] border-gray-300 rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center md:items-end">
        <p className="w-full sm:w-[90%] md:w-[82%] lg:w-[80%] xl:w-[83%] p-4 sm:p-6 md:py-2 md:px-8 text-base sm:text-lg md:text-xl lg:text-2xl font-thin text-gray-700 text-center md:text-left leading-relaxed">
          In this section, I’ve highlighted my experience in building dynamic,
          responsive web applications using modern frontend technologies.
          Whether it's freelance projects, personal initiatives, or
          collaborative work, each entry showcases my ability to create
          user-focused solutions with React.js, JavaScript, Tailwind CSS, and
          more.
        </p>
      </div>
    </div>
  );
}
