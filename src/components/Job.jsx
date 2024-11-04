import { FaBuilding } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

function Job({ job }) {

    return (
        <div className="job mt-6">
            <div className="text-2xl mb-2">{job.title}</div>
            <div className="flex flex-wrap mb-1">
                <span className="mr-2 mt-1"><FaBuilding /></span>
                <div className="font-bold">{job.company}</div>
            </div>
            <div className="flex flex-wrap mb-1">
                <span className="mr-2 mt-1"><FaCalendarDays /></span>
                <div>{job.start} - {job.end}</div>
            </div>
            <div>Secteur {job.sector}</div>
            <div className="ml-8">
                <ul className="list-disc">
                    {
                        job.activities.map((activity, index) => {
                            return (<li>{activity}</li>)
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Job;