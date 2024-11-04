import { FaBuilding } from "react-icons/fa";
import Job from "./Job";

function WorkExperience({ jobs }) {
    return (
        jobs &&
        <div className="resume-block">
            <div className="text-4xl font-bold mb-4 flex">
                <span className="mr-4"> <FaBuilding /> </span>
                <span>Expérience professionnelle</span>
            </div>
            <div className="">
                {
                    jobs.map((job, index) => {
                        return (<Job job={job} key={index + 1} />)
                    })
                }
            </div>
        </div>
    );
}

export default WorkExperience;