import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Skill({ skill }) {
    let today = new Date();
    let certificationExpiryDate = new Date(skill.certificationExpiryDate);
    let certificationStillValid = certificationExpiryDate > today;

    return (
        <div className="skill">
            {certificationStillValid &&
                (
                    <span className="text-blue-600 absolute top-[-10px] right-[-10px]">
                        <FaStar size="30" />
                    </span>
                )
            }
            <Link to={skill.link} target="_blank">
                <img src={skill.imgUrl} className="h-16 w-16" />
                <h1 className="text-center mt-2">{skill.name}</h1>
            </Link>
        </div>
    );
}

export default Skill;