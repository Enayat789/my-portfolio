export default function Work() {
  return (
    <div className="w-full flex flex-col gap-8 py-12 px-6 ">
      <div className="w-full flex max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto items-center">
        <button className="bg-gradient-to-r from-gray-950 to-gray-900 border-indigo-800 border-spacing-2">
          Projects
        </button>
        <span className="block w-44 h-1 bg-gradient-to-r from-blue-600 to-indigo-900 rounded-r-lg mt-1"></span>
      </div>

      <div className="w-full max-w-6xl sm:pl-6 lg:pl-12 xl:pl-0 mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
          I've highlighted my experience using cutting-edge frontend
          technologies to
          <span className="font-semibold">
            {" "}
            create dynamic, responsive web applications{" "}
          </span>
          in this section. Each entry demonstrates my ability to develop
          user-focused solutions using{" "}
          <span className="font-semibold ">
            React.js, JavaScript, Tailwind CSS, and other technologies{" "}
          </span>
          whether they are part of collaborative work, personal projects, or
          freelance work.{" "}
        </p>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
          My objective is to use these technologies to create smooth and
          captivating experiences while constantly trying to stay ahead of the
          curve in the rapidly changing field of web development.
        </p>
      </div>

      {/* Accent Line */}
      <div className="w-full flex justify-end max-w-6xl mx-auto sm:pl-6 lg:pl-12 xl:pl-0">
        <div className="w-20 sm:w-24 md:w-32 lg:w-1/2 h-1 bg-gradient-to-r from-indigo-950 to-indigo-600 rounded-full shadow-md"></div>
      </div>
    </div>
  );
}
