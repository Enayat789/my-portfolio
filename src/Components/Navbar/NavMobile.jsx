import NavRoutes from "./NavRoutes";
import ContactBtn from "../ui/ContactBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NavMobile = ({ isOpen, setOpen }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-6 text-white text-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 sm:hidden`}
      >
        {NavRoutes.map((link, index) => (
          <a
            key={index}
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            {link.title}
          </a>
        ))}

        <ContactBtn />
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className="sm:hidden flex cursor-pointer text-white"
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
      </div>

      {/* Click Outside to Close Mobile Menu */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-transparent"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default NavMobile;
