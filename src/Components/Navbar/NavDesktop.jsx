import React from "react";
import NavRoutes from "./NavRoutes";
import ContactBtn from "../ui/ContactBtn";

const NavDesktop = () => {
  return (
    <div className="hidden sm:flex sm:w-[60%] md:w-[55%] lg:w-[45%] justify-between items-center">
      <ul className="flex md:w-[70%] justify-evenly space-x-6 md:space-x-8 text-black font-bold">
        {NavRoutes.map((link, index) => (
          <li key={index}>
            <a className="hover:text-gray-600 text-black cursor-pointer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <ContactBtn />
    </div>
  );
};

export default NavDesktop;
