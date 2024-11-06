import { FaStar } from "react-icons/fa";

function Skill({ name, level, certificationExpiryDate }) {
    const style = {
        width: level + "%"
    };
    let today = new Date();
    certificationExpiryDate = new Date(certificationExpiryDate);
    let certificationStillValid = certificationExpiryDate > today;

    return (
        <div className="mb-3 xl:mb-4">
            <div className="flex justify-between mb-1">
                <div className="flex">
                    {certificationStillValid && <span className="mr-1 pt-1 text-blue-500"><FaStar /></span>}
                    <span className="text-base font-medium">
                        {name}
                    </span>
                </div>
                <span className="text-sm font-medium">{level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 xl:h-2.5">
                <div className="bg-blue-600 h-2 xl:h-2.5 rounded-full" style={style}></div>
            </div>
        </div>
    );
}

export default Skill;