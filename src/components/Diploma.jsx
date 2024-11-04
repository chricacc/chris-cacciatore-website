import { FaUserGraduate } from "react-icons/fa";

function Diploma({ diploma }) {

    return (
        <div className="diploma mt-4">
            <div className="flex flex-wrap">
                <div className="diploma-title">{diploma.title}</div>
                <div className="diploma-specialty ml-2">- {diploma.specialty}</div>
            </div>
            <div className="">{diploma.school} - {diploma.year}</div>
        </div>
    );
}

export default Diploma;