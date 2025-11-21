import { FaUser } from "react-icons/fa";

function Presentation() {
    return (
        <div className="resume-block">
            <div className="resume-block-title">
                <span className="mr-4"> <FaUser /> </span>
                <span>Présentation</span>
            </div>
            <div className="text-justify">
                <p className="mb-2">Consultant en informatique depuis plus de 10 ans, je conçois et développe des systèmes informatiques en collaboration avec de nombreux clients issus de secteurs variés (industrie automobile, immobilier, banque, assurance, gestion portuaire...). Lors de ces nombreuses missions, j'ai utilisé divers socles techniques, toujours avec le but de combler le besoin client avec la plus grande efficacité, et de manière pérenne. J’ai également eu à coeur d'accompagner ces clients dans leurs choix technologiques et architecturaux, tout en formant et accompagnant de nouveaux développeurs en interne, mais également côté client.</p>

                <p>Le fort de mon expertise est côté Backend/Ops, tout en ayant de bonnes notions en Frontend. Je me décris comme language-agnostic, car pour moi, la valeur ajoutée d'un développeur se situe dans sa capacité à comprendre un métier, un besoin, et non dans la maîtrise d'une syntaxe. Je pense aussi que les "vrais" problèmes sont d'ordre architectural, et se résolvent par une meilleure conception, et non par les subtilités d'un langage/framework.</p>
            </div>
        </div>
    );
}

export default Presentation;