import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import StaticBackground from "../components/StaticBackground";
import Education from "../components/Education";
import Presentation from "../components/Presentation";
import WorkExperience from "../components/WorkExperience";

function Resume() {

    let schools = [
        {
            "title": "Master Informatique spécialité Génie Logiciel parcours Conduite de Projet",
            "school": "Université Bordeaux 1",
            "year": 2014
        },
        {
            "title": "Licence Informatique",
            "school": "Université Bordeaux 1",
            "year": 2012
        },
        {
            "title": "Diplôme Universitaire de Technologie Informatique",
            "school": "IUT de Metz",
            "year": 2010
        },
        {
            "title": "Baccalauréat scientifique option Sciences de l\’Ingénieur",
            "school": "Lycée Louis Bertrand, Briey (54)",
            "year": 2008
        }
    ];

    let jobs = [
        {
            "start": "Septembre 2020",
            "end": "Présent",
            "title": "Expert Technique",
            "company": "ITs4U Luxembourg - ICADE Foncière",
            "sector": "Immobilier",
            "activities": [
                "Développement de personnalisations sur le produit Sugar (Php 8, JavaScript)",
                "Optimisation et refonte des flux d’imports de données",
                "Encadrement technique de l’équipe de développement en place",
                "Choix techniques"
            ],
            "environment": ["Sugar 12.0", "Php 8", "MySQL", "Docker", "REST"]
        },
        {
            "start": "Décembre 2015",
            "end": "Présent",
            "title": "Expert Technique",
            "company": "ITs4U Luxembourg - Batigère",
            "sector": "Immobilier",
            "activities": [
                "Développement middleware basé sur OpenShift, développement et déploiement d’applicatifs avec Thorntail, Quarkus, Apache Camel",
                "Sécurisation via Red Hat SSO",
                "API Management via Red Hat 3Scale",
                "Mise en place d’une Plateforme d’Intégration Continue pour OpenShift",
                "Formation de l’équipe de développement côté client"
            ],
            "environment": ["Sugar 12.0", "Php 8", "MySQL", "OpenShift", "Red Hat SSO", "3Scale", "Tekton", "Buildah", "SonarQube", "Nexus"]
        },
        {
            "start": "Septembre 2015",
            "end": "Décembre 2023",
            "title": "Expert Technique",
            "company": "ITs4U Luxembourg - Cilgere / Action Logement / Ma Nouvelle Ville",
            "sector": "Immobilier",
            "activities": [
                "Développement middleware : plateforme d’intégration basée sur Docker et frameworks Java tels que Spring Boot, Thorntail, Quarkus, Apache Camel",
                "Interfaçage entre Sugar et une multitude de systèmes tiers (DocuSign, Actito, Ubiflow)",
                "Formation et encadrement d’une équipe de développeurs juniors",
                "Conseils en architecture et choix techniques"
            ],
            "environment": ["Sugar 12.0", "Php 8", "MySQL", "Docker", "Keycloak", "Spring Boot", "Thorntail", "Quarkus", "Apache Camel", "Maven", "REST", "OAuth2/OpenID-Connect"]
        },
        {
            "start": "Novembre 2015",
            "end": "Avril 2019",
            "title": "Ingénieur d’études et développement",
            "company": "ITs4U Luxembourg - Foyer Assurance",
            "sector": "Assurance",
            "activities": [
                "Analyse et conseil technique sur l’intégration avec d’autres systèmes",
                "Support et encadrement technique de l’équipe ITs4U en charge du projet"
            ],
            "environment": ["Sugar 7.x", "PHP 5", "HTML 5", "Javascript", "JSON", "REST", "MySQL"]
        },
        {
            "start": "Mai 2016",
            "end": "Août 2016",
            "title": "Ingénieur d’études et développement",
            "company": "ITs4U Luxembourg - Proximus",
            "sector": "Télécommunications",
            "activities": [
                "Développement middleware : interfaçage du CRM avec le SI via RedHat Fuse"
            ],
            "environment": ["Sugar 7.x", "RedHat Fuse", "Maven", "PHP 5", "HTML 5", "Javascript", "JSON", "REST", "MySQL"]
        },
        {
            "start": "Octobre 2014",
            "end": "Août 2015",
            "title": "Ingénieur d'études Java EE",
            "company": "Infotel / Grand Port Maritime de Bordeaux",
            "project": "Projet VIGIEsip",
            "activities": [
                "Développement d’applications du projet VIGIEsip",
                "Migration technique depuis Coldfusion vers Java EE",
                "Réalisation d'évolutions fonctionnelles selon les normes européennes",
                "Migration des données historiques depuis Oracle vers PostgreSQL",
                "Écriture et exécution de scénarios de tests d'intégration",
                "Assistance aux mises en production"
            ],
            "environment": ["Java EE", "Java 7", "JSF2", "Spring", "Hibernate", "Maven", "Tomcat", "JUnit", "Hudson", "Sonar", "SVN"]
        },
        {
            "start": "Avril 2014",
            "end": "Septembre 2014",
            "title": "Développeur Java EE",
            "company": "Infotel – Bordeaux",
            "position": "Stage de fin de Master",
            "activities": [
                "Développement d’une plateforme de formations en ligne",
                "Rédaction de spécifications, développement, tests, déploiement, recette",
                "Méthodologie SCRUM"
            ],
            "environment": ["Java EE", "SCRUM"]
        },
        {
            "start": "Juin 2012",
            "end": "Août 2012",
            "title": "Développeur VB.NET/SQLite",
            "company": "SOVAB (Filiale Renault) – Batilly (54)",
            "position": "Stage de fin de Licence",
            "activities": [
                "Développement d’un simulateur de flux de production",
                "Étude préalable au développement d'un work-flow manager",
                "Rédaction de documents techniques et formation des utilisateurs"
            ],
            "environment": ["VB.NET", "SQLite"]
        },
        {
            "start": "Avril 2010",
            "end": "Juin 2010",
            "title": "Développeur web ASP.NET/JavaScript",
            "company": "SOVAB (Filiale Renault) – Batilly (54)",
            "position": "Stage de fin de D.U.T",
            "activities": [
                "Développement d’un outil de gestion de postes critiques en ligne",
                "Formation personnalisée des utilisateurs",
                "Gestion autonome du temps et reportings réguliers à la hiérarchie"
            ],
            "environment": ["ASP.NET", "JavaScript"]
        }
    ];

    return (
        <div className="page-container">
            <StaticBackground />
            <div className="relative mx-4 sm:m-16">
                <h1 className="text-5xl sm:text-8xl font-bold">Curriculum Vitae</h1>
                <Presentation />
                <WorkExperience jobs={jobs} />
                <Education diplomas={schools} />

                <p className="mt-8">Pour me contacter, vous pouvez passer par LinkedIn :</p>
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