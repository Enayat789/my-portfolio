import React from "react";
import mySkills from "./SkillsData";

const Skills = () => {
  return (
    <div className="w-full h-[50vh] flex flex-col justify-between gap-8 py-12 px-6  text-white ">
      <div className="w-full h-[50%] flex max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto justify-center items-center relative">
        {/*  the background circle */}
        <img
          src="/Ellipse 9.png"
          alt="background circle"
          className="absolute w-auto h-auto m-auto object-cover opacity-60"
        />
        <button className="bg-gradient-to-r from-gray-950 to-gray-900 border-indigo-800 border-spacing-2 z-10">
          My Skillls
        </button>
      </div>

      {/* <div className="w-full bg-red-300 h-auto max-w-6xl flex flex-wrap gap-4 items-center justify-center md:justify-evenly sm:pl-6 lg:pl-12 xl:pl-0 mx-auto"> */}
      <div className="w-full max-w-6xl m-auto h-auto group overflow-hidden">
        <div className="flex h-full w-max justify-center animate-scroll group-hover:[animation-play-state:paused] items-center whitespace-nowrap p-4 gap-8">
          {mySkills.concat(mySkills).map((skill, index) => (
            <div
              key={index}
              className="inline-flex h-auto flex-col items-center p-4 mx-4 justify-center gap-2"
              // className="flex w-[25%] sm:w-[20%] md:w-[17%] lg:w-[10%] flex-col items-center gap-2 "
            >
              {/* <div className="w-24 h-24 flex flex-col justify-center items-center cursor-pointer transform transition-transform duration-500 translate-y-3 p-2 border border-indigo-800 border-spacing-2 "> */}
              <div className="w-auto h-auto p-4 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex items-center justify-center cursor-pointer bg-gradient-to-r from-gray-950 to-gray-900 border-indigo-800 border border-spacing-2 rounded-2xl">
                <img src={skill.icon} className=" w-16 h-w-16 object-contain rounded-xl" />
              </div>

              <span className="font-bold text-xl">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
