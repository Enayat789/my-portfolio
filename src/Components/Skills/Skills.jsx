import React from "react";
import mySkills from "./SkillsData";

const Skills = () => {
  return (
    <div className="w-full flex flex-col gap-8 py-12 px-6 bg-gradient-to-r from-orange-200 to-pink-300">
      <div className="w-full max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 uppercase tracking-wide relative">
          My Skills
          <span className="block w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mt-1"></span>
        </h2>
      </div>

      <div className="w-full bg-green-300 max-w-6xl flex flex-wrap items-center justify-center md:justify-evenly sm:pl-6 lg:pl-12 xl:pl-0 mx-auto">
        {mySkills.map((skill, index) => (
          <div
            key={index}
            className="flex w-[25%] sm:w-[20%] md:w-[17%] md:bg-yellow-300 lg:bg-slate-500 lg:w-[10%] flex-col bg-red-300 items-center gap-2 "
          >
            <img src={skill.icon} className="w-full h-auto" />
            <span className="font-bold text-2xl">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
