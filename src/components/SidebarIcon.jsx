import { Link } from "react-router-dom";

function SidebarIcon({ icon, text = null, path = null, external = null }) {

    return (
        <>
            <div className="sidebar-icon group">
                {path &&
                    <Link to={path} target={external && "target=\"_blank\""}>{icon}</Link>
                }
                {text &&
                    <span className="sidebar-icon-tooltip group-hover:scale-100">
                        {text}
                    </span>
                }
            </div >
        </>
    );
};

export default SidebarIcon;