import "react-vertical-timeline-component/style.min.css";
import { BlurDiv } from "./common/BlurDiv";

interface ExperienceCardProps {
  role: string;
  description: string;
  date: string;
  company: string;
  location?: string;
  technologies?: string[];
}

export const ExperienceCard = ({
  role,
  description,
  company,
  date,
  location,
  technologies,
}: ExperienceCardProps) => {
  return (
    <BlurDiv className="bg-white rounded-lg w-full py-2 px-0 transition-transform duration-300 hover:translate-x-4">
      <div className="mb-1">
        <span className="font-semibold text-base text-gray-800">
          {role} at {company}{" "}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">({location})</span>
          <span>•</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
      </div>
      <p className="text-gray-00 text-sm mb-2">{description}</p>
      <div className="flex flex-wrap gap-2 text-xs text-gray-700 mt-2">
        {technologies &&
          technologies.map((tech, index) => (
            <span key={index} className="">
              {tech}
              {index < technologies.length - 1 ? "/" : ""}
            </span>
          ))}
      </div>
    </BlurDiv>
  );
};
