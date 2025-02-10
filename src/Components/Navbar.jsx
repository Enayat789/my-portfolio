import React, { useState } from "react";

import NavDesktop from "./Navbar/NavDesktop";
import NavMobile from "./Navbar/NavMobile";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="w-[100vw] bg-gradient-to-r from-slate-400 to-slate-300 flex justify-between items-center px-6 sm:px-8 py-4 sticky top-0 z-50">
      {/* Logo */}
      <h2 className="cursor-pointer text-white text-xl sm:text-2xl font-serif font-bold italic">
        ENAYAT
      </h2>

      {/* Navlinks  */}
      <NavDesktop />

      {/* Mobile Menu */}
      <NavMobile isOpen={isOpen} setOpen={setOpen} />
    </nav>
  );
}
