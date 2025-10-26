import React from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionWrapper = ({
  id,
  className = "",
  children,
}: SectionWrapperProps) => (
  <section
    id={id}
    className={`flex flex-col justify-center gap-4 text-black md:text-start md:grow px-16 ${className}`.trim()}
  >
    {children}
  </section>
);
