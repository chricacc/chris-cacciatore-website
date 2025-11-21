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
            <div className="flex flex-wrap my-4 gap-2">

                {
                    job.environment.map((tool, index) => {
                        return (<span className="bg-gray-500/50 shadow-lgl px-2 py-1 rounded-md text-xs font-bold">{tool}</span>)
                    })
                }

            </div>
        </div >
    );
}

export default Job;