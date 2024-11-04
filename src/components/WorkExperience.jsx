import Job from "./Job";

function WorkExperience({ jobs }) {
    return (
        jobs &&
        <div className="resume-block">
            <h2 className="text-4xl font-bold mb-4">Expérience professionnelle</h2>
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