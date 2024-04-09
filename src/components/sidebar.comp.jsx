import { Link, useNavigate } from "react-router-dom";
import { setItem } from "../utils/localStorage";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const logout = () => {
    setItem("token", "");
    navigate(".");
  };
  const data = {
    contents: [
      { path: "/classes", name: "Classes" },
      { path: "/building", name: "Building" },
    ],
  };
  return (
    <>
      <div className="fixed left-0 top-0 w-64 h-full bg-primary p-4 z-50 sidebar-menu transition-transform">
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
          <button
            className="btn absolute bottom-0 w-full left-0 rounded-none "
            onClick={logout}
          >
            Logout
          </button>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
