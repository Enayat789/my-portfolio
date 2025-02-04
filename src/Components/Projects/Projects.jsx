import React from "react";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-evenly py-8 gap-10">
      {ProjectsData.map((data, index) => (
        <div
          key={index}
          className="w-auto h-auto sm:w-[90%] sm:h-auto md:w-[47%] lg:max-w-2xl xl:w-[30%] bg-gradient-to-r from-gray-300 to-gray-100 pt-2 pb-3 flex flex-col items-center justify-around shadow-2xl rounded-lg border border-gray-100 hover:border-gray-200"
        >
          <div className="bg-gray-200 w-[95%] h-[50%] flex items-center justify-center border rounded-lg cursor-pointer">
            <a href={data.links.demo} target="_blank">
              <img src={data.image} alt="image" />
            </a>
          </div>

          {/* heading and the about section*/}
          <div className=" w-full h-auto flex flex-col justify-center items-center px-4 py-2 sm:pt-2 sm:py-0">
            <h2 className="text-xl font-bold sm:text-3xl">{data.name}</h2>
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
          <div className="w-full flex flex-row justify-around sm:justify-between items-center px-4 sm:px-8 py-3 md:py-1">
            <a
              href={data.links.demo}
              target="_blank"
              className="shadow-xl rounded-lg py-2 px-6 text-black bg-gray-100 border-r-4 border-b-4 border-gray-200 hover:text-black hover:border-gray-300 "
            >
              {data.btn[0]}
            </a>
            <a
              href={data.links.github}
              target="_blank"
              className="shadow-xl rounded-lg py-2 px-6 text-black bg-gray-100 border-r-4 border-b-4 border-gray-200 hover:text-black hover:border-gray-300 "
            >
              {data.btn[1]}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
