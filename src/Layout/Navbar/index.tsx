import { useState } from "react";
import { Link } from "react-router-dom";

interface MenuProps {
  title: string,
  src: string,
  link: string,
  gap?: boolean
}

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const Menus: MenuProps[] = [
    { title: "Dashboard", src: "Chart_fill",  link: '/'},
    { title: "Registro", src: "Chat",  link: '/registers'},
    // { title: "Accounts", src: "User", gap: true, link: '/records'},
    // { title: "Schedule ", src: "Calendar", link: '/records'},
    // { title: "Search", src: "Search", link: '/records'},
    // { title: "Analytics", src: "Chart", link: '/records'},
    // { title: "Files ", src: "Folder", gap: true ,link: '/records'},
    // { title: "Setting", src: "Setting", link: '/records'},
  ];

  return (
    <div>
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-primary h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        {/* <div className="flex gap-x-4 items-center mt-10">
          <img
            src="/src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            } h-9`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Gas control
          </h1>
        </div> */}
        <ul className="pt-6">
          {Menus.map((menuItem, index) => (
            <li key={index}>
              <Link to={menuItem.link} className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
              ${menuItem.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}>
                <img src={`/src/assets/${menuItem.src}.png`} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {menuItem.title}
                </span>              
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavBar;