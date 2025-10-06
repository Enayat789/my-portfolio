import React from "react";
// import profilepic from "/profilepic.png";
import myPic from "/straight-black.png";

export default function Introduction() {
  return (
    <div
      className="w-[100vw] max-w-6xl h-auto m-auto sm:h-[17%] md:h-[24%] lg:h-[27%] xl:h-[70vh] flex flex-col-reverse sm:flex-row justify-center items-center scroll-smooth pt-8 "
      id="home"
    >
      {/* introduction part */}
      <div className="w-full sm:w-[52%] flex justify-center items-center md:justify-center xl:justify-start p-2 ">
        <div className=" w-[70%] sm:w-[80%] md:w-[85%] lg:w-[80%] xl:max-w-lg flex flex-col items-center justify-center sm:items-start px-0 pt-6 sm:px-0 sm:gap-4 md:gap-2 text-lg">
          <p className="text-2xl sm:text-2xl md:text-3xl italic font-light hover:drop-shadow-custom-gray">
            Hi, I am
          </p>
          <p className="text-4xl sm:text-5xl md:text-6xl italic font-bold hover:drop-shadow-custom-gray">
            Enayatullah
          </p>
          <p className="text-xl md:text-2xl italic font-light hover:drop-shadow-custom-gray">
            front-end developer
          </p>
          <br />
          <p className="flex flex-col text-2xl italic font-extralight cursor-pointer items-start group">
            Contact Me
            <span className="block w-16 h-1 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-full transition-all duration-500 ease-in-out group-hover:w-28"></span>
          </p>
        </div>
      </div>

      {/* image section */}
      <div className="sm:w-[48%] w-full h-full sm:h-full flex flex-col justify-center items-end xl:justify-end cursor-pointer px-4 relative">
        <div className="absolute -z-10 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-90"></div>

        {/* Traingle image in the background */}
        <img
          src="Rectangle 4.png"
          alt="Background"
          className="absolute -z-10 left-11 w-full h-full object-cover opacity-90"
        />

        <img
          src="Rectangle5.png"
          alt="Background"
          className="absolute -z-10 left-11 w-full h-full object-cover opacity-60"
        />

        {/* <img
            src={myPic}
            alt="profile-pic"
            className="w-[50%] h-full sm:w-full md:size-96 drop-shadow-custom-gray"
          /> */}
        <img
          src={myPic}
          alt="profile-pic"
          className="w-[70%] h-full sm:w-full md:size-96 lg:h-full mt-6 sm:mt-0"
        />
        <span className="block w-[69%] h-1 bg-gradient-to-r from-indigo-950 to-indigo-600 rounded-full mt-0"></span>

        {/* drop-shadow-custom-gray */}
      </div>
    </div>
  );
}
