
import Toolbox from "../components/Toolbox";
import { FaStar, FaArrowRight } from "react-icons/fa";
import StaticBackground from "../components/StaticBackground";
import { Link } from "react-router-dom";


function Home() {

    const tools = [
        { name: "Docker", imgUrl: "docker.svg", link: "https://www.docker.com/" },
        { name: "Quarkus", imgUrl: "quarkus.png", link: "https://quarkus.io/" },
        { name: "OpenShift", imgUrl: "openshift.png", link: "https://www.redhat.com/en/technologies/cloud-computing/openshift", certificationExpiryDate: "2026-07-31" },
        { name: "Keycloak", imgUrl: "keycloak.svg", link: "https://www.keycloak.org/" },
        { name: "Tailwind", imgUrl: "tailwind.svg", link: "https://tailwindcss.com" },
        { name: "React", imgUrl: "react.svg", link: "https://react.dev/" },
        { name: "Next", imgUrl: "next.webp", link: "https://nextjs.org/" }
    ];

    const tags = [
        { name: "#languageagnostic", link: "https://en.wikipedia.org/wiki/Language-agnostic" },
        { name: "#devops", link: "https://en.wikipedia.org/wiki/DevOps" },
        { name: "#fullstack", link: "https://www.w3schools.com/whatis/whatis_fullstack.asp" },
        { name: "#cleancode", link: "https://www.youtube.com/watch?v=eoK0NE92EOk" },
        { name: "#softwarecraft", link: "https://en.wikipedia.org/wiki/Software_craftsmanship" },

    ]

    return (
        <div className="page-container">
            <StaticBackground />
            <div className="page-content">
                <h1 className="text-5xl md:text-8xl font-bold">Christopher,</h1>
                <h1 className="text-5xl md:text-8xl md:mt-8 font-bold">Software Engineer</h1>
                <div className="text-lg mt-8 ml-1">
                    <p className="mb-4">J'ai passé les 10 dernières années à concevoir des systèmes informatiques en utilisant des technologies variées.</p>
                    <p> Ne me demandez pas quel est mon framework. Mon framework, c'est celui qui fera le job pour le besoin du projet. Les frameworks ne sont que des outils, quand je ne connais pas, j'apprends!</p>
                    <ul className="my-4 ml-1 flex flex-wrap gap-4 font-italic">
                        {
                            tags.map((tag) =>
                                <Link to={tag.link} target="_blank">
                                    <li className="tag">{tag.name}</li>
                                </Link>)
                        }
                    </ul>
                </div>
                <h2 className="mt-12 text-xl md:text-2xl font-bold">Ma Toolbox idéale <span className="text-sm">(car on a tous des préférences)</span></h2>
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