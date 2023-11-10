"use client";

import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav
      className="w-full h-16 px-8 sticky top-0 left-0 fade-in-nav bg-white 
    bg-opacity-10 backdrop-filter backdrop-blur-lg border-b border-gray-200 hidden md:block"
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <p className="text-xl">Abhishek Subba</p>
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <li className="ml-10 border-b-2 border-transparent hover:border-white text-xl cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="ml-10 hover:border-b text-xl">
              <a href="#bio">Bio</a>
            </li>
            <li className="ml-10 hover:border-b text-xl">
              <a href="#skills">Skills</a>
            </li>
            <li className="ml-10 hover:border-b text-xl">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
