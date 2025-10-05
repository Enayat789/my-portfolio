import NavRoutes from "./NavRoutes";
import ContactBtn from "../ui/ContactBtn";

const NavDesktop = () => {
  return (
    <div className="hidden sm:flex sm:w-[60%] md:w-[55%] lg:w-[45%] font-mono justify-between items-center">
      <ul className="flex md:w-[70%] justify-evenly space-x-6 md:space-x-8 text-white font-bold">
        {NavRoutes.map((link, index) => (
          <li key={index}>
            <a className="cursor-pointer">{link.title}</a>
          </li>
        ))}
      </ul>
      <ContactBtn />
    </div>
  );
};

export default NavDesktop;
