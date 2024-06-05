// import { Btn } from "./Btn";
import { Menu, Sprout, X } from "lucide-react";
import Btn from "./Btn";
import { useState } from "react";

export function NavBar() {
  let links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-sm w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="text-custom-light-green font-bold font-urbanist text-2xl flex cursor-pointer items-center">
            <span className="mr-1 text-custom-orange ">
              <Sprout size={32} />
            </span>
            Chiro
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? <X /> : <Menu />}
          </div>
          <ul
            className={`md:flex  md:items-center md:pb-0 pb-12  absolute md:static bg-white md:z-auto z-[-1] left-0  w-full md:w-auto  md:px-0 px-9 transition-all duration-500 ease-in ${
              open ? "top-10" : "-top-96"
            } `}
          >
            {links.map((link) => (
              <li className="md:ml-8 text-sm md:my-0 my-7 " key={link.name}>
                <a
                  href={link.href}
                  className="text-custom-light-green font-urbanist font-semibold hover:text-custom-orange"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Btn>Sign In</Btn>
          </ul>
        </div>
      </div>
    </>
  );
}
