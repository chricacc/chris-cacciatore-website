import SidebarIcon from "./SidebarIcon";
import { FaHome, FaBook, FaGithub, FaLinkedin } from "react-icons/fa";

function Sidebar() {

    return (
        <>
            <div className="fixed top-0 left-0 z-50 px-2 md:p-0 min-h-16 md:min-h-screen w-screen md:w-16 flex flex-row md:flex-col bg-gray-900 text-gray-400 shadow-3xl">
                <SidebarIcon icon={<FaHome size="25" />} path="/" />
                <SidebarIcon icon={<FaBook size="25" />} text="CV" path="/resume" />
                <SidebarIcon icon={<FaGithub size="25" />} text="GitHub" path="https://github.com/chricacc" external="true" />
                <SidebarIcon icon={<FaLinkedin size="25" />} text="LinkedIn" path="https://fr.linkedin.com/in/christopher-cacciatore-67341685" external="true" />
            </div>
        </>
    );
}

export default Sidebar;