import { useState } from "react";
import Logo from "./nav/Logo";
import NavItem from "./nav/NavItem";

const Nav = () => {
  const links = [
    { id: "chat", link: "home" },
    { id: "about", link: "about" },
    { id: "contact", link: "contact" },
    { id: "download", link: "download app" },
  ];
  const [isHide, setIsHide] = useState(true);
  return (
    <div className="ud-header bg-transparent absolute top-0 left-0 z-40 w-full flex items-center">
      <div className="relative w-full">
        <div className="flex sm:px-4 px-8 justify-between items-center w-full">
          <Logo />
          <div>
            <button
              onClick={() => setIsHide(!isHide)}
              id="navbarToggler"
              className="block absolute right-4 top-1/2 -translate-y-1/2 md:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
            >
              <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
              <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
              <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
            </button>
            <nav
              id="navbarCollapse"
              className={`absolute py-5 md:py-0 md:px-4 xl:px-6 bg-white md:bg-transparent shadow-md rounded-md max-w-[250px] w-full md:max-w-full md:w-full right-4 top-full ${
                isHide ? "hidden" : ""
              } md:block md:static md:shadow-none`}
            >
              <ul className="blcok md:flex">
                {links.map((item, index) => (
                  <NavItem
                    link={item.link}
                    id={item.id}
                    key={index}
                    setIsHide={setIsHide}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
