import '../../css/sections/parcours.css';
import {Col, ListGroup, ListGroupItem, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";

function Parcours() {
    return (
        <section id="parcours">
            <h2 className="title-section">Mon Parcours</h2>
            <h3 className="subtitle-section">Mon Parcours de Formation</h3>
            <br/>
            <TabContainer id="list-tab-formation" defaultActiveKey="#list-but-informatique">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroupItem action href="#list-but-informatique" variant="info">
                                BUT Informatique
                            </ListGroupItem>
                            <ListGroupItem action href="#list-bac-sti2d" variant="info">
                                BAC STI2D
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <TabContent>
                            <TabPane eventKey="#list-but-informatique">
                                <Row>
                                    <Col sm={6} className="d-flex flex-column justify-content-center">
                                        <h4 className="parcours-name">BUT Informatique</h4>
                                        <p className="fst-italic">
                                            <span className="fw-bold">2022 - 2025</span> (en cours)<br/>
                                            Université Gustave Eiffel<br/>
                                            Champs-sur-Marne<br/>
                                            Parcours A : Réalisation d’applications : conception, développement, validation
                                        </p>
                                    </Col>
                                    <Col sm={6} className="d-flex justify-content-center">
                                        <img src="/img/univ-gustave-eiffel.png" alt="Université Gustave Eiffel" className="parcours-image"/>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane eventKey="#list-bac-sti2d">
                                <Row>
                                    <Col sm={6} className="d-flex flex-column justify-content-center">
                                        <h4 className="parcours-name">BAC STI2D</h4>
                                        <p className="fst-italic">
                                            <span className="fw-bold">2020 - 2022</span><br/>
                                            Lycée Gaston Bachelard<br/>
                                            Chelles<br/>
                                            Spécialité SIN : Système d'Information et Numérique
                                        </p>
                                    </Col>
                                    <Col sm={6} className="d-flex justify-content-center">
                                        <img src="/img/gaston-bachelard.png" alt="Lycée Gaston Bachelard" className="parcours-image"/>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </TabContainer>
            <br/>
            <h3 className="subtitle-section">Mon Parcours Professionnel</h3>
            <br/>
            <TabContainer id="list-tab-professionnel" defaultActiveKey="#list-stage-dev-web-list">
                <Row>
                    <Col sm={8}>
                        <TabContent>
                            <TabPane eventKey="#list-stage-dev-web-list">
                                <Row>
                                    <Col sm={6} className="d-flex justify-content-center">
                                        <img src="/img/crgn-logo.png" alt="CRGN" className="parcours-image"/>
                                    </Col>
                                    <Col sm={6} className="d-flex flex-column justify-content-center">
                                        <h4 className="parcours-name">Stage de développeur web</h4>
                                        <p className="fst-italic">
                                            <span className="fw-bold">Du 17 juin au 9 août 2024</span><br/>
                                            Centre de recherche de la gendarmerie nationale<br/>
                                            Paris<br/>
                                            Développement web applicatif pour la gendarmerie nationale avec utilisation de données
                                        </p>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane eventKey="#list-stage-3eme-list">
                                <Row>
                                    <Col sm={6} className="d-flex justify-content-center">
                                        <img src="/img/bulles-dogs.webp" alt="Bulles Dogs" className="parcours-image"/>
                                    </Col>
                                    <Col sm={6} className="d-flex flex-column justify-content-center">
                                        <h4 className="parcours-name">Stage d'observation de 3<sup>ème</sup></h4>
                                        <p className="fst-italic">
                                            <span className="fw-bold">Semaine du lundi 4 au samedi 9 février 2019</span><br/>
                                            Bulles Dogs<br/>
                                            Chelles<br/>
                                            Toilettage canin
                                        </p>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Col>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroupItem action href="#list-stage-dev-web-list" variant="info">
                                Stage de développeur web
                            </ListGroupItem>
                            <ListGroupItem action href="#list-stage-3eme-list" variant="info">
                                Stage d'observation de 3<sup>ème</sup>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </TabContainer>
        </section>
    );
}

export default Parcours;
