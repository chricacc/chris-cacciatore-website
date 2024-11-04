import Diploma from "./Diploma";

function Education({ diplomas }) {
    return (
        diplomas &&
        <div className="resume-block">
            <h2 className="text-4xl font-bold mb-4">Formation</h2>
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