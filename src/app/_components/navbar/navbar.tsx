"use client";

import { useState } from "react";
import { Instagram, Menu, PawPrint, X } from "lucide-react";
import Link from "next/link";
import { StorwayLogo } from "../icons/StorwayLogo";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickAbout = () => {};
  const handleClickContact = () => {};
  return (
    <nav className=" bg-slate-100 fixed z-10 w-full px-6 shadow-lg h-auto ">
      <div className="flex w-full items-center justify-between ">
        <Link className="flex justify-center items-center gap-2" href="/">
          <StorwayLogo />
          {/* <PawPrint color="black" /> */}
          {/* <h1 className="text-4xl">Storway</h1> */}
        </Link>

        <div className="hidden space-x-6 md:flex text-2xl">
          <Link href="/" className="cursor-pointer hover:text-gray-400">
            Home
          </Link>
          <a
            href="#"
            className="cursor-pointer hover:text-gray-400"
            onClick={handleClickContact}
          >
            Contact
          </a>
        </div>

        <button className="md:hidden" onClick={handleClick}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-10 z-20 mt-4 flex w-full flex-col items-center justify-center space-y-4 border-t border-gray-500 bg-gray-100 px-2 py-4 shadow-lg md:hidden">
          <a
            href="#"
            className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
          >
            Home
          </a>

          <a
            href="#"
            className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
            onClick={handleClickContact}
          >
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
};
