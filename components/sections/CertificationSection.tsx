import Image from "next/image";
import { SectionWrapper } from "../common/SectionWrapper";
import AWSDva from "../../public/aws-dva.png";

interface CertItemProps {
  imgSrc: string;
  alt?: string;
  link: string;
}

const CertItem: React.FC<CertItemProps> = ({
  imgSrc,
  alt = "Certification",
  link,
}) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <Image
      src={imgSrc}
      alt={alt}
      width={80}
      height={80}
      className="rounded-lg hover:scale-110 transition-transform duration-200 cursor-pointer"
    />
  </a>
);

const CertificationSection = () => {
  return (
    <SectionWrapper id="certificate" title="Certificates">
      <div className="flex gap-4 flex-wrap">
        <CertItem
          imgSrc="/aws-dva.png"
          link="https://www.credly.com/badges/692d484e-fa1c-4042-8199-e35412b7485d/public_url"
          alt="AWS Certified Developer – Associate"
        />
        {/* Add more CertItem components as needed */}
      </div>
    </SectionWrapper>
  );
};

export default CertificationSection;
