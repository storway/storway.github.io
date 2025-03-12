"use client";

import { useState } from "react";
import Link from "next/link";
import { StorwayLogo } from "../icons/StorwayLogo";
import { CloseIcon } from "../icons/CloseIcon";
import { MenuIcon } from "../icons/MenuIcon";

interface NavbarProps {
  scrollToContact: () => void;
  scrollToTop: () => void;
}

export const Navbar = ({ scrollToContact, scrollToTop }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickHome = (e: { preventDefault: () => void }) => {
    scrollToTop();
    setIsOpen(false);
  };

  const handleClickContact = () => {
    scrollToContact();
    setIsOpen(false);
  };
  return (
    <nav className=" bg-white text-gray-800 flex justify-center items-center fixed z-10 w-full px-6 shadow-md h-20 ">
      <div className="flex w-full items-center justify-between ">
        <Link className="flex justify-center items-center gap-2" href="/">
          <StorwayLogo width={70} />
          <h1 className="text-4xl font-semibold">Storway</h1>
        </Link>

        <div className="hidden space-x-6 md:flex text-2xl">
          <a
            href="#"
            className="cursor-pointer hover:text-gray-400 hover:underline"
            onClick={handleClickHome}
          >
            Home
          </a>
          <a
            href="#"
            className="cursor-pointer hover:text-gray-400 hover:underline"
            onClick={handleClickContact}
          >
            Contact
          </a>
        </div>

        <button className="md:hidden" onClick={handleClick}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-10 z-20 mt-4 flex w-full flex-col items-center justify-center space-y-4 border-t border-gray-500 bg-gray-100 px-2 py-4 shadow-lg md:hidden">
          <a
            href="#"
            className="rounded-sm px-2 py-2 hover:bg-gray-500 hover:text-white"
            onClick={handleClickHome}
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
