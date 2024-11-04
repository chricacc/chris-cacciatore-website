import { FaUser } from "react-icons/fa";

function Presentation() {
    return (
        <div className="resume-block">
            <div className="text-4xl font-bold mb-4 flex flex-wrap">
                <span className="mr-4"> <FaUser /> </span>
                <span>Présentation</span>
            </div>
            <div className="">
                Expert technique et développeur senior, je dispose d’une expérience de 10 ans avec de nombreux projets à mon actif. Lors de mes précédentes missions, j’ai pu développer des applications sur divers socles techniques, pour des clients appartenant à des domaines variés (immobilier, Assurance, Gestion portuaire…). J’ai également pu accompagner ces clients dans leurs choix technologiques et architecturaux, former et accompagner de nouveaux développeurs au sein de ma propre entreprise mais également côté client.

                D’un point de vue technique j’ai pu développer mon expertise sur la plateforme CRM Sugar, en particulier pour les questions touchant à l’architecture et à l’intégration du CRM au sein du SI via des plateformes telles que Docker ou OpenShift, en y déployant des applicatifs Spring Boot, Thorntail, Quarkus, etc. Au quotidien, je m'assure de fournir des prestations qualitatives tout en répondant aux exigences spécifiques de nos clients. Afin d’y parvenir, je maintiens une communication libre et fluide avec mon client, ce qui permet de clarifier chaque aspect d'un projet, à chacune de ses étapes, afin que tout se déroule de manière efficace. Je mets également en place un encadrement technique de proximité avec mon équipe, afin de lui transmettre au mieux mes compétences, et ma propre volonté d’effectuer un travail de qualité. Fort de proposition, j’échange librement avec nos clients sur de nouvelles évolutions et innovations à mettre en œuvre.
            </div>
        </div>
    );
}

export default Presentation;