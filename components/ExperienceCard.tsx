import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import jobIcon from "../public/ic_job.png";
import "react-vertical-timeline-component/style.min.css";
import { BsFillBriefcaseFill } from "react-icons/bs";
interface ExperienceCardProps {
  role: string;
  description: string;
  date: string;
  company: string;
}
export const ExperienceCard = ({
  role,
  description,
  company,
  date,
}: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      visible={true}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "10px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #fff" }}
      icon={<BsFillBriefcaseFill color="#1D1836" />}
      iconStyle={{ background: "#FFFF" }}
      date={date}
    >
      <h3 className="vertical-timeline-element-title">{role}</h3>
      <h4 className="vertical-timeline-element-subtitle">{company}</h4>
      <p className="">{description}</p>
    </VerticalTimelineElement>
  );
};
