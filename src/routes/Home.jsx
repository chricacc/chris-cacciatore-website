import { FaCode } from "react-icons/fa";

function Home() {
    return (
        <div className="page-container">
            <div className="scale-0 lg:scale-100 fixed sm:top-[-150px] right-[-150px] text-center text-gray-800">
                <FaCode size="1000" />
            </div>
            <div className="lg:scale-0 fixed sm:top-[-150px] right-[-150px] text-center text-gray-800">
                <FaCode size="500" />
            </div>
            <div className="relative mx-4 pt-4 sm:m-16 sm:pt-0">
                <h1 className="text-5xl sm:text-8xl font-bold">Hi,</h1>
                <h1 className="text-5xl sm:text-8xl font-bold">I'm Chris,</h1>
                <h1 className="text-5xl sm:text-8xl font-bold">Software Engineer</h1>
            </div>
        </div>
    );
}

export default Home;