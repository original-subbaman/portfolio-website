"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavItem = ({
  href,
  text,
  active,
}: {
  href: string;
  text: string;
  active?: boolean;
}) => (
  <a
    href={href}
    className={`text-sm  ${
      active ? " text-black  dark:text-white font-bold " : ""
    }`}
  >
    {text}
  </a>
);

const links = [
  { href: "#bio", text: "Bio" },
  { href: "#skills", text: "Skills" },
  { href: "#experience", text: "Experience" },
  { href: "#projects", text: "Projects" },
  { href: "#education", text: "Education" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const link of links) {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = link.href;
            break;
          }
        }
      }
      // If near the bottom, highlight 'Education'
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        current = "#education";
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.8, y: -30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="container max-w-md mx-auto h-10 px-10 
      text-black dark:text-gray-200 rounded-full 
      sticky top-0 left-0 
      bg-white/30 backdrop-blur-sm border border-white/60 shadow-2xl 
      dark:bg-black/30 dark:border-white/10 dark:shadow-xl
      flex items-center justify-between z-[100]"
    >
      {links.map((link) => (
        <NavItem
          key={link.href}
          href={link.href}
          text={link.text}
          active={activeSection === link.href}
        />
      ))}
    </motion.nav>
  );
};
