import React from "react";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  return (
    <div className="w-full relative h-auto flex flex-col md:flex-row items-center justify-evenly py-8 gap-10">
      {ProjectsData.map((data, index) => (
        <div
          className="relative overflow-hidden w-full sm:w-[90%] md:w-[47%] lg:max-w-2xl xl:w-[30%] rounded-lg flex items-center justify-center"

          // className="w-auto relative h-auto sm:w-[90%] sm:h-auto md:w-[47%] lg:max-w-2xl xl:w-[30%] p-0.5 flex flex-col items-center justify-around shadow-2xl rounded-lg bg-gradient-to-r from-pink-500 to-indigo-700"
        >
          {/* spin div */}
          <div className="absolute left-7 w-80 inset-0 rounded-xl p-[2px] animate-border-spin bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            <div className="h-full w-full rounded-sm"></div>
          </div>

          {/* inne- main div */}
          <div
            key={index}
            className="relative z-10 w-full h-full m-0.5 py-4 px-1 flex flex-col items-center justify-between bg-gradient-to-r from-gray-950 to-gray-900 rounded-xl shadow-2xl"
            // className="w-full inset-0 absolute h-full p-1 py-3 flex flex-col items-center justify-center bg-gradient-to-r from-gray-950 to-gray-900 rounded-lg "
            // className="w-full h-auto sm:w-[90%] sm:h-auto md:w-[47%] lg:max-w-2xl xl:w-[30%] pt-2 pb-3 flex flex-col items-center justify-around shadow-2xl rounded-lg bg-gradient-to-r from-gray-950 to-gray-900 border border-pink-500"
          >
            {/* image */}
            <div className="bg-gray-200 w-[95%] h-[50%] flex items-center justify-center border rounded-lg cursor-pointer">
              <a href={data.links.demo} target="_blank">
                <img src={data.image} alt="image" className="rounded-lg" />
              </a>
            </div>

            {/* title and the description */}
            <div className=" w-full h-auto flex flex-col justify-center items-center px-4 py-2 sm:pt-2 sm:py-0">
              <h2 className="text-xl font-bold sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-700">
                {data.name}
              </h2>
              <p className="text-base sm:text-lg">{data.about}</p>
            </div>

            {/* languages used */}
            <div className="hidden sm:flex sm:flex-row justify-center items-center w-full text-lg px-1 sm:px-4 gap-2 sm:gap-6 md:gap-4">
              {data.languages?.map((lang, index) => (
                <span key={index} className="p-2 underline rounded-lg">
                  {lang}
                </span>
              ))}
            </div>

            {/* div for the DEMO and SOURCE btn. */}
            <div className="w-full flex flex-row justify-around sm:justify-between items-center px-4 sm:px-8 py-2 md:py-1">
              <a
                href={data.links.demo}
                target="_blank"
                className="shadow-xl rounded-lg py-2 px-6 text-white bg-gradient-to-r from-gray-900 to-gray-950 border-r-2 border-b-2 border-indigo-800 "
              >
                {data.btn[0]}
              </a>
              <a
                href={data.links.github}
                target="_blank"
                className="shadow-xl rounded-lg py-2 px-6 text-white bg-gradient-to-r from-gray-900 to-gray-950 border-r-2 border-b-2 border-indigo-800 "
              >
                {data.btn[1]}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
