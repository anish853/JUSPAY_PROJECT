import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RightBar from "./RightBar";
function SidebarTopbar() {
  return (
    <>
      <div className="flex items-stretch">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </div>
        <RightBar />
      </div>
    </>
  );
}
export default SidebarTopbar;