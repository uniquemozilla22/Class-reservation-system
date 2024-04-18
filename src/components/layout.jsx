import Navigation from "./navigation.comp";
import Sidebar from "./sidebar.comp";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Sidebar />
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 min-h-screen transition-all main">
        <div className="py-2 px-6  flex items-center  shadow-black/5 sticky top-0 left-0 z-30 w-full">
          <button
            type="button"
            className="text-lg font-semibold sidebar-toggle"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
        <div style={{ paddingLeft: "18rem" }}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
