import { FaUser } from "react-icons/fa";

function Presentation() {
    return (
        <div className="resume-block">
            <div className="text-4xl font-bold mb-4 flex flex-wrap">
                <span className="mr-4"> <FaUser /> </span>
                <span>Présentation</span>
            </div>
            <div className="text-justify">
                Consultant en informatique depuis maintenant 10 ans, je conçois et développe des systèmes informatiques en collaboration avec de nombreux clients issus de secteurs variés (industrie automobile, immobilier, assurance, gestion portuaire...). Lors de ces nombreuses missions, j'ai utilisé divers socles techniques, toujours avec le but de combler le besoin client avec la plus grande efficacité, et de manière pérenne. J’ai également eu à coeur d'accompagner ces clients dans leurs choix technologiques et architecturaux, tout en formant et accompagnant de nouveaux développeurs en interne, mais également côté client.
            </div>
        </div>
    );
}

export default Presentation;