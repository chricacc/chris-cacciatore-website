import { FaCode } from "react-icons/fa";
import Skills from "../components/Skills";
import { FaStar } from "react-icons/fa";


function Home() {

    let skills = [
        { name: "Docker", imgUrl: "public/docker.svg", link: "https://www.docker.com/" },
        { name: "Quarkus", imgUrl: "public/quarkus.png", link: "https://quarkus.io/" },
        { name: "OpenShift", imgUrl: "public/openshift.png", link: "https://www.redhat.com/en/technologies/cloud-computing/openshift", certificationExpiryDate: "2025-12-31" },
        { name: "Keycloak", imgUrl: "public/keycloak.svg", link: "https://www.keycloak.org/" },
        { name: "Tailwind", imgUrl: "public/tailwind.svg", link: "https://tailwindcss.com" },
        { name: "React", imgUrl: "public/react.svg", link: "https://react.dev/" },
        { name: "Vite", imgUrl: "public/vite.svg", link: "https://vitejs.dev/" }
    ];

    return (
        <div className="page-container">
            <div className="scale-0 md:scale-100 fixed sm:top-[-150px] right-[-150px] text-center text-gray-800">
                <FaCode size="1000" />
            </div>
            <div className="md:scale-0 fixed sm:top-[-150px] right-[-150px] text-center text-gray-800">
                <FaCode size="500" />
            </div>
            <div className="relative mx-8 pt-4 md:m-16 md:pt-0">
                <h1 className="text-5xl sm:text-8xl font-bold">Hi,</h1>
                <h1 className="text-5xl sm:text-8xl font-bold">I'm Chris,</h1>
                <h1 className="text-5xl sm:text-8xl font-bold">Software Engineer</h1>
                <p className="mt-4 ml-1">I build stuff for the interwebs</p>
                <h2 className="mt-8 text-xl sm:text-xl font-bold">My Techs : </h2>
                <Skills skills={skills} />
                <div className="mt-8 flow-root items-center">
                    <span className="inline-flex text-blue-600 mr-1"><FaStar size="15" /></span>
                    <span className="inline-flex"> : I have official certifications</span>
                </div>
            </div>

        </div>
    );
}

export default Home;