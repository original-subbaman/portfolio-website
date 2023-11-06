"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
        <motion.span
          className="text-gray-500 font-bold text-4xl md:text-xl font-thin"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Hi, I&apos;m{" "}
          <span className="text-white !text-bold">Abhishek Subba.</span>
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          className="text-4xl md:text-7xl font-thin"
        >
          A Web &
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="text-4xl md:text-7xl mb-4 font-thin"
        >
          Mobile Developer
        </motion.p>

        <div className="flex justify-center md:justify-start">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            src="/ic_android.png"
            alt="android"
            className="responsive-image"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
            src="/ic_flutter.png"
            alt="flutter"
            className="responsive-image"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
            viewport={{ once: true }}
            src="/ic_react.png"
            alt="react"
            className="responsive-image"
          />
        </div>
      </div>
      <div className="flex md:hidden order-2 mt-4 gap-4 flex-wrap justify-center">
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
