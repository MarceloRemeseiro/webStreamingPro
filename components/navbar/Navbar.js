import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { BasicButton } from "../buttons/buttons";
import NavLinks from "./Navlinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-dark via-dark to-black fixed top-0 left-0 w-full z-50">
      <div className="flex items-center font-medium justify-around">
        <div className="bg-dark z-50 p-0  md:w-auto w-full flex justify-between">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              className="md:cursor-pointer "
              height="80px"
              width="80px"
            />
          </Link>
          <div
            className="text-4xl md:hidden text-white pt-6 px-4"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] ">
          <li>
            <Link href="/">
              <a className="py-7 px-3 inline-block hover:text-secondary">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="blog">
              <a className="py-7 px-3 inline-block hover:text-secondary">
                Blog
              </a>
            </Link>{" "}
          </li>
          <li>
            <Link href="youtube">
              <a className="py-7 px-3 inline-block hover:text-secondary">
                Youtube
              </a>
            </Link>{" "}
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <BasicButton>Contacta</BasicButton>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-dark fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li
            onClick={() => {
              setOpen();
            }}
          >
            <Link href="/">
              <a className="py-7 px-3 inline-block">Home</a>
            </Link>{" "}
          </li>
          <li
            onClick={() => {
              setOpen();
            }}
          >
            <Link href="blog">
              <a className="py-7 px-3 inline-block">Blog</a>
            </Link>{" "}
          </li>
          <li
            onClick={() => {
              setOpen();
            }}
          >
            <Link href="youtube">
              <a className="py-7 px-3 inline-block">Youtube</a>
            </Link>{" "}
          </li>
          <NavLinks />

          <div className="py-5">
            <BasicButton>Contacta</BasicButton>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
