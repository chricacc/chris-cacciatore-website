import { FaCode } from "react-icons/fa";
import Skills from "../components/Skills";


function Home() {

    let skills = [
        { name: "Docker", imgUrl: "public/docker.svg" },
        { name: "Quarkus", imgUrl: "public/quarkus.png" },
        { name: "OpenShift", imgUrl: "public/openshift.png" },
        { name: "Keycloak", imgUrl: "public/keycloak.svg" },
        { name: "Tailwind", imgUrl: "public/tailwind.svg" },
        { name: "React", imgUrl: "public/react.svg" },
        { name: "Vite", imgUrl: "public/vite.svg" }
    ];

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
                <p className="mt-4 ml-1">I build stuff for the interwebs</p>
                <h2 className="mt-8 text-xl sm:text-xl font-bold">My Techs : </h2>
                <Skills skills={skills} />
            </div>

        </div>
    );
}

export default Home;