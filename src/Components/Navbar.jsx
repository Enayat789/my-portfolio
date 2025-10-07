import React, { useState } from "react";

import NavDesktop from "./Navbar/NavDesktop";
import NavMobile from "./Navbar/NavMobile";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="w-[80vw] m-auto bg-gradient-to-r from-gray-950 to-gray-900 flex justify-between items-center px-6 sm:px-8 py-3 mt-2 rounded-lg border border-gray-600">
      {/* Logo */}
      <h2 className="cursor-pointer text-pink-400 text-xl sm:text-2xl font-serif font-bold italic">
        ENAYAT
      </h2>

      {/* Navlinks  */}
      <NavDesktop />

      {/* Mobile Menu */}
      <NavMobile isOpen={isOpen} setOpen={setOpen} />
    </nav>
  );
}
