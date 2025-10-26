import { SectionWrapper } from "./common/SectionWrapper";
import { EducationCard } from "./EducationCard";

export const EducationSection = () => {
  return (
    <SectionWrapper id="education" title="Education">
      <EducationCard
        school="Jain University, School of Engineering and Technology"
        degree="Bachelor of Technology (Specialization in Cloud Computing and Computer Science)"
        date="2017 - 2021"
        location="Bangalore, India"
      />
    </SectionWrapper>
  );
};
