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

      {/* adding the projects which i have done...  */}
      <div className="w-[100vw] h-auto flex flex-col md:flex-col items-center justify-evenly gap-10 p-4">
        {/* <div className="w-full flex items-center justify-evenly">
          <div className="w-[28%] h-[57vh] flex flex-col items-center justify-evenly shadow-2xl border rounded-lg py-2">
            <div className="bg-gray-200 w-[95%] h-[50%] mt-2 flex items-center justify-center border rounded-lg">
              <img src="" alt="" />
            </div>
            <div className=" w-full h-auto flex flex-col justify-start items-start px-4 pt-2 text-lg">
              <h2 className="text-2xl">project 1</h2>
              <p className="text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                assumenda eum error, eius iure nesciunt nemo exercitationem a
                non vitae?
              </p>
            </div>
            <div className=" flex flex-row justify-start items-center w-full px-4 gap-6">
              <span className="p-2 px-4 border-gray-300 border-2 rounded-lg">
                React js
              </span>
              <span className="p-2 px-4 border-gray-300 border-2 rounded-lg">
                JavaScript
              </span>
              <span className="p-2 px-4 border-gray-300 border-2 rounded-lg">
                Tailwind CSS
              </span>
            </div>
            <div className=" w-full flex flex-row justify-center items-center gap-6 px-4 mt-2">
              <button className=" bg-gray-200 border-gray-200 shadow-xl rounded-lg px-6 ">
                Demo
              </button>
              <button className=" bg-gray-200 border-gray-200 shadow-xl px-6 rounded-lg">
                Source
              </button>
            </div>
          </div>
          <div className="w-[28%] h-[57vh] flex flex-col items-center justify-evenly shadow-2xl border rounded-lg py-2">
            <div className="bg-gray-200 w-[95%] h-[50%] mt-2 flex items-center justify-center border rounded-lg">
              <img src="" alt="" />
            </div>
            <div className=" w-full h-auto flex flex-col justify-start items-start px-4 pt-2 text-lg">
              <h2 className="text-2xl">project 1</h2>
              <p className="text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                assumenda eum error, eius iure nesciunt nemo exercitationem a
                non vitae?
              </p>
            </div>
            <div className=" flex flex-row justify-start items-center w-full px-4 gap-6">
              <span className="p-2 px-4 border-gray-300 border-2 rounded-lg">
                React js
              </span>
              <span className="p-2 px-4 border-gray-300 border-2 rounded-lg">
                JavaScript
              </span>
              <span className="p-2 px-4 border-gray-300 border-2 rounded-lg">
                Tailwind CSS
              </span>
            </div>
            <div className=" w-full flex flex-row justify-center items-center gap-6 px-4 mt-2">
              <button className=" bg-gray-200 border-gray-200 shadow-xl rounded-lg px-6 ">
                Demo
              </button>
              <button className=" bg-gray-200 border-gray-200 shadow-xl px-6 rounded-lg">
                Source
              </button>
            </div>
          </div>
        </div> */}

        <div className="w-full h-auto flex flex-col md:flex-row items-center justify-evenly gap-10">
          {/* 1 st */}
          <div className="w-auto h-auto sm:w-[90%] sm:h-auto md:w-[47%] lg:max-w-2xl xl:w-[30%] pt-2 pb-3 flex flex-col items-center justify-around shadow-2xl rounded-lg border border-gray-100 hover:border-gray-200">
            <div className="bg-gray-200 w-[95%] h-[50%] flex items-center justify-center border rounded-lg cursor-pointer">
              <a href="https://koca-kne2.vercel.app/" target="_blank">
                <img src="/kocakne-image.png" alt="" className="rounded-lg" />
              </a>
            </div>
            <div className=" w-full h-auto flex flex-col justify-center items-center px-4 py-2 sm:pt-2 sm:py-0">
              <h2 className="text-xl font-bold sm:text-3xl">Koca Kne</h2>
              <p className="text-base sm:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                assumenda eum error, eius iure nesciunt nemo exercitationem a
                non vitae?
              </p>
            </div>
            <div className="hidden sm:flex sm:flex-row justify-center items-center w-full text-lg px-1 sm:px-4 gap-2 sm:gap-6 md:gap-4">
              <span className="p-2 underline rounded-lg">React js</span>
              <span className="p-2 underline rounded-lg">JavaScript</span>
              <span className="p-2 underline rounded-lg">Tailwind CSS</span>
            </div>
            <div className="w-full flex flex-row justify-around sm:justify-between items-center px-4 sm:px-8 py-3 md:py-1">
              <a href="https://koca-kne2.vercel.app/" target="_blank">
                <button className="shadow-xl rounded-lg px-6 text-black bg-gray-100 border-r-4 border-b-4 border-gray-200 hover:border-gray-300 ">
                  Demo
                </button>
              </a>
              <a href="https://github.com/Enayat789/koca-kne" target="_blank">
                <button className="shadow-xl rounded-lg px-6 text-black bg-gray-100 border-r-4 border-b-4 border-gray-200 hover:border-gray-300 ">
                  Source
                </button>
              </a>
            </div>
          </div>

          {/* 2nd.. */}
          <div className="w-auto h-auto sm:w-[90%] sm:h-auto md:w-[47%] xl:w-[30%] pt-2 pb-3 flex flex-col items-center justify-around shadow-2xl rounded-lg border border-gray-100 hover:border-gray-200">
            <div className="bg-gray-200 w-[95%] h-[50%] flex items-center justify-center border rounded-lg cursor-pointer">
              <a
                href="https://registration-form-gules.vercel.app/"
                target="_blank"
              >
                <img
                  src="/registrationForm-image.png"
                  alt=""
                  className=" rounded-lg"
                />
              </a>
            </div>
            <div className=" w-full h-auto flex flex-col justify-center items-center px-4 py-2 sm:pt-2 sm:py-0">
              <h2 className="text-xl font-bold sm:text-3xl">Koca Kne</h2>
              <p className="text-base sm:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                assumenda eum error, eius iure nesciunt nemo exercitationem a
                non vitae?
              </p>
            </div>
            <div className="hidden sm:flex sm:flex-row justify-center items-center w-full text-lg px-1 sm:px-4 gap-2 sm:gap-6 md:gap-4">
              <span className="p-2 px-4 underline rounded-lg">HTML</span>
              <span className="p-2 px-4 underline rounded-lg">CSS</span>
              <span className="p-2 px-4 underline rounded-lg">JavaScript</span>
            </div>
            <div className="w-full flex flex-row justify-around sm:justify-between items-center px-4 sm:px-8 py-3 md:py-1">
              <a
                href="https://registration-form-gules.vercel.app/"
                target="_blank"
              >
                <button className="shadow-xl rounded-lg px-6 text-black bg-gray-100 border-r-4 border-b-4 border-gray-200 hover:border-gray-300 ">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/Enayat789/email_pass_checkForm"
                target="_blank"
              >
                <button className="shadow-xl rounded-lg px-6 text-black bg-gray-100 border-r-4 border-b-4 border-gray-200 hover:border-gray-300 ">
                  Source
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col md:flex-row items-center justify-evenly gap-10">
          {/* 3rd */}
          <div className="w-auto h-auto sm:w-[90%] sm:h-auto md:w-[47%] lg:max-w-2xl xl:w-[30%] pt-2 pb-3 flex flex-col items-center justify-around shadow-2xl rounded-lg border border-gray-100 hover:border-gray-200">
            <div className="bg-gray-200 w-[95%] h-[50%] flex items-center justify-center border rounded-lg cursor-pointer">
              <img src="/kocakne-image.png" alt="" />
            </div>
            <div className=" w-full h-auto flex flex-col justify-center items-center px-4 py-2 sm:pt-2 sm:py-0">
              <h2 className="text-xl font-bold sm:text-3xl">Koca Kne</h2>
              <p className="text-base sm:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                assumenda eum error, eius iure nesciunt nemo exercitationem a
                non vitae?
              </p>
            </div>
            <div className="hidden sm:flex sm:flex-row justify-center items-center w-full text-lg px-1 sm:px-4 gap-2 sm:gap-6 md:gap-4">
              <span className="p-2 underline rounded-lg">React js</span>
              <span className="p-2 underline rounded-lg">JavaScript</span>
              <span className="p-2  underline rounded-lg">Tailwind CSS</span>
            </div>
            <div className="w-full flex flex-row justify-around sm:justify-between items-center px-4 sm:px-8 py-3 md:py-1">
              <button className="shadow-xl rounded-lg px-6 text-black bg-gray-100 border-r-4 border-b-4 border-gray-200 hover:border-gray-300 ">
                Demo
              </button>
              <button className="shadow-xl rounded-lg px-6 text-black bg-gray-100 border-r-4 border-b-4 border-gray-200 hover:border-gray-300 ">
                Source
              </button>
            </div>
          </div>

          {/* fourth */}
          <div className="w-auto h-auto sm:w-[90%] sm:h-auto md:w-[47%] lg:max-w-2xl xl:w-[30%] pt-2 pb-3 flex flex-col items-center justify-around shadow-2xl rounded-lg border border-gray-100 hover:border-gray-200">
            <div className="bg-gray-200 w-[95%] h-[50%] flex items-center justify-center border rounded-lg cursor-pointer">
              <img src="/kocakne-image.png" alt="" />
            </div>
            <div className=" w-full h-auto flex flex-col justify-center items-center px-4 py-2 sm:pt-2 sm:py-0">
              <h2 className="text-xl font-bold sm:text-3xl">Koca Kne</h2>
              <p className="text-base sm:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                assumenda eum error, eius iure nesciunt nemo exercitationem a
                non vitae?
              </p>
            </div>
            <div className="hidden sm:flex sm:flex-row justify-center items-center w-full text-lg px-1 sm:px-4 gap-2 sm:gap-6 md:gap-4">
              <span className="p-2 underline rounded-lg">React js</span>
              <span className="p-2 underline rounded-lg">JavaScript</span>
              <span className="p-2 underline rounded-lg">Tailwind CSS</span>
            </div>
            <div className="w-full flex flex-row justify-around sm:justify-between items-center px-4 sm:px-8 py-3 md:py-1">
              <button className="shadow-xl rounded-lg px-6 text-black bg-gray-100 border-r-4 border-b-4 border-gray-200 hover:border-gray-300 ">
                Demo
              </button>
              <button className="shadow-xl rounded-lg px-6 text-black bg-gray-100 border-r-4 border-b-4 border-gray-200 hover:border-gray-300 ">
                Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
