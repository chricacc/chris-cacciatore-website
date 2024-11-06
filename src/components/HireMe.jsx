import { FaAddressBook } from "react-icons/fa";
import { Link } from "react-router-dom";

function HireMe() {
    return (
        <Link to="https://fr.linkedin.com/in/christopher-cacciatore-67341685" target="_blank">
            <div className="flex flex-wrap items-center justify-center h-24 mt-12 text-center bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300 cursor-pointer text-4xl">
                <FaAddressBook />
                <span className="ml-4">Embauchez-moi</span>
            </div>
        </Link>
    );
}

export default HireMe