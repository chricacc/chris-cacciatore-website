
import Toolbox from "../components/Toolbox";
import { FaStar, FaArrowRight } from "react-icons/fa";
import StaticBackground from "../components/StaticBackground";


function Home() {

    let tools = [
        { name: "Docker", imgUrl: "docker.svg", link: "https://www.docker.com/" },
        { name: "Quarkus", imgUrl: "quarkus.png", link: "https://quarkus.io/", certificationExpiryDate: "2025-12-31" },
        { name: "OpenShift", imgUrl: "openshift.png", link: "https://www.redhat.com/en/technologies/cloud-computing/openshift", certificationExpiryDate: "2025-12-31" },
        { name: "Keycloak", imgUrl: "keycloak.svg", link: "https://www.keycloak.org/" },
        { name: "Tailwind", imgUrl: "tailwind.svg", link: "https://tailwindcss.com" },
        { name: "React", imgUrl: "react.svg", link: "https://react.dev/" },
        { name: "Vite", imgUrl: "vite.svg", link: "https://vitejs.dev/" }
    ];

    return (
        <div className="page-container">
            <StaticBackground />
            <div className="relative mx-8 pt-4 md:m-16 md:pt-0">
                <h1 className="text-5xl sm:text-8xl font-bold">Hi,</h1>
                <h1 className="text-5xl sm:text-8xl font-bold">I'm Chris,</h1>
                <h1 className="text-5xl sm:text-8xl font-bold">Software Engineer</h1>
                <p className="mt-8 ml-1">I have been building IT systems for about 10 years using a great variety of technologies.</p>
                <h2 className="mt-8 text-xl sm:text-xl font-bold">My Ideal Toolbox</h2>
                <Toolbox tools={tools} />
                <div className="mt-8 flow-root flex align-center">
                    <span className="inline-flex text-blue-600 mr-1"><FaStar size="15" /> </span>
                    <span className="inline-flex mr-1"><FaArrowRight size="12" /> </span>
                    <span className="inline-flex"> I passed official certifications for these</span>
                </div>
            </div>

        </div>
    );
}

export default Home;