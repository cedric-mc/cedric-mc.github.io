import '../../css/sections/projects.css';
import {Carousel, CarouselItem} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3, faHtml5} from "@fortawesome/free-brands-svg-icons";
import useEtudes from "../hooks/useEtudes";

function Projects() {
    const isEtudes = useEtudes();

    return (
        <section id="projects">
            <h2 className="title-section">Mes projets</h2>
            <p>
                Vous pourrez consulter le code source ou le lien <span className="code-icon spinner"></span> et la documentation et/ou description <span className="documentation-icon spinner"></span> de chaque projet si disponible.
            </p>
            <div id="projects-pro">
                <h3 className="subtitle-section">Mon projet professionnel</h3>
                <p>
                    Dans cette section, vous trouverez les projets auxquels j'ai participé dans le cadre de mon parcours
                    professionnel.
                </p>
                <div id="atlas-gendarmerie">
                    <div className="project-item">
                        <h3 className="title-project">Atlas historique de la Gendarmerie Nationale</h3>
                        <h4 className="project-language">HTML, CSS, JS, PHP, SQL</h4>
                        <div>
                            <p>
                                Description officielle : "Le projet Atlas historique de la Gendarmerie est un projet
                                interactif et collaboratif, composé de contributeurs variés (chercheurs, gendarmes,
                                érudits, etc.).
                                Le projet vise à rendre accessible en ligne l'identification géolocalisée, dans
                                l'histoire de France, des entités (unités et gendarmes) ayant composée la Maréchaussée,
                                sous l'Ancien Régime, puis la Gendarmerie Nationale (depuis 1791)."
                                <br/>
                                Site :&ensp;<a href="https://atlas-gendarmerie.fr/" target="_blank" rel="noreferrer"><span className="code-icon spinner"/></a><br/>
                                Description :&ensp;<a href="https://atlas-gendarmerie.fr/?p=le_projet" target="_blank" rel="noreferrer"><span className="documentation-icon spinner"/></a>
                            </p>
                        </div>
                        <Carousel fade data-bs-theme="dark">
                            <CarouselItem>
                                <img src="/img/projects/atlas-gn-1.png" className="d-block w-100" alt="Atlas GN 1"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src="/img/projects/atlas-gn-2.png" className="d-block w-100" alt="Atlas GN 2"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src="/img/projects/atlas-gn-3.png" className="d-block w-100" alt="Atlas GN 3"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src="/img/projects/atlas-gn-4.png" className="d-block w-100" alt="Atlas GN 4"/>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
            </div>
            <br/>
            <div id="projects-univ">
                <h3 className="subtitle-section">Mes projets universitaires</h3>
                <p>
                    Dans cette section, vous trouverez les projets que j'ai réalisés dans le cadre de mes études
                    universitaires.
                </p>
                <div id="semonkey">
                    <div className="project-item">
                        <h3 className="title-project">Semonkey, Jeu en ligne à un ou plusieurs joueurs</h3>
                        <h4 className="project-language">
                            <FontAwesomeIcon className="character" icon={faHtml5}/> <FontAwesomeIcon className="character" icon={faCss3}/>,
                            PHP&ensp;<i className="fa-brands fa-php character"></i>,
                            SQL&ensp;<i className="fa-solid fa-database character"></i>,
                            JS&ensp;<i className="fa-brands fa-square-js character"></i>,
                            C&ensp;<i className="fa-solid fa-c character"></i>,
                            Java&ensp;<i className="fa-brands fa-java character"></i>,
                            TypeScript&ensp;,
                            React&ensp;<i className="fa-brands fa-react character"></i>,
                            Android&ensp;<i className="fa-brands fa-android character"></i>
                        </h4>
                        <p>
                            Semonkey est un jeu en ligne à un ou plusieurs joueurs.
                            Chaque joueur reçoit un mot de départ et un mot cible et propose des mots proches afin de créer une chaîne de mots similaires pour relier le mot de départ au mot cible.
                            Le but est que chaque mot ressemble autant que possible au mot précédent. Une version mobile est également disponible.
                            <br/>
                            {/*Site :&ensp; <a href="" target="_blank" rel="noreferrer"><span className="code-icon spinner"/></a>*/}
                            {/*Documentation :&ensp; <a href="" target="_blank" rel="noreferrer"><span className="documentation-icon spinner"/></a>*/}
                            {
                                isEtudes &&
                                <>
                                Compétence Réalisée : Ce projet m'a permis de réaliser une application web en utilisant différents langages de programmation.
                                <br/>
                                Compétence Optimiser : Ce projet m'a permis de proposer une application web optimisée en fonction de critères spécifiques et de proposer une version mobile.
                                <br/>
                                Compétence Administrer : Ce projet m'a permis de mettre à disposition une application web et de maintenir en conditions opérationnelles des services et des réseaux.
                                <br/>
                                Compétence Gérer : Ce projet m'a permis de concevoir, gérer, administrer et exploiter des données.
                                <br/>
                                Compétence Conduire : Ce projet m'a permis de satisfaire les besoins des utilisateurs et de piloter un projet informatique.
                                <br/>
                                Compétence Collaborer : Ce projet m'a permis de travailler efficacement dans une équipe informatique.
                                <br/>
                                </>
                            }
                        </p>
                        <Carousel fade>
                            <CarouselItem>
                                <img src="/img/projects/SEMONKEY1.png" className="d-block w-100" alt="Semonkey 1"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src="/img/projects/SEMONKEY2.png" className="d-block w-100" alt="Semonkey 2"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src="/img/projects/SEMONKEY3.png" className="d-block w-100" alt="Semonkey 3"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src="/img/projects/SEMONKEY4.png" className="d-block w-100" alt="Semonkey 4"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src="/img/projects/SEMONKEY5.png" className="d-block w-100" alt="Semonkey 5"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src="/img/projects/SEMONKEY6.png" className="d-block w-100" alt="Semonkey 6"/>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;