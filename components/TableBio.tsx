export const TableBio = () => {
  return (
    <div
      className="flex justify-start
     rounded-lg drop-shadow-solid border border-black border-t-2 border-l-2 border-r-8 border-b-8"
    >
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="text-sm text-left text-gray-500">
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                Name
              </th>
              <td className="px-6 py-4">Abhishek Subba</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                Qualification
              </th>
              <td className="px-6 py-4">
                Bachelor of Technology in <br /> Computer Scinece & Engineering
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                Country
              </th>
              <td className="px-6 py-4">India</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                Technologies
              </th>
              <td className="px-6 py-4">
                Android, ReactJS, NextJs,
                <br />
                Spring, Express/NodeJS
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
