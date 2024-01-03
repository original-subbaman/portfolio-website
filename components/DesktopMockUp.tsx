interface DesktopMockUpProps {
  imgLink: string;
}

export const DesktopMockUp = ({ imgLink: siteLink }: DesktopMockUpProps) => {
  return (
    <div className="w-full h-full mx-4 md:ml-32">
      <iframe src={siteLink} className="w-full h-full md:h-5/6" />
    </div>
  );
};
