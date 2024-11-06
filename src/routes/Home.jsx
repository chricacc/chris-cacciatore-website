
import Toolbox from "../components/Toolbox";
import { FaStar, FaArrowRight } from "react-icons/fa";
import StaticBackground from "../components/StaticBackground";


function Home() {

    let tools = [
        { name: "Docker", imgUrl: "docker.svg", link: "https://www.docker.com/" },
        { name: "Quarkus", imgUrl: "quarkus.png", link: "https://quarkus.io/" },
        { name: "OpenShift", imgUrl: "openshift.png", link: "https://www.redhat.com/en/technologies/cloud-computing/openshift", certificationExpiryDate: "2025-12-31" },
        { name: "Keycloak", imgUrl: "keycloak.svg", link: "https://www.keycloak.org/" },
        { name: "Tailwind", imgUrl: "tailwind.svg", link: "https://tailwindcss.com" },
        { name: "React", imgUrl: "react.svg", link: "https://react.dev/" },
        { name: "Vite", imgUrl: "vite.svg", link: "https://vitejs.dev/" }
    ];

    return (
        <div className="page-container">
            <StaticBackground />
            <div className="page-content">
                <h1 className="text-5xl md:text-8xl font-bold">Christopher,</h1>
                <h1 className="text-5xl md:text-8xl md:mt-8 font-bold">Software Engineer</h1>
                <p className="mt-8 ml-1">J'ai passé les 10 dernières années à concevoir des systèmes informatiques en utilisant des technologies variées.</p>
                <h2 className="mt-8 text-xl md:text-xl font-bold">Ma Toolbox idéale</h2>
                <Toolbox tools={tools} />
                <div className="mt-8 flow-root flex align-center">
                    <span className="inline-flex text-blue-600 mr-1"><FaStar size="15" /> </span>
                    <span className="inline-flex mr-1"><FaArrowRight size="12" /> </span>
                    <span className="inline-flex"> Je détiens une certification officielle pour cet outil</span>
                </div>
            </div>

        </div>
    );
}

export default Home;