import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Tool({ tool }) {
    let today = new Date();
    let certificationExpiryDate = new Date(tool.certificationExpiryDate);
    let certificationStillValid = certificationExpiryDate > today;

    return (
        <div className="tool">
            {certificationStillValid &&
                (
                    <span className="text-blue-600 absolute top-[-10px] right-[-10px]">
                        <FaStar size="30" />
                    </span>
                )
            }
            <Link to={tool.link} target="_blank">
                <img src={tool.imgUrl} className="h-16 w-16" />
                <h1 className="text-center mt-2">{tool.name}</h1>
            </Link>
        </div>
    );
}

export default Tool;