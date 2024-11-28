import '../../css/sections/Skills.css';
import { useState } from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardLink,
    CardSubtitle,
    CardTitle,
    Col,
    Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle,
    Row
} from "react-bootstrap";
import useEtudes from "../hooks/useEtudes";

function Skills() {
    const [isEtudes] = useEtudes();
    const [realiserN2, setRealiserN2] = useState(false); // État pour gérer l'ouverture du modal de détails de la compétence "Réaliser" au niveau 2

    return (
        <section id="skills">
            <h2 className="title-section">Mes Compétences</h2>
            {isEtudes ? (
                <>
                    <p>
                        Je suis actuellement en 3<sup>ème</sup> année de BUT Informatique avec le Parcours de
                        Réalisation d'applications : Conception, Développement et Validation.<br/>
                        Formation : BUT Informatique ; Parcours A : Réalisation d’applications : conception,
                        développement, validation.<br/>
                        <span className="button-container">
                            <button className="gradient-button">Conception</button>
                            <button className="gradient-button">Développement</button>
                            <button className="gradient-button">Validation</button>
                        </span>
                        Voici les 6 compétences que je dois acquérir durant ma formation :
                    </p>
                    <div>
                        <Row md={2} className="row-cols-auto g-4">
                            <Col md={6}>
                                <Card className="h-100 realiser">
                                    <CardHeader className="bg-realiser">
                                        <CardTitle className="fw-semibold">Réaliser</CardTitle>
                                    </CardHeader>
                                    <CardBody className="card-body">
                                        <CardSubtitle className="card-title">Description :</CardSubtitle>
                                        <blockquote className="blockquote mb-0">
                                            <p>Développer — c'est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.</p>
                                            <footer className="blockquote-footer">
                                                <cite title="Source Title">Programme du BUT Informatique</cite>
                                            </footer>
                                        </blockquote>
                                        <br/>
                                        <Row className="text-center">
                                            <Col>
                                                <Button className="bg-realiser" onClick={() => setRealiserN2(true)} data-bs-target="#realiserN2Modal">Niveau 2</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter className="text-end text-body-secondary">
                                        <CardLink href="#batailleBoules" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Bataille des Boules</CardLink>
                                        <CardLink href="#semonkey" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Semonkey</CardLink>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="h-100 optimiser">
                                    <CardHeader className="bg-optimiser">
                                        <CardTitle className="fw-semibold">Optimiser</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <CardSubtitle>Description :</CardSubtitle>
                                        <blockquote className="blockquote mb-0">
                                            <p>Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources...</p>
                                            <footer className="blockquote-footer">
                                                <cite title="Source Title">Programme du BUT Informatique</cite>
                                            </footer>
                                        </blockquote>
                                        <br/>
                                        <Row className="text-center">
                                            <Col>
                                                <Button className="bg-optimiser" data-bs-toggle="modal" data-bs-target="#optimiserN2Modal">Niveau 2</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter className="text-end text-body-secondary">
                                        <CardLink href="#batailleBoules" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Bataille des Boules</CardLink>
                                        <CardLink href="#semonkey" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Semonkey</CardLink>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="h-100 administrer">
                                    <CardHeader className="bg-administrer">
                                        <CardTitle className="fw-semibold">Administrer</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <CardSubtitle>Description :</CardSubtitle>
                                        <blockquote className="blockquote mb-0">
                                            <p>Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation.</p>
                                            <footer className="blockquote-footer">
                                                <cite title="Source Title">Programme du BUT Informatique</cite>
                                            </footer>
                                        </blockquote>
                                        <br/>
                                        <Row className="text-center">
                                            <Col>
                                                <Button className="bg-administrer" data-bs-toggle="modal" data-bs-target="#administrerN2Modal">Niveau 2</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter className="text-end text-body-secondary">
                                        <CardLink href="#semonkey" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Semonkey</CardLink>
                                        <CardLink href="#reseau" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Pare-feu et translation d'adresse</CardLink>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="h-100 gerer">
                                    <CardHeader className="bg-gerer">
                                        <CardTitle className="fw-semibold">Gérer</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <CardSubtitle>Description :</CardSubtitle>
                                        <blockquote className="blockquote mb-0">
                                            <p>Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise.</p>
                                            <footer className="blockquote-footer">
                                                <cite title="Source Title">Programme du BUT Informatique</cite>
                                            </footer>
                                        </blockquote>
                                        <br/>
                                        <Row className="text-center">
                                            <Col>
                                                <Button className="bg-gerer" data-bs-toggle="modal" data-bs-target="#gererN2Modal">Niveau 2</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter className="text-end text-body-secondary">
                                        <CardLink href="#banklink" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Banklink</CardLink>
                                        <CardLink href="#hedelma" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Hedelma</CardLink>
                                        <CardLink href="#semonkey" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Semonkey</CardLink>
                                        <CardLink href="#cnil" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contrôles CNIL</CardLink>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="h-100 conduire">
                                    <CardHeader className="bg-conduire">
                                        <CardTitle className="fw-semibold">Conduire</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <CardSubtitle>Description :</CardSubtitle>
                                        <blockquote className="blockquote mb-0">
                                            <p>Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.</p>
                                            <footer className="blockquote-footer">
                                                <cite title="Source Title">Programme du BUT Informatique</cite>
                                            </footer>
                                        </blockquote>
                                        <br/>
                                        <Row className="text-center">
                                            <Col>
                                                <Button className="bg-conduire" data-bs-toggle="modal" data-bs-target="#conduireN2Modal">Niveau 2</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter className="text-end text-body-secondary">
                                        <CardLink href="#banklink" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Banklink</CardLink>
                                        <CardLink href="#toledo" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Toledo</CardLink>
                                        <CardLink href="#semonkey" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Semonkey</CardLink>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="h-100 collaborer">
                                    <CardHeader className="bg-collaborer">
                                        <CardTitle className="fw-semibold">Collaborer</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <CardSubtitle>Description :</CardSubtitle>
                                        <blockquote className="blockquote mb-0">
                                            <p>Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.</p>
                                            <footer className="blockquote-footer">
                                                <cite title="Source Title">Programme du BUT Informatique</cite>
                                            </footer>
                                        </blockquote>
                                        <br/>
                                        <Row className="text-center">
                                            <Col>
                                                <Button className="bg-collaborer" data-bs-toggle="modal" data-bs-target="#collaborerN2Modal">Niveau 2</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter className="card-footer text-end text-body-secondary">
                                        <CardLink href="#banklink" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Banklink</CardLink>
                                        <CardLink href="#toledo" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Toledo</CardLink>
                                        <CardLink href="#semonkey" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Semonkey</CardLink>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <Modal show={realiserN2} onHide={() => setRealiserN2(false)} aria-labelledby="realiserN2ModalLabel">
                        <div className="modal-content bg-light text-dark">
                            <ModalHeader>
                                <ModalTitle className="fs-5" id="realiserN2ModalLabel">Réaliser - Niveau 2 : Détails</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                Partir des exigences et aller jusqu'à une application complète.<br/>
                                <ul>
                                    <li>Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences.</li>
                                    <li>Appliquer des principes d'accessibilité et d'ergonomie.</li>
                                    <li>Adopter de bonnes pratiques de conception et de programmation.</li>
                                    <li>Vérifier et valider la qualité de l'application par les tests.</li>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="secondary" onClick={() => setRealiserN2(false)}>Fermer</Button>
                            </ModalFooter>
                        </div>
                    </Modal>
                </>
            ) : (
                <>
                    <p>Voici les langages informatiques, frameworks, bibliothèques, logiciels et outils que je maîtrise :</p>
                    <div>
                        <h3 className="subtitle-section">Langages informatiques :</h3>
                        <ul className="skills-list">
                            <li><img className="spinner" src="/img/skills/html.png" alt=""/>&nbsp;HTML</li>
                            <li><img className="spinner" src="/img/skills/css.png" alt=""/>&nbsp;CSS</li>
                            <li><img className="spinner" src="/img/skills/js.png" alt=""/>&nbsp;JavaScript</li>
                            <li><img className="spinner" src="/img/skills/ts.png" alt=""/>&nbsp;TypeScript</li>
                            <li><img className="spinner" src="/img/skills/php.png" alt=""/>&nbsp;PHP</li>
                            <li><img className="spinner" src="/img/skills/python.png" alt=""/>&nbsp;Python</li>
                            <li><img className="spinner" src="/img/skills/java.png" alt=""/>&nbsp;Java</li>
                            <li><img className="spinner" src="/img/skills/c.png" alt=""/>&nbsp;C</li>
                            <li><img className="spinner" src="/img/skills/sql.png" alt=""/>&nbsp;SQL</li>
                            <li><img className="spinner" src="/img/skills/xml.png" alt=""/>&nbsp;XML</li>
                            <li><img className="spinner" src="/img/skills/json.png" alt=""/>&nbsp;JSON</li>
                            <li><img className="spinner" src="/img/skills/markdown.png" alt=""/>&nbsp;Markdown</li>
                            {/*<li<img className="spinner" src="/img/skills/latex.png" alt=""/>&nbsp;LaTeX</li>*/}
                            <li><img className="spinner" src="/img/skills/shell.png" alt=""/>&nbsp;Shell</li>
                        </ul>
                        <h3 className="subtitle-section">Frameworks et bibliothèques :</h3>
                        <ul className="skills-list">
                            <li><img className="spinner" src="/img/skills/bootstrap.png" alt=""/>&nbsp;Bootstrap</li>
                            <li><img className="spinner" src="/img/skills/jquery.png" alt=""/>&nbsp;jQuery</li>
                            <li><img className="spinner" src="/img/skills/react.png" alt=""/>&nbsp;React</li>
                            <li><img className="spinner" src="/img/skills/nodejs.png" alt=""/>&nbsp;Node.js</li>
                            <li><img className="spinner" src="/img/skills/junit.png" alt=""/>&nbsp;JUnit</li>
                            <li><img className="spinner" src="/img/skills/maven.png" alt=""/>&nbsp;Maven</li>
                            <li><img className="spinner" src="/img/skills/mysql.png" alt=""/>&nbsp;MySQL</li>
                            <li><img className="spinner" src="/img/skills/postgresql.png" alt=""/>&nbsp;PostgreSQL</li>
                        </ul>
                        <h3 className="subtitle-section">Logiciels et outils :</h3>
                        <ul className="skills-list">
                            <li><img className="spinner" src="/img/skills/vscode.png" alt=""/>&nbsp;Visual Studio Code</li>
                            <li><img className="spinner" src="/img/skills/git.png" alt=""/>&nbsp;Git</li>
                            <li><img className="spinner" src="/img/skills/github.png" alt=""/>&nbsp;GitHub</li>
                            <li><img className="spinner" src="/img/skills/jetbrains.png" alt=""/>&nbsp;JetBrains</li>
                            <li><img className="spinner" src="/img/skills/eclipse.png" alt=""/>&nbsp;Eclipse</li>
                        </ul>
                    </div>
                </>
            )}
        </section>
    );
}

export default Skills;