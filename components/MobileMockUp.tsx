interface MobileMockUpProps {
  imgLink: string;
}
export const MobileMockUp = ({ imgLink }: MobileMockUpProps) => {
  return (
    <div className="md:mt-0 mt-96 h-screen">
      <div className="mx-auto my-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[540px] w-[300px] shadow-xl">
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[500px] bg-white dark:bg-gray-800">
          <img src={imgLink} className="w-[272px] h-[572px]" alt="" />
        </div>
      </div>
    </div>
  );
};
