import React from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  title?: string;
  children: React.ReactNode;
}

export const SectionWrapper = ({
  id,
  className = "",
  title,
  children,
}: SectionWrapperProps) => (
  <section
    id={id}
    className={`flex flex-col justify-center 
        gap-4 text-black scroll-mt-16
        md:text-start md:grow px-16 ${className}`.trim()}
  >
    {title && <h2 className="text-gray-500 font-mono"># {title}</h2>}
    {children}
  </section>
);
