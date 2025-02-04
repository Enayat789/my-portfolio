import React from "react";
// import profilepic from "/profilepic.png";
import profilePic from "/profile-pic2.png";

export default function Introduction() {
  return (
    <div
      className="w-[100vw] h-auto sm:h-[17%] md:h-[32%] flex flex-col-reverse sm:flex-row justify-center items-center scroll-smooth pt-4"
      id="home"
    >
      {/* introduction part */}
      <div className="w-full sm:w-[52%] flex justify-center items-center md:justify-center p-2 ">
        <div className=" w-[70%] sm:w-[80%] md:w-[70%] lg:w-[50%] flex flex-col items-center justify-center sm:items-start px-0 pt-6 sm:px-0 sm:gap-4 md:gap-2 text-lg">
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
          <p className="hidden sm:flex text-2xl italic font-extralight underline cursor-pointer">
            contact me
          </p>
        </div>
      </div>

      {/* image section */}
      <div className="sm:w-[48%] w-full sm:h-full flex justify-center items-center cursor-pointer">
        <img
          src={profilePic}
          alt="profile-pic"
          className="w-[50%] h-auto sm:w-full md:size-96 rounded-[10%] lg:rounded-[50%] drop-shadow-custom-gray"
        />
      </div>
    </div>
  );
}
