import '@styles/components/Footer.css';
import { Col, Container, Row } from "react-bootstrap";
import github from '@assets/skills/github.png';
import linkedin from '@assets/linkedin.png';

export function Footer() {
    return (
        <footer id="footer" className="footer">
            <Container>
                <Row>
                    <Col md={6}>
                        <h4>Réseaux sociaux</h4>
                        <ul id="social-networks">
                            <li>
                                <a className="link" href="https://github.com/cedric-mc" target="_blank" rel="noreferrer">
                                    <img className="p-img" src={github} alt="github"/> GitHub
                                </a>
                            </li>
                            <li>
                                <a className="link" href="https://www.linkedin.com/in/cédric-mariya-constantine-a3a52325a/" target="_blank" rel="noreferrer">
                                    <img className="p-img" src={linkedin} alt="linkedin"/> Linkedin
                                </a>
                            </li>
                        </ul>
                        {/*<h4><a class="link" href="mentions-legales.php">Mentions légales</a></h4>*/}
                        <br/>
                        {/*<p>Vous pouvez trouver la documentation du site qui est en français <a href="https://cedric-mc.github.io">ici</a>. 👈</p>*/}
                        <br/>
                        <p>© par Cédric Mariya Constantine</p>
                    </Col>
                    <Col md={6}>
                        <h4 id="contact">Contactez-moi</h4>
                        <p>
                            Formulaire de contact désactivé pour le moment.
                        </p>
                        <p>
                            Vous pouvez me contacter par mail à l'adresse suivante : <a href="mailto:cedric.mariya.constantine@gmx.fr">cedric.mariya.constantine@gmx.fr</a>
                        </p>
                        {/* <Form method="post">
                            <FormGroup className="mb-1" controlId="nomInput">
                                <FormLabel column="sm">Nom</FormLabel>
                                <FormControl type="text" name="nom" placeholder="Votre nom" required />
                            </FormGroup>
                            <FormGroup className="mb-1" controlId="emailInput">
                                <FormLabel column="sm">Email</FormLabel>
                                <FormControl type="email" name="email" placeholder="exemple@domaine.com" required />
                            </FormGroup>
                            <FormGroup className="mb-3" controlId="messageInput">
                                <FormLabel column="sm">Message</FormLabel>
                                <FormControl as="textarea" rows={3} name="message" placeholder="Votre message"></FormControl>
                            </FormGroup>
                            <Button type="submit" variant="success">Envoyer</Button>
                        </Form> */}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}