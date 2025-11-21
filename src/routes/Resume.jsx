import { FaMusic } from "react-icons/fa";
import StaticBackground from "../components/StaticBackground";
import Education from "../components/Education";
import Presentation from "../components/Presentation";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import { FaScrewdriverWrench } from "react-icons/fa6";
import HireMe from "../components/HireMe";

function Resume() {

    let skills = [
        {
            "name": "Compétences générales",
            "skills": [{
                "name": "Français",
                "level": 100
            }, {
                "name": "Anglais (TOEIC 955/990)",
                "level": 90
            }, {
                "name": "Connaissances métier CRM",
                "level": 70
            }, {
                "name": "Pédagogie",
                "level": 80
            },]
        }, {
            "name": "Plateformes",
            "skills": [
                {
                    "name": "Environnements Linux (RedHat/CentOS, Fedora, Debian/Ubuntu)",
                    "level": 95
                }, {
                    "name": "Docker",
                    "level": 95
                }, {
                    "name": "RedHat OpenShift Container Platform",
                    "level": 80,
                    "certificationExpiryDate": "2025-12-31"
                }, {
                    "name": "Kubernetes",
                    "level": 30
                }, {
                    "name": "Apache",
                    "level": 95
                }, {
                    "name": "JBoss / RedHat EAP",
                    "level": 70
                },
            ],
        }, {
            "name": "Développement",
            "skills": [
                {
                    "name": "Java",
                    "level": 90
                }, {
                    "name": "Quarkus",
                    "level": 90
                }, {
                    "name": "Spring Boot",
                    "level": 80
                }, {
                    "name": "Hibernate",
                    "level": 70
                }, {
                    "name": "Eclipse MicroProfile",
                    "level": 85
                }, {
                    "name": "Php 8.x",
                    "level": 70
                }, {
                    "name": "JavaScript",
                    "level": 75
                }, {
                    "name": "TypeScript",
                    "level": 70
                }, {
                    "name": "ReactJS",
                    "level": 60
                }, {
                    "name": "NextJS",
                    "level": 60
                }, {
                    "name": "SQL",
                    "level": 95
                }, {
                    "name": "HTML",
                    "level": 95
                }, {
                    "name": "CSS",
                    "level": 80
                }, {
                    "name": "TailwindCSS",
                    "level": 70
                }, {
                    "name": "ShadCN",
                    "level": 65
                }]
        },
        {
            "name": "Intégration",
            "skills": [
                {
                    "name": "Apache Camel",
                    "level": 90
                }, {
                    "name": "Talend",
                    "level": 30
                },
            ],
        },
        {
            "name": "Infrastructure / Sécurité / Monitoring",
            "skills": [
                {
                    "name": "Keycloak / RedHat SSO",
                    "level": 90
                }, {
                    "name": "RedHat 3Scale Api Management",
                    "level": 70
                }, {
                    "name": "Cloudflare",
                    "level": 45
                }, {
                    "name": "Traefik",
                    "level": 55
                }, {
                    "name": "Jaeger",
                    "level": 55
                }, {
                    "name": "NewRelic",
                    "level": 65
                },
            ],
        },
        {
            "name": "Architectures logicielles",
            "skills": [
                {
                    "name": "Architectures orientées services (REST, SOAP...)",
                    "level": 90
                }, {
                    "name": "Architectures Microservices",
                    "level": 95
                }, {
                    "name": "Architectures Middleware",
                    "level": 70
                }, {
                    "name": "Enterprise Integration Patterns",
                    "level": 65
                }, {
                    "name": "Design Patterns",
                    "level": 85
                },]
        },
        {
            "name": "Méthodologies",
            "skills": [
                {
                    "name": "Scrum",
                    "level": 80
                }, {
                    "name": "BPMN",
                    "level": 50
                }, {
                    "name": "UML",
                    "level": 65
                },
            ],
        }, {
            "name": "Outils",
            "skills": [
                {
                    "name": "Jira",
                    "level": 80
                }, {
                    "name": "Confluence",
                    "level": 90
                },
                {
                    "name": "Git",
                    "level": 95
                }, {
                    "name": "Suite IDE JetBrains",
                    "level": 95
                }, {
                    "name": "Adobe Photoshop",
                    "level": 60
                },
            ],
        },

    ];

    let schools = [
        {
            "title": "Certification RedHat",
            "specialty": "OpenShift Developer (EX288)",
            "school": "Examen en ligne",
            "year": 2023
        },
        {
            "title": "Certification RedHat",
            "specialty": "Apache Camel Developer",
            "school": "Examen en ligne",
            "year": 2019
        },
        {
            "title": "Certification SugarCRM",
            "specialty": "Sugar Architect",
            "school": "Examen en ligne",
            "year": 2018
        }, {
            "title": "Certification SugarCRM",
            "specialty": "Sugar Developer",
            "school": "Examen en ligne",
            "year": 2016
        },
        {
            "title": "Master Informatique",
            "specialty": "Spécialité Génie Logiciel",
            "school": "Université Bordeaux 1",
            "year": 2014
        },
        {
            "title": "Licence Informatique",
            "specialty": "Spécialité Génie Logiciel",
            "school": "Université Bordeaux 1",
            "year": 2012
        },
        {
            "title": "DUT Informatique",
            "specialty": "Spécialité Génie Logiciel",
            "school": "IUT de Metz",
            "year": 2010
        },
        {
            "title": "Baccalauréat scientifique",
            "specialty": "option Sciences de l\’Ingénieur",
            "school": "Lycée Louis Bertrand, Briey (54)",
            "year": 2008
        }
    ];

    let jobs = [
        {
            "start": "Janvier 2025",
            "end": "Présent",
            "title": "Expert Technique - Tech Lead",
            "company": "ITs4U Luxembourg - BIL (Banque Internationale à Luxembourg)",
            "sector": "Banque",
            "activities": [
                "Cadrage technique d'un upgrade Spring Boot de masse sur un parc de 90 microservices",
                "Audit préalable et état des lieux sur la dette technique, ainsi que les pratiques DevOps",
                "Recommandations de pratiques et d'outils",
                "Semi-automatisation des upgrades avec OpenRewrite (règles custom)",
                "Encadrement technique d'une équipe de développeurs réalisant les upgrades",
                "Encadrement technique d'une équipe de développeurs participant à divers projets métier",
                "Animation d'ateliers Craft et présentations techniques"
            ],
            "environment": ["OpenShift", "Java", "Spring Boot", "Microservices", "REST", "Accelerate"]
        },
        {
            "start": "Janvier 2023",
            "end": "Février 2024",
            "title": "Architecte Technique",
            "company": "ITs4U Luxembourg - MySaam",
            "sector": "Comptabilité/Gestion",
            "activities": [
                "Encadrement technique d'une équipe de développeurs",
                "Choix d'architecture et documentation",
                "Optimisations et apport d'expertise sur OpenShift",
                "Recherche et Développement en vue d'une intégration entre la solution MySaam Vision et Microsoft360",
                "Mise en place d'une plateforme d'intégration continue basée sur Tekton et Jenkins"
            ],
            "environment": ["OpenShift", "Java", "Quarkus", "MySQL", "MongoDB", "REST", "Tekton", "Jenkins", "Buildah", "SonarQube", "Git"]
        },
        {
            "start": "Septembre 2020",
            "end": "Décembre 2024",
            "title": "Expert Technique",
            "company": "ITs4U Luxembourg - ICADE Foncière",
            "sector": "Immobilier d'Entreprise",
            "activities": [
                "Développement de personnalisations sur le CRM Sugar (Php 8, JavaScript)",
                "Optimisation et refonte des flux d’imports de données",
                "Encadrement technique de l’équipe de développement en place",
                "Choix techniques"
            ],
            "environment": ["Sugar 12.0", "Php 8", "MySQL", "Docker", "REST"]
        },
        {
            "start": "Décembre 2015",
            "end": "Décembre 2024",
            "title": "Expert Technique",
            "company": "ITs4U Luxembourg - Batigère",
            "sector": "Immobilier social",
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
            "company": "ITs4U Luxembourg - Action Logement",
            "sector": "Immobilier social",
            "activities": [
                "Développement middleware : plateforme d’intégration basée sur Docker et frameworks Java tels que Spring Boot, Thorntail, Quarkus, Apache Camel",
                "Interfaçage entre le CRM Sugar et une multitude de systèmes tiers (DocuSign, Actito, Ubiflow)",
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
                "Développement middleware : interfaçage du CRM Sugar avec le SI via RedHat Fuse"
            ],
            "environment": ["Sugar 7.x", "RedHat Fuse", "Maven", "PHP 5", "HTML 5", "Javascript", "JSON", "REST", "MySQL"]
        },
        {
            "start": "Octobre 2014",
            "end": "Août 2015",
            "title": "Développeur Java EE",
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
            "environment": ["Java EE", "Java 7", "JSF2", "Spring", "Hibernate", "Maven", "Tomcat", "JUnit", "Hudson", "Sonar", "SVN"],
            "sector": "Gestion Portuaire"
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
            "environment": ["Java EE", "SCRUM"],
            "sector": "Ressources Humaines"
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
            "environment": ["VB.NET", "SQLite"],
            "sector": "Industriel"
        },
        {
            "start": "Avril 2010",
            "end": "Juin 2010",
            "title": "Développeur ASP.NET/JavaScript",
            "company": "SOVAB (Filiale Renault) – Batilly (54)",
            "position": "Stage de fin de D.U.T",
            "activities": [
                "Développement d’un outil de gestion de postes critiques en ligne",
                "Formation personnalisée des utilisateurs",
                "Gestion autonome du temps et reportings réguliers à la hiérarchie"
            ],
            "environment": ["ASP.NET", "JavaScript"],
            "sector": "Industriel"
        }
    ];

    let hobbies = [
        {
            "name": "Musique",
            "skills": [
                {
                    "name": "Guitare",
                    "level": 85
                }, {
                    "name": "MAO/Enregistrement",
                    "level": 80
                }, {
                    "name": "Basse",
                    "level": 65
                }, {
                    "name": "Composition",
                    "level": 65
                }, {
                    "name": "Théorie musicale",
                    "level": 70
                }, {
                    "name": "Réparation guitares/basses",
                    "level": 60
                }
            ]
        },
        {
            "name": "Photographie",
            "skills": [{
                "name": "Paysage",
                "level": 80
            }, {
                "name": "Portrait",
                "level": 60
            }, {
                "name": "Astrophotographie",
                "level": 70
            }, {
                "name": "Traitement/retouche",
                "level": 80
            },]
        }];

    return (
        <div className="page-container">
            <StaticBackground />
            <div className="page-content">
                <div className="page-title ">
                    <div className="flex flex-wrap">
                        <div className="font-bold text-center w-full">CHRISTOPHER CACCIATORE</div>
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <div className="text-center w-full mr-2 sm:mr-4 text-blue-500">Software Engineer</div>
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-3 lg:gap-4">

                    <div className="col-span-3">
                        <Presentation />
                    </div>
                    <div className="col-span-2">
                        <WorkExperience jobs={jobs} />
                    </div>
                    <div className="col-span-1">
                        <Skills skills={skills} sectionTitle="Compétences" icon={<FaScrewdriverWrench />} />
                    </div>
                    <div className="col-span-2">
                        <Education diplomas={schools} />
                    </div>
                    <div className="col-span-1">
                        <Skills skills={hobbies} sectionTitle="Loisirs" icon={<FaMusic />} />
                    </div>
                </div>
                <div className="w-full">
                    <HireMe />
                </div>
            </div>
        </div >
    );
}

export default Resume;