"use client";
import { TableBio } from "./TableBio";
import { motion } from "framer-motion";

export const BioSection = () => {
  return (
    <section
      className="my-auto h-screen md:container-2xl  py-4 snap-start scroll-py-12"
      id="bio"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-24 h-full">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="box"
        >
          <TableBio />
        </motion.div>
        <div className="max-w-xs px-4 text-center md:text-start order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h1 className="text-white text-4xl mb-8 font-bold">About Me</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <p className="mb-4 fade-in-text">
              Hello! I&apos;m Abhishek Subba. Aspiring software developer who
              can help you with the following:
            </p>
          </motion.div>
          <motion.div
            className="flex mb-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <ul className="max-w-md space-y-1 list-disc list-inside">
              <li>
                Building mobile apps with clean architecture in native{" "}
                <span className="text-[#3DDC84] font-semibold">Android </span>
                or <span className="text-blue-400 font-semibold">Flutter</span>.
              </li>
              <li>
                Building responsive front end for you websites using{" "}
                <span className="text-blue-400 font-semibold">React</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
