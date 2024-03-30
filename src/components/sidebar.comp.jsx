import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  const data = {
    contents: [{ path: "/classes", name: "classes" }],
  };
  return (
    <>
      <div className="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
        <Link
          to="/"
          className="flex items-center pb-4 border-b border-b-gray-800"
        >
          <h2 className="font-bold text-2xl">
            RIP <span className="bg-red text-white px-2 rounded-md">SY</span>
          </h2>
        </Link>
        <ul className="mt-4">
          {data.contents.map((contents, index) => (
            <li className="mb-1 group" key={index}>
              <Link
                to={contents.path}
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <span className="text-sm">{contents.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
