import SidebarIcon from "./SidebarIcon";
import { FaHome, FaBook, FaGithub } from "react-icons/fa";

function Sidebar() {

    return (
        <>
            <div className="sm:relative z-0 px-2 sm:p-0 min-h-16 sm:min-h-screen w-screen sm:w-16 flex flex-row sm:flex-col bg-gray-900 text-gray-400 shadow-3xl">
                <SidebarIcon icon={<FaHome size="25" />} path="/" />
                <SidebarIcon icon={<FaBook size="25" />} text="Resume" path="/resume" />
                <SidebarIcon icon={<FaGithub size="25" />} text="GitHub" path="https://github.com/chricacc" external="true" />
            </div>
        </>
    );
}

export default Sidebar;