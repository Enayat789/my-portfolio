import React from "react";

const Education = () => {
  return (
    <div className="w-full max-w-6xl m-auto mt-12 h-auto gap-3 flex flex-row ">
      <div className="w-auto flex max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto items-center">
        <div className="p-0.5 rounded-sm bg-gradient-to-r from-pink-500 to-indigo-700">
          <button className="bg-gradient-to-r p-2 px-3 rounded-sm from-gray-950 to-gray-900">
            Education
          </button>
        </div>
        <span className="block w-44 h-0.5 bg-gradient-to-r from-indigo-700 to-pink-500 rounded-r-lg mt-1"></span>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto"></div>

      {/* Accent Line */}
      {/* <div className="w-full flex justify-end max-w-6xl mx-auto sm:pl-6 lg:pl-12 xl:pl-0">
        <div className="w-20 sm:w-24 md:w-32 lg:w-1/2 h-0.5 bg-gradient-to-r from-pink-500 to-indigo-700 rounded-full shadow-md"></div>
      </div> */}
    </div>
  );
};

export default Education;
