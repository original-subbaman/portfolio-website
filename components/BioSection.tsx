import Image from "next/image";
import { TableBio } from "./TableBio";

export const BioSection = () => {
  return (
    <section
      className="my-auto h-screen md:container-2xl  py-4 snap-start scroll-py-12"
      id="bio"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-24 h-full">
        <TableBio />
        <div className="max-w-xs px-4 text-center md:text-start order-1 md:order-2">
          <h1 className="text-white text-4xl mb-8 font-bold">About Me</h1>
          <p className="mb-4">
            Hello! I&apos;m Abhishek Subba. Aspiring software developer who can
            help you with the following:
          </p>
          <div className="flex mb-4">
            <ul className="max-w-md space-y-1 list-disc list-inside text-gray-400">
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
          </div>
        </div>
      </div>
    </section>
  );
};
