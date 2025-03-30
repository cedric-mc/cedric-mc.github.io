import { Badge, Col, ListGroup, ListGroupItem, Row, Stack, TabContainer, TabContent, TabPane } from "react-bootstrap";
import '@styles/pages/Parcours.css';
import eiffel from '@assets/parcours/univ-gustave-eiffel.png';
import bachelard from '@assets/parcours/gaston-bachelard.png';
import crgn from '@assets/parcours/crgn-logo.png';
import bullesDogs from '@assets/parcours/bulles-dogs.webp';
import MI from '@assets/parcours/ministere_interieur.png';

export function Parcours({ theme }: { theme: string }) {
  return (
    <section id="parcours">
      <h2 className="title-section">Mon Parcours</h2>
      <h3 className="subtitle-section">Mon Parcours de Formation</h3>
      <br />
      <TabContainer id="list-tab-formation" defaultActiveKey="#list-formation-but">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroupItem action href="#list-formation-but" variant="info">
                BUT Informatique
              </ListGroupItem>
              <ListGroupItem action href="#list-formation-bac" variant="info">
                BAC STI2D
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <TabContent>
              <TabPane eventKey="#list-formation-but">
                <Row>
                  <Col className="d-flex flex-column justify-content-center">
                    <h4 className="parcours-name">BUT Informatique</h4>
                    <p className="fst-italic">
                      <span className="fw-bold">2022 - 2025</span> (en cours)<br />
                      Université Gustave Eiffel<br />
                      Champs-sur-Marne<br />
                      Parcours A : Réalisation d’applications : conception, développement, validation
                    </p>
                  </Col>
                  <Col sm={4} className="d-flex justify-content-center">
                    <img src={eiffel} alt="Université Gustave Eiffel" className="parcours-image" />
                  </Col>
                </Row>
              </TabPane>
              <TabPane eventKey="#list-formation-bac">
                <Row>
                  <Col className="d-flex flex-column justify-content-center">
                    <h4 className="parcours-name">BAC STI2D</h4>
                    <p className="fst-italic">
                      <span className="fw-bold">2020 - 2022</span><br />
                      Lycée Gaston Bachelard<br />
                      Chelles<br />
                      Spécialité SIN : Système d'Information et Numérique
                    </p>
                  </Col>
                  <Col sm={4} className="d-flex justify-content-center">
                    <img src={bachelard} alt="Lycée Gaston Bachelard" className="parcours-image" />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
      <br />
      <h3 className="subtitle-section">Mon Parcours Professionnel</h3>
      <br />
      <TabContainer id="list-tab-professionnel" defaultActiveKey="#list-stage-but2">
        <Row>
          <Col sm={8}>
            <TabContent>
              <TabPane eventKey="#list-stage-but3">
                <Row>
                  <Col sm={4} className="d-flex justify-content-center">
                    <img src={MI} alt="Sous-bureau des cabinets" className="parcours-image" />
                  </Col>
                  <Col className="d-flex flex-column justify-content-center">
                    <h4 className="parcours-name">Stage de développeur php</h4>
                    <p className="fst-italic">

                    </p>
                  </Col>
                </Row>
              </TabPane>
              <TabPane eventKey="#list-stage-but2">
                <Row>
                  <Col sm={4} className="d-flex justify-content-center">
                    <img src={crgn} alt="CRGN" className="parcours-image" />
                  </Col>
                  <Col className="d-flex flex-column justify-content-center">
                    <h4 className="parcours-name">Stage de développeur web</h4>
                    <p className="fst-italic">
                      <span className="fw-bold">Du 17 juin au 9 août 2024</span><br />
                      Centre de recherche de la gendarmerie nationale<br />
                      Paris<br />
                      Développement web applicatif pour la gendarmerie nationale avec utilisation de données
                    </p>
                    <Stack direction='horizontal' gap={3}>
                      <Badge bg={theme} className='text-background'>HTML</Badge>
                      <Badge bg={theme} className='text-background'>CSS</Badge>
                      <Badge bg={theme} className='text-background'>JavaScript</Badge>
                      <Badge bg={theme} className='text-background'>PHP</Badge>
                      <Badge bg={theme} className='text-background'>SQL/MySQL</Badge>
                      <Badge bg={theme} className='text-background'>Python</Badge>
                    </Stack>
                  </Col>
                </Row>
              </TabPane>
              <TabPane eventKey="#list-stage-3eme">
                <Row>
                  <Col sm={4} className="d-flex justify-content-center">
                    <img src={bullesDogs} alt="Bulles Dogs" className="parcours-image" />
                  </Col>
                  <Col className="d-flex flex-column justify-content-center">
                    <h4 className="parcours-name">Stage d'observation de 3<sup>ème</sup></h4>
                    <p className="fst-italic">
                      <span className="fw-bold">Semaine du lundi 4 au samedi 9 février 2019</span><br />
                      Bulles Dogs<br />
                      Chelles<br />
                      Toilettage canin
                    </p>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
          <Col sm={4}>
            <ListGroup>
              <ListGroupItem action href="#list-stage-but3" variant="info" disabled>
                Stage de développeur php
              </ListGroupItem>
              <ListGroupItem action href="#list-stage-but2" variant="info">
                Stage de développeur web
              </ListGroupItem>
              <ListGroupItem action href="#list-stage-3eme" variant="info">
                Stage d'observation de 3<sup>ème</sup>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </TabContainer>
    </section>
  );
};
