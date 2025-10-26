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
    className={`flex flex-col justify-center gap-4 text-black md:text-start md:grow px-16 ${className}`.trim()}
  >
    <h2 className="font-bold">{title}</h2>
    {children}
  </section>
);
