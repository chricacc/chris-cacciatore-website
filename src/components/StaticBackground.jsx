import { FaCode } from "react-icons/fa";

function StaticBackground() {
    return (
        <>
            <div className="scale-0 md:scale-100 fixed sm:top-[-150px] right-[-150px] text-center text-gray-800">
                <FaCode size="1000" />
            </div>
            <div className="md:scale-0 fixed sm:top-[-150px] right-[-150px] text-center text-gray-800">
                <FaCode size="500" />
            </div>
        </>
    );
}

export default StaticBackground;