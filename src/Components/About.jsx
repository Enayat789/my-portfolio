export default function About() {
  return (
    <div className="w-full h-auto flex flex-col gap-8 py-12 px-6">
      {/* <span className="block w-[20%] h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mt-0"></span> */}

      <div className="w-full flex max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto items-center">
        <div className=" p-0.5 rounded-lg bg-gradient-to-r from-pink-500 to-indigo-700">
          <button className="bg-gradient-to-r p-2 px-3 rounded-lg from-gray-950 to-gray-900">
            About Me
          </button>
        </div>
        <span className="block w-44 h-1 bg-gradient-to-r from-indigo-700 to-pink-500 rounded-r-lg mt-1"></span>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
          I'm a passionate{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-700">
            Frontend Developer{" "}
          </span>
          dedicated to crafting modern, sleek, and intuitive web applications.
          With expertise in
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-700">
            {" "}
            React.js, JavaScript, HTML, CSS, and Tailwind CSS
          </span>
          , I focus on creating seamless user experiences.
        </p>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
          Currently, I'm expanding my skills in
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-700">
            {" "}
            Next.js
          </span>
          , allowing me to develop even more scalable and high-performance web
          solutions.
        </p>
      </div>

      {/* Accent Line */}
      <div className="w-full flex justify-end max-w-6xl mx-auto sm:pl-6 lg:pl-12 xl:pl-0">
        <div className="w-20 sm:w-24 md:w-32 lg:w-1/2 h-1 bg-gradient-to-r from-indigo-950 to-indigo-600 rounded-full shadow-md"></div>
      </div>
    </div>
  );
}
