"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export const WelcomeSection = () => {
  const [isMobile, setIsMobile] = useState();
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaChange = (e: any) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  });
  return (
    <section
      className="flex flex-col md:flex-row md:mx-16 items-center justify-center h-screen snap-center"
      id="home"
    >
      <div
        className="w-full 
        text-center 
        flex 
        flex-col 
        justify-center 
        md:text-start 
        md:grow 
        text-white 
        px-8 md:p-16 order-1 md:order-1"
      >
        <span className="text-gray-500 font-bold text-4xl md:text-3xl">
          Hi, I&apos;m a
        </span>
        <p className="text-6xl md:text-7xl md:w-1/2 mb-4">
          Web & Mobile <br /> Developer
        </p>
        <div className="flex justify-center md:justify-start">
          <img
            src="/ic_android.png"
            alt="android"
            className="responsive-image"
          />
          <img
            src="/ic_flutter.png"
            alt="flutter"
            className="responsive-image"
          />
          <img src="/ic_react.png" alt="react" className="responsive-image" />
        </div>
      </div>
      <div className="flex md:hidden order-2 mt-4 gap-4 flex-wrap">
        <button className="text-white px-4 py-2 border border-purple-500 hover:bg-purple-500 rounded-md">
          <a href="#bio">About</a>
        </button>
        <button className="text-white px-4 py-2 border border-green-500 hover:bg-green-500 rounded-md">
          <a href="#skills">Skills</a>
        </button>
        <button className="text-white px-4 py-2 border border-green-500 hover:bg-green-500 rounded-md">
          <a href="#projects">Projects</a>
        </button>

        <button className="text-white px-4 py-2 border border-teal-500 hover:bg-teal-500 rounded-md">
          <a href="#contact">Contact me</a>
        </button>
      </div>
      <div className="flex items-center justify-center mb-10 hidden md:block md:grow md:order-2 md:mr-12">
        <Image src="/cover.png" width={1000} height={1000} alt="computer" />
      </div>
    </section>
  );
};
