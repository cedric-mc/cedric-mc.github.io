import '@styles/pages/Projects.css';
import { Carousel, CarouselItem, Ratio } from "react-bootstrap";
import { useEtudes } from "../hooks/useEtudes";
const images = import.meta.glob('@assets/projects/*.{png,jpg,svg}', { eager: true });

const formattedImages = Object.fromEntries(
    Object.entries(images).map(([path, name]) => [path.split('/').pop()?.split('.')[0], (name as { default: string }).default])
);

// TODO: Pour la navbar fusionné les deux sections en une seule et mettre une mini navbar pour naviguer entre les deux sections directement ici
export function Projects() {
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
                        <h4 className="title-project">Atlas historique de la Gendarmerie Nationale</h4>
                        <h5 className="project-language">HTML, CSS, JS, PHP, SQL</h5>
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
                                <img src={formattedImages["atlas-gn-1"]} className="d-block w-100" alt="Atlas GN 1"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["atlas-gn-2"]} className="d-block w-100" alt="Atlas GN 2"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["atlas-gn-3"]} className="d-block w-100" alt="Atlas GN 3"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["atlas-gn-4"]} className="d-block w-100" alt="Atlas GN 4"/>
                            </CarouselItem>
                            {/* TODO: Ajouter les tableaux */}
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
                <div id='ingrid'>
                    <div className='project-item'>
                        <h3 className='title-project'>Projet I.N.G.R.I.D. (Eiffel Time), Application de gestion universitaire</h3>
                        <h4 className='project-language'>HTML, CSS, JS, TS, React Native, Node.js, Express, PostgreSQL</h4>
                        <p>
                            L'application I.N.G.R.I.D est une application web et mobile qui permet de gérer les notes, les absences et de visualiser l'emploi du temps des différents acteurs de l'université Gustave Eiffel.
                            Ces acteurs sont les étudiants, les enseignants et le personnel (secrétaires, directeurs d'étude...).
                        </p>
                        <Carousel fade data-bs-theme='dark'>
                            <CarouselItem>
                                <img src={formattedImages["INGRID1"]} className='d-block w-100' alt='INGRID 1'/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["INGRID2"]} className='d-block w-100' alt='INGRID 2'/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["INGRID3"]} className='d-block w-100' alt='INGRID 3'/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["INGRID4"]} className='d-block w-100' alt='INGRID 4'/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["INGRID5"]} className='d-block w-100' alt='INGRID 5'/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["INGRID6"]} className='d-block w-100' alt='INGRID 6'/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["INGRID7"]} className='d-block w-100' alt='INGRID 7'/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["INGRID8"]} className='d-block w-100' alt='INGRID 8'/>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <div id="semonkey">
                    <div className="project-item">
                        <h3 className="title-project">Semonkey, Jeu en ligne à un ou plusieurs joueurs</h3>
                        <h4 className="project-language">
                            HTML, CSS, PHP, SQL, C, Java, TypeScript, React, Android
                        </h4>
                        <p>
                            Semonkey est un jeu en ligne à un ou plusieurs joueurs.
                            Chaque joueur reçoit un mot de départ et un mot cible et propose des mots proches afin de créer une chaîne de mots similaires pour relier le mot de départ au mot cible.
                            Le but est que chaque mot ressemble autant que possible au mot précédent. Une version mobile est également disponible.
                            <br/>
                            {/*Site :&ensp;<a href="" target="_blank" rel="noreferrer"><span className="code-icon spinner"/></a>*/}
                            {/*Documentation :&ensp;<a href="" target="_blank" rel="noreferrer"><span className="documentation-icon spinner"/></a>*/}
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
                                <img src={formattedImages["SEMONKEY1"]} className="d-block w-100" alt="Semonkey 1"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["SEMONKEY2"]} className="d-block w-100" alt="Semonkey 2"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["SEMONKEY3"]} className="d-block w-100" alt="Semonkey 3"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["SEMONKEY4"]} className="d-block w-100" alt="Semonkey 4"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["SEMONKEY5"]} className="d-block w-100" alt="Semonkey 5"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["SEMONKEY6"]} className="d-block w-100" alt="Semonkey 6"/>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <br/>
                <div id="cnil">
                    <div className="project-item">
                        <h3 className="title-project">Contrôles CNIL</h3>
                        <h4 className="project-language">HTML, CSS, JS, PHP, SQL</h4>
                        <p>
                            Le projet Contrôles CNIL a pour objectif d'exploiter les données ouvertes concernant les contrôles réalisés par la CNIL de 2017 à 2022.
                            L'objectif est de valoriser ces données en les présentant sous forme d'un site web comprenant une carte et des graphiques permettant une visualisation claire et interactive des informations, afin de créer un tableau de bord informatif.
                            <br/>
                            {/*Site :&ensp; <a href="" target="_blank" rel="noreferrer"><span className="code-icon spinner"/></a><br/>*/}
                            {/*Documentation :&ensp; <a href="" target="_blank" rel="noreferrer"><span className="documentation-icon spinner"/></a>*/}
                            <br/>
                            {isEtudes &&
                                <>
                                    Compétence Gérer : Ce projet m'a permis de concevoir, gérer, administrer et exploiter des données officielles d'une autorité administrative.
                                    <br/>
                                </>
                            }
                        </p>
                        <Carousel fade data-bs-theme="dark">
                            <CarouselItem>
                                <img src={formattedImages["CNIL1"]} className="d-block w-100" alt="CNIL 1"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["CNIL2"]} className="d-block w-100" alt="CNIL 2"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["CNIL3"]} className="d-block w-100" alt="CNIL 3"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["CNIL4"]} className="d-block w-100" alt="CNIL 4"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["CNIL5"]} className="d-block w-100" alt="CNIL 5"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["CNIL6"]} className="d-block w-100" alt="CNIL 6"/>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <br/>
                {isEtudes &&
                    <div id="reseau">
                        <div className="project-item">
                            <h3 className="title-project">TP Pare-feu et translation d'adresse</h3>
                            <h4 className="project-language">Bash&ensp;<i className="fa-brands fa-linux character"></i></h4>
                            <p>
                                Le TP Pare-feu et translation d'adresse a pour objectif de mettre en place un pare-feu sous
                                Linux grâce à Netfilter et mettre en place une passerelle NAT (Network Address Translation).
                                <br/>
                                Compétence Administrer : Ce projet m'a permis de mettre à disposition un pare-feu et une translation d'adresse sur un réseau local.
                                <br/>
                            </p>
                            <img src={formattedImages["RESEAU1"]} className="d-block w-100" alt="Réseau"/>
                        </div>
                    </div>
                }
                <div id="banklink">
                    <div className="project-item">
                        <h3 className="title-project">Banklink, Portail Web de Gestion de paiements par carte bancaire</h3>
                        <h4 className="project-language">HTML&ensp;<i className="fa-brands fa-html5 character"></i>,
                            CSS&ensp;<i className="fa-brands fa-css3-alt character"></i>, PHP&ensp;<i
                                className="fa-brands fa-php character"></i>, SQL&ensp;<i
                                className="fa-solid fa-database character"></i>, JS&ensp;<i
                                className="fa-brands fa-square-js character"></i></h4>
                        <p>
                            Le projet Banklink est un portail web de gestion de paiements par carte bancaire. Il permet
                            de visualiser les transactions effectuées et de gérer les comptes clients.
                            <br/>
                            {/*Site :&ensp;<a href="" target="_blank" rel="noreferrer"><span className="code-icon spinner"></span></a><br/>*/}
                            Documentation :&ensp;<a href="https://cedric-mc.github.io/Banklink" target="_blank" rel="noreferrer"><span className="documentation-icon spinner"/></a><br/>
                            {
                                isEtudes &&
                                <>
                                    Compétence Gérer : Ce projet m'a permis de concevoir, gérer, administrer et exploiter des
                                    données bancaires.
                                    <br/>
                                    Compétence Conduire : Ce projet m'a permis de satisfaire les besoins des utilisateurs et de
                                    piloter un projet informatique.
                                    <br/>
                                    Compétence Collaborer : Ce projet m'a permis de travailler efficacement dans une équipe
                                    informatique en suivant une méthodologie de développement.
                                    <br/>
                                </>
                            }
                        </p>
                        <Carousel fade>
                            <CarouselItem>
                                <img src={formattedImages["BANKLINK1"]} className="d-block w-100" alt="Banklink 1"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BANKLINK2"]} className="d-block w-100" alt="Banklink 2"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BANKLINK3"]} className="d-block w-100" alt="Banklink 3"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BANKLINK4"]} className="d-block w-100" alt="Banklink 4"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BANKLINK5"]} className="d-block w-100" alt="Banklink 5"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BANKLINK6"]} className="d-block w-100" alt="Banklink 6"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BANKLINK7"]} className="d-block w-100" alt="Banklink 7"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BANKLINK8"]} className="d-block w-100" alt="Banklink 8"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BANKLINK9"]} className="d-block w-100" alt="Banklink 9"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BANKLINK10"]} className="d-block w-100" alt="Banklink 10"/>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <br/>
                <div id="toledo">
                    <div className="project-item">
                        <h3 className="title-project">Projet de médiation culturelle et numérique en partenariat avec le
                            forum de l'UNESCO <img className="img-spin" src="img/projects/unesco.png" alt="UNESCO"/></h3>
                        <h4 className="project-language">HTML, CSS, JS, PHP, SQL</h4>
                        <p>
                            En partenariat avec le forum de l'UNESCO, ce projet consistait à réaliser un site web pour le forum de l'UNESCO, en présentant la ville avec sa culture, son histoire et bien entendu ses incontournables d'aujourd'hui.
                            <br/>
                            {/*Site :&ensp;<a href="" target="_blank" rel="noreferrer"><span className="code-icon spinner"/></a><br/>*/}
                            {/*Documentation :&ensp;<a href="https://cedric-mc.github.io/Toledo" target="_blank" rel="noreferrer"><span className="documentation-icon spinner"/></a><br/>*/}
                            {
                                isEtudes &&
                                <>
                                    Compétence Conduire : Ce projet m'a permis de satisfaire les besoins des utilisateurs et de
                                    piloter un projet informatique.
                                    <br/>
                                    Compétence Collaborer : Ce projet m'a permis de travailler efficacement dans une équipe
                                    informatique pour la première fois.
                                    <br/>
                                </>
                            }
                        </p>
                        <Carousel fade data-bs-theme="dark">
                            <CarouselItem>
                                <img src={formattedImages["TO1"]} className="d-block w-100" alt="Toledo 1"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["TO2"]} className="d-block w-100" alt="Toledo 2"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["TO3"]} className="d-block w-100" alt="Toledo 3"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["TO4"]} className="d-block w-100" alt="Toledo 4"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["TO5"]} className="d-block w-100" alt="Toledo 5"/>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <br/>
                <div id="hedelma">
                    <div className="project-item">
                        <h3 className="title-project">Projet Hedelma, Primeurs-Passion</h3>
                        <h4 className="project-language">HTML, CSS, JS, PHP, SQL, Base de données PostGreSQL,
                            Looping</h4>
                        <p>
                            Ce projet consistait à réaliser un site web pour une entreprise fictive de vente de fruits et légumes.
                            <br/>
                            {/*Site :&ensp;<a href="" target="_blank" rel="noreferrer"><span className="code-icon spinner"/></a><br/>*/}
                            {/*Documentation :&ensp;<a href="" target="_blank" rel="noreferrer"><span className="documentation-icon spinner"/></a><br/>*/}
                            {
                                isEtudes &&
                                <>
                                    Compétence Gérer : Ce projet m'a permis de concevoir, gérer, administrer et exploiter des données pour une entreprise fictive.
                                    <br/>
                                </>
                            }
                        </p>
                        <Carousel fade data-bs-theme="dark">
                            <CarouselItem>
                                <img src={formattedImages["BDD1"]} className="d-block w-100" alt="Hedelma 1"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BDD2"]} className="d-block w-100" alt="Hedelma 2"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BDD3"]} className="d-block w-100" alt="Hedelma 3"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BDD4"]} className="d-block w-100" alt="Hedelma 4"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BDD5"]} className="d-block w-100" alt="Hedelma 5"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BDD6"]} className="d-block w-100" alt="Hedelma 6"/>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <br/>
                <div id="batailleBoules">
                    <div className="project-item">
                        <h3 className="title-project">Jeu : Bataille de Boules</h3>
                        <h4 className="project-language">Python</h4>
                        <p>
                            Le but de ce projet était de réaliser un jeu de placement de boules. Chaque utilisateur joue avec une couleur.
                            Le but du jeu est d’occuper la plus grande aire avec sa couleur. Les joueurs contrôlent la souris chacun à leur tour, et on décide à l’avance du nombre de tours. Le projet était à réaliser à deux en 3 phases.
                            <br/>
                            Jeu :&ensp;<a href="https://cedric-mc.github.io/Python_Game" target="_blank" rel="noreferrer"><span className="code-icon spinner"/></a><br/>
                            Documentation :&ensp;<a href="https://cedric-mc.github.io/Python_Game" target="_blank" rel="noreferrer"><span className="documentation-icon spinner"/></a><br/>
                            {
                                isEtudes &&
                                <>
                                    Compétence Réaliser : Ce projet m'a permis de réaliser une application avec une interface
                                    graphique en Python. J'ai appris à utiliser la bibliothèque Pygame pour la réalisation de
                                    jeux en Python.
                                    <br/>
                                    Compétence Optimiser : Ce projet m'a permis d'optimiser mon code pour qu'il soit plus
                                    lisible et plus performant. J'ai appris à utiliser des fonctions pour réduire la taille de
                                    mon code et à utiliser des boucles pour répéter des actions.
                                </>
                            }
                        </p>
                        <h5 className="caption-title">Jeu Bataille des Boules, programmé en Python, se joue à 2 joueurs.</h5>
                        <p>
                            Le but du jeu est simple, occupé le plus d'espace possible sur l'aire de jeu avec votre couleur.<br/>
                            Vous pourrez sélectionner des variantes pour pimenter votre jeu, un couple de couleur pour décider de votre couleur en tant que joueur, choisir un pseudo pour le joueur (un pseudo par défaut est disponible si vous n'entrez rien), enfin entrer le nombre de tours (par défaut 5 minimum).
                        </p>
                        <h5 className="caption-title">Les Variantes du jeu Bataille des Boules</h5>
                        <p>
                            Vous pouvez jouer avec 6 variantes différentes : <img src="img/projects/hourglass.png" className="p-img" alt="sablier"/> le Sablier,<img src="img/projects/scores.png" className="p-img" alt="scores"/> les Scores,<img src="img/projects/taille-des-boules.png" className="p-img" alt="taille-des-boules"/> la Taille de Boules,<img src="img/projects/dynamique.png" className="p-img" alt="dynamique"/> la Version Dynamique, <img src="img/projects/terminaison.png" className="p-img" alt="terminaison"/> la Terminaison et <img src="img/projects/obstacles.png" className="p-img" alt="obstacles"/> les Obstacles.
                        </p>
                        <Carousel fade data-bs-theme="dark">
                            <CarouselItem>
                                <img src={formattedImages["BDB1"]} className="d-block w-100" alt="Bataille de Boules 1"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BDB2"]} className="d-block w-100" alt="Bataille de Boules 2"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BDB3"]} className="d-block w-100" alt="Bataille de Boules 3"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BDB4"]} className="d-block w-100" alt="Bataille de Boules 4"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BDB5"]} className="d-block w-100" alt="Bataille de Boules 5"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BDB6"]} className="d-block w-100" alt="Bataille de Boules 6"/>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={formattedImages["BDB7"]} className="d-block w-100" alt="Bataille de Boules 7"/>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <br/>
                <div id="videos">
                    <div className="project-item">
                        <h3 className="title-project">Wrong number : a very embarrassing misunderstanding</h3>
                        <h4 className="project-language">Logiciel : ClipChamp</h4>
                        <p>
                            J'ai participé à la création d'une vidéo pour une séquence de 5 à 10 minutes qui se déroule exclusivement par le biais d'appels téléphoniques et de SMS.
                        </p>
                        <Ratio aspectRatio="16x9">
                            <iframe src="https://www.youtube.com/embed/6cWJObySlfc"
                                    title="Wrong number : a very embarrassing misunderstanding Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
                        </Ratio>
                    </div>
                    <div className="project-item">
                        <h3 className="title-project">Coding Flash</h3>
                        <h4 className="project-language">Logiciel : ClipChamp</h4>
                        <p>
                            J'ai monté une vidéo à partir de trois extraits de la série <span className="flash">The Flash</span>, avec mon équipe nous devions ajouter des sous-titres personnalisés dans ces extraits.
                        </p>
                        <Ratio aspectRatio="16x9">
                            <iframe src="https://www.youtube.com/embed/E3ukMn0_F5c" title="Coding Flash Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
                        </Ratio>
                    </div>
                </div>
            </div>
        </section>
    );
};