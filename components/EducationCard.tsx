import { BlurDiv } from "./common/BlurDiv";

interface EducationCardProps {
  school: string;
  degree: string;
  date: string;
  location?: string;
}

export const EducationCard = ({
  school,
  degree,
  date,
  location,
}: EducationCardProps) => {
  return (
    <BlurDiv className="bg-white py-4 w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-base text-gray-800">{school}</span>
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs text-gray-500">{degree}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">{location}</span>
        <span>•</span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
    </BlurDiv>
  );
};
