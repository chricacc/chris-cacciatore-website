import { FaUserGraduate } from "react-icons/fa";
import Diploma from "./Diploma";

function Education({ diplomas }) {
    return (
        diplomas &&
        <div className="resume-block">
            <div className="text-4xl font-bold mb-4 flex">
                <span className="mr-4"> <FaUserGraduate /> </span>
                <span>Formation</span>
            </div>

            <div className="">
                {
                    diplomas.map((diploma, index) => {
                        return (<Diploma diploma={diploma} key={index + 1} />)
                    })
                }
            </div>
        </div>
    );
}

export default Education;