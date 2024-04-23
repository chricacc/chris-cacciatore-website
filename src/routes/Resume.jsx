import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Resume() {
    return (
        <div className="page-container">
            <div className="relative mx-4 sm:m-16 font-bold">
                <h1 className="text-8xl">Woops!</h1>
                <h2 className="text-4xl mt-8">There's nothing here :( ...for now!</h2>
                <p className="mt-8">I actually worked on some pretty big stuff, but this website is not finished yet :)</p>
                <p className="mt-8">If you want some info about me, here's my LinkedIn :</p>
                <div className="mt-8 text-blue-600 hover:text-gray-100">
                    <Link to="https://fr.linkedin.com/in/christopher-cacciatore-67341685" target="_blank">
                        <FaLinkedin size="80" />
                    </Link>
                </div>

            </div>
        </div >
    );
}

export default Resume;