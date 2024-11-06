import { FaBuilding } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

function Job({ job }) {

    return (
        <div className="job mb-8">
            <div className="job-title-wrapper">
                <div className="job-title">{job.title}</div>
            </div>
            <div className="flex flex-wrap mb-2">
                <span className="mr-2 mt-1"><FaBuilding /></span>
                <div className="font-bold">{job.company}</div>
                <div className="job-sector">- Secteur {job.sector}</div>
            </div>
            <div className="flex flex-wrap mb-2">
                <span className="mr-2 mt-1"><FaCalendarDays /></span>
                <div>{job.start} - {job.end}</div>
            </div>

            <div className="ml-8">
                <ul className="list-disc">
                    {
                        job.activities.map((activity, index) => {
                            return (<li>{activity}</li>)
                        })
                    }
                </ul>
            </div>
        </div >
    );
}

export default Job;